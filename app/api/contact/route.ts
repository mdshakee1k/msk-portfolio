// ─────────────────────────────────────────────────────────────────
//  POST /api/contact
//  Validates the contact form and sends an email via Resend.
//  Required env vars: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
// ─────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function validate(d: Record<string, unknown>) {
  const e: string[] = [];
  if (!d.name    || String(d.name).trim().length < 2)    e.push("Name must be at least 2 characters.");
  if (!d.email   || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.email))) e.push("A valid email is required.");
  if (!d.message || String(d.message).trim().length < 10) e.push("Message must be at least 10 characters.");
  return e;
}

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json();
    const errors = validate(body);
    if (errors.length) return NextResponse.json({ success: false, errors }, { status: 400 });

    const { name, email, subject, message } = body as {
      name: string; email: string; subject?: string; message: string;
    };

    const { error } = await resend.emails.send({
      from:    process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to:      [process.env.CONTACT_TO_EMAIL  ?? "your@email.com"],
      reply_to: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#1a1a2e;margin-bottom:4px;">New portfolio contact</h2>
          <p style="color:#555;font-size:13px;margin-bottom:24px;">Submitted via msk.dev contact form</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#888;width:80px;">Name</td><td style="font-weight:600;color:#111;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="color:#111;">${escapeHtml(email)}</td></tr>
            ${subject ? `<tr><td style="padding:8px 0;color:#888;">Subject</td><td style="color:#111;">${escapeHtml(subject)}</td></tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;">
          <div style="font-size:15px;line-height:1.7;color:#222;white-space:pre-wrap;">${escapeHtml(message)}</div>
          <p style="margin-top:24px;font-size:12px;color:#aaa;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("[/api/contact] Resend error:", error);
      return NextResponse.json({ success: false, errors: ["Failed to send. Please try again."] }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ success: false, errors: ["Server error."] }, { status: 500 });
  }
}
