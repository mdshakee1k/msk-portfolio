"use client";

import { PROJECTS }  from "@/data/projects";
import { slugify, stagger } from "@/lib/utils";
import { SITE }       from "@/lib/constants";

const TAG_ICON: Record<string, string> = {
  Brain:    "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
  Globe:    "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z M2 12H22 M12 2C9.33 5 8 8.33 8 12C8 15.67 9.33 19 12 22C14.67 19 16 15.67 16 12C16 8.33 14.67 5 12 2Z",
  BarChart3:"M18 20V10 M12 20V4 M6 20V14",
  Layers:   "M12 2 L2 7 L12 12 L22 7 L12 2Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12",
  Zap:      "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "72px var(--section-px)" }}>
      <div className="section-inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
          <div>
            <div className="section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              03 / projects_showcase
            </div>
            <div className="section-title reveal">Things I've <span style={{ color: "var(--color-accent)" }}>Built</span></div>
          </div>
          <a href={SITE.github} target="_blank" rel="noreferrer" className="btn-outline btn-sm">All Repos ↗</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,290px),1fr))", gap: 14 }}>
          {PROJECTS.map((p, i) => {
            const slug = slugify(p.title);
            const href = p.repo || p.live || SITE.github;
            const iconPath = TAG_ICON[p.iconName] ?? TAG_ICON.Globe;
            return (
              <div
                key={p.title}
                className="reveal"
                style={{
                  background: "var(--color-bg3)", border: "1px solid var(--color-border)",
                  borderRadius: 13, padding: 22, cursor: "pointer",
                  position: "relative", overflow: "hidden",
                  transition: "all .32s cubic-bezier(.22,1,.36,1)",
                  transitionDelay: stagger(i, 70),
                  animationDelay: stagger(i, 70),
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = `${p.color}45`;
                  el.style.boxShadow   = `0 16px 40px ${p.color}12`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "";
                  el.style.borderColor = "var(--color-border)";
                  el.style.boxShadow   = "";
                }}
              >
                {/* Top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${p.color},${p.color}88)` }} />

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${p.color}1E`, border: `1px solid ${p.color}38`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={iconPath} />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 8px", borderRadius: 4, color: p.color, background: `${p.color}14` }}>{p.stat}</span>
                </div>

                {/* URL path */}
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--color-muted)", marginBottom: 6 }}>
                  <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>~</span>
                  <span style={{ opacity: 0.5 }}>/</span>
                  <span>projects</span>
                  <span style={{ opacity: 0.5 }}>/</span>
                  <span style={{ color: p.color }}>{slug}</span>
                </div>

                {/* Title */}
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: "-.02em", lineHeight: 1.2, background: `linear-gradient(90deg,var(--color-heading) 60%,rgba(200,216,232,.6) 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{p.title}</div>

                {/* Live link */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted)", marginBottom: 10 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, flexShrink: 0, animation: "pulse 2s infinite" }} />
                  <a href={href} target="_blank" rel="noreferrer" style={{ color: p.color, textDecoration: "none" }} onClick={e => e.stopPropagation()}>
                    {href.replace("https://", "")}
                  </a>
                </div>

                <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 14 }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
