"use client";

import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "72px var(--section-px)", background: "var(--color-bg2)" }}>
      <div className="section-inner">
        <div className="section-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          05 / work_experience
        </div>
        <div className="section-title reveal" style={{ marginBottom: 48 }}>
          Career <span style={{ color: "var(--color-accent)" }}>Journey</span>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 56 }}>
          {/* Animated track */}
          <div style={{ position: "absolute", left: 18, top: 30, bottom: 30, width: 2, borderRadius: 1, background: "linear-gradient(to bottom,var(--color-accent) 0%,rgba(0,255,179,.4) 40%,rgba(0,255,179,.1) 100%)", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom,rgba(0,255,179,.8),transparent)", animation: "trackFlow 3s linear infinite", backgroundSize: "100% 200%" }} />
          </div>

          {EXPERIENCE.map((exp, i) => (
            <div key={exp.role} className="reveal reveal-left" style={{ position: "relative", marginBottom: i < EXPERIENCE.length - 1 ? 22 : 0, transitionDelay: `${i * 90}ms` }}>
              {/* Node */}
              <div style={{
                position: "absolute", left: -53, top: 22,
                width: 36, height: 36, borderRadius: "50%",
                border: `2px solid ${exp.color}`, background: "var(--color-bg2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 2, color: exp.color,
                ...(exp.isCurrent ? { boxShadow: `0 0 0 4px ${exp.color}20` } : {}),
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {exp.iconName === "BarChart3" && <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>}
                  {exp.iconName === "Code2"    && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
                  {exp.iconName === "BookOpen" && <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>}
                </svg>
                {exp.isCurrent && (
                  <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `1.5px solid ${exp.color}`, opacity: 0.35, animation: "nodeGlow 2.4s ease-in-out infinite" }} />
                )}
              </div>

              {/* Card */}
              <div
                style={{ background: "var(--color-bg3)", borderRadius: 16, padding: "20px 22px", border: "1px solid var(--color-border)", transition: "all .3s cubic-bezier(.22,1,.36,1)", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateX(6px)";
                  el.style.borderColor = "rgba(0,255,179,.2)";
                  el.style.boxShadow = "0 12px 40px rgba(0,0,0,.35),-4px 0 20px rgba(0,255,179,.04)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "";
                  el.style.borderColor = "var(--color-border)";
                  el.style.boxShadow = "";
                }}
              >
                {/* Accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, borderRadius: "3px 0 0 3px", background: exp.color }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "var(--color-heading)", letterSpacing: "-.02em" }}>{exp.role}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: exp.color, marginTop: 3 }}>{exp.company}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted)", background: "var(--color-bg2)", padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>{exp.period}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}>{exp.badge}</span>
                  </div>
                </div>

                <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 13 }}>{exp.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {exp.chips.map(chip => (
                    <span key={chip} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, padding: "3px 10px", borderRadius: 20, background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}25`, transition: "transform .15s" }}>{chip}</span>
                  ))}
                </div>

                {exp.metric && (
                  <div style={{ display: "inline-flex", alignItems: "baseline", gap: 4, marginTop: 10, padding: "6px 12px", background: "rgba(0,255,179,.06)", border: "1px solid rgba(0,255,179,.15)", borderRadius: 8 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-.02em" }}>{exp.metric.value}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--color-muted)" }}>{exp.metric.label}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
