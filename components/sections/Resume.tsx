"use client";

import { useState } from "react";
import ResumeViewer from "@/components/ui/ResumeViewer";

export default function Resume() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const filename = "md_cv.pdf";

  const checks = [
    { title: "ATS-Optimised",    sub: "Passes automated screening cleanly" },
    { title: "Honest Skill Levels", sub: "Proficient / Intermediate clearly labelled" },
    { title: "Harvard Format",   sub: "Standard recruiter-preferred layout" },
    { title: "Always Current",   sub: "Reflects latest roles and projects" },
  ];

  return (
    <section id="resume" style={{ padding: "72px var(--section-px)" }}>
      <div className="section-inner">
        <div className="section-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          06 / resume
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 52, alignItems: "start" }}>
          <div>
            <div className="section-title reveal" style={{ marginBottom: 18 }}>My <span style={{ color: "var(--color-accent)" }}>Resume</span></div>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--color-muted)", marginBottom: 24 }}>One-page, ATS-optimised resume in Harvard format. Honest skill levels, no fluff.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 24 }}>
              {checks.map((c, i) => (
                <div key={i} className="reveal" style={{ display: "flex", gap: 11, alignItems: "flex-start", transitionDelay: `${i * 60}ms` }}>
                  <div style={{ width: 24, height: 24, borderRadius: 5, background: "rgba(0,255,179,.1)", border: "1px solid rgba(0,255,179,.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div><span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-heading)" }}>{c.title} </span><span style={{ fontSize: 13, color: "var(--color-muted)" }}>{c.sub}</span></div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button 
                onClick={() => setIsViewerOpen(true)}
                className="btn-primary btn-sm"
                style={{ cursor: "pointer" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                View
              </button>
              <a href="/api/download-cv" className="btn-primary btn-sm" download>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download .pdf
              </a>
              <a href="https://linkedin.com/in/mohammedshakeelk" target="_blank" rel="noreferrer" className="btn-outline btn-sm">LinkedIn ↗</a>
            </div>
          </div>

          {/* CV Doc preview */}
          <div 
            className="reveal reveal-right" 
            onClick={() => setIsViewerOpen(true)}
            style={{ background: "var(--color-bg3)", borderRadius: 14, border: "1px solid var(--color-border)", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(6,182,212,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Chrome bar */}
            <div style={{ background: "var(--color-bg2)", padding: "10px 16px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57","#FEBC2E","#28C840"].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "block" }} />)}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--color-muted)" }}>md_cv.pdf</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-accent)" }}>ATS · Harvard</span>
            </div>
            {/* Doc body */}
            <div style={{ padding: 22, background: "#F7F8FA", fontFamily: "Arial,sans-serif" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1A2E", letterSpacing: 2, textAlign: "center" }}>MOHAMMED SHAKEEL K</div>
              <div style={{ fontSize: 9.5, color: "#555", textAlign: "center", marginTop: 3 }}>Bengaluru, KA · github.com/mdshakee1k · linkedin.com/in/mohammedshakeelk</div>
              <div style={{ height: 1.5, background: "#00897B", margin: "8px 0 0" }} />
              {[
                ["Summary",            "Final-year B.Tech Data Science · NxtWave CCBP 4.0 Fellow · BI Analyst & Full Stack Developer."],
                ["Languages (Proficient)", "JavaScript (ES6+) · TypeScript · SQL"],
                ["Languages (Intermediate)","Python · C++ · Java (Basic)"],
                ["Frontend / Backend", "React · Next.js · Node.js · Tailwind CSS · Express"],
                ["Data & BI",          "Power BI · DAX · Excel · Pandas · NumPy"],
                ["Projects",           "EduReach AI · Netflix Clone · BI Dashboard · Tourist Hub · Smart Todo App"],
              ].map(([label, value]) => (
                <div key={label} style={{ marginTop: 9 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: "#1A1A2E", letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</div>
                  <div style={{ height: 0.8, background: "#00897B", opacity: 0.4, margin: "2px 0 3px" }} />
                  <div style={{ fontSize: 9, color: "#333", lineHeight: 1.6 }}>{value}</div>
                </div>
              ))}
              <div style={{ height: 40, background: "linear-gradient(transparent,#F7F8FA)", marginTop: 8 }} />
            </div>
            {/* Footer */}
            <div style={{ padding: "15px 19px", background: "var(--color-bg2)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-heading)" }}>1-page · ATS-ready · .pdf</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--color-muted)", marginTop: 2 }}>Harvard format · honest skill levels</div>
              </div>
              <a href="/api/download-cv" className="btn-primary btn-sm" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
      <ResumeViewer isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} filename={filename} />
    </section>
  );
}
