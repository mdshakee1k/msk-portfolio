"use client";

import { useState } from "react";
import type { ContactFormStatus } from "@/types";

export default function ContactForm() {
  const [status,  setStatus]  = useState<ContactFormStatus>("idle");
  const [errors,  setErrors]  = useState<string[]>([]);
  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);
    try {
      const res  = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else { setErrors(data.errors ?? ["Something went wrong."]); setStatus("error"); }
    } catch {
      setErrors(["Network error. Please try again."]);
      setStatus("error");
    }
  };

  const field = (id: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={id} style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted)", letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 6 }}>{label}</label>
      <input
        id={id} type={type} value={form[id]} placeholder={placeholder} required
        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
        style={{ width: "100%", padding: "10px 13px", background: "var(--color-bg2)", border: "1px solid var(--color-border)", borderRadius: 7, color: "var(--color-text)", fontFamily: "var(--font-sans)", fontSize: 13, outline: "none" }}
        onFocus={e  => (e.target.style.borderColor = "var(--color-accent)")}
        onBlur={e   => (e.target.style.borderColor = "var(--color-border)")}
      />
    </div>
  );

  if (status === "success") return (
    <div style={{ textAlign: "center", padding: "32px 0" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--color-heading)", marginBottom: 8 }}>Message sent!</div>
      <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 18 }}>Thanks for reaching out — I'll get back to you soon.</p>
      <button onClick={() => setStatus("idle")} className="btn-outline btn-sm">Send another</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13, marginBottom: 0 }}>
        <div>{field("name",  "Name *",  "text",  "Your name")}</div>
        <div>{field("email", "Email *", "email", "you@example.com")}</div>
      </div>
      {field("subject", "Subject", "text", "What's this about?")}
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="message" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted)", letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 6 }}>Message *</label>
        <textarea
          id="message" value={form.message} required
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Tell me what you're working on..."
          style={{ width: "100%", padding: "10px 13px", background: "var(--color-bg2)", border: "1px solid var(--color-border)", borderRadius: 7, color: "var(--color-text)", fontFamily: "var(--font-sans)", fontSize: 13, outline: "none", resize: "vertical", minHeight: 100 }}
          onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
          onBlur={e  => (e.target.style.borderColor = "var(--color-border)")}
        />
      </div>
      {errors.length > 0 && (
        <div style={{ marginBottom: 14, padding: "10px 14px", background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)", borderRadius: 7 }}>
          {errors.map((e, i) => <p key={i} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#F87171" }}>{e}</p>)}
        </div>
      )}
      <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ width: "100%", justifyContent: "center" }}>
        {status === "loading" ? (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, border: "2px solid #040C18", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
            Sending…
          </span>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
