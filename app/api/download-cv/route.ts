// ─────────────────────────────────────────────────────────────────
//  GET /api/download-cv
//  Serves the CV from /public/cv/ with download headers.
//  Update NEXT_PUBLIC_CV_FILENAME in .env.local when you upload
//  a new version of your resume.
// ─────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";
import { readFile }     from "fs/promises";
import { join }         from "path";

export async function GET() {
  const filename = process.env.NEXT_PUBLIC_CV_FILENAME ?? "md_cv.pdf";
  const filePath = join(process.cwd(), "public", "cv", filename);

  try {
    const file = await readFile(filePath);
    console.info(`[CV Download] ${filename} — ${new Date().toISOString()}`);

    // Determine content type based on file extension
    const isPdf = filename.toLowerCase().endsWith(".pdf");
    const contentType = isPdf
      ? "application/pdf"
      : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type":        contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control":       "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: `CV file not found. Check /public/cv/${filename}` },
      { status: 404 }
    );
  }
}
