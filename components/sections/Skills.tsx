"use client";

import SkillBar        from "@/ui/SkillBar";
import RadarChart      from "@/ui/RadarChart";
import { SKILL_BARS, TECH_GROUPS } from "@/data/skills";
import { COLORS }      from "@/styles/tokens";

const colorMap: Record<string, string> = {
  accent:  COLORS.accent,
  blue:    COLORS.blue,
  accent2: COLORS.accent2,
  purple:  COLORS.purple,
  yellow:  COLORS.yellow,
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "72px var(--section-px)", background: "var(--color-bg2)" }}>
      <div className="section-inner">
        <div className="section-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          02 / skills_matrix
        </div>
        <div className="section-title reveal" style={{ marginBottom: 44 }}>Technical <span style={{ color: "var(--color-accent)" }}>Arsenal</span></div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" }}>
          {/* Left col: bars + tags */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", marginBottom: 18 }}>// proficiency levels</div>
            {SKILL_BARS.map((s, i) => (
              <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <SkillBar {...s} />
              </div>
            ))}

            {/* 3-D grouped tech tags */}
            <div style={{ marginTop: 28 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", marginBottom: 16 }}>// technologies</div>
              {TECH_GROUPS.map((group, gi) => {
                const col = colorMap[group.colorKey] ?? COLORS.accent;
                return (
                  <div key={group.label} className="reveal" style={{ marginBottom: 16, transitionDelay: `${gi * 80}ms` }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 9, opacity: 0.6, display: "flex", alignItems: "center", gap: 6, color: col }}>
                      {group.label}
                      <span style={{ flex: 1, height: 1, background: col, opacity: 0.2 }} />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 9, perspective: 600 }}>
                      {group.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 5,
                            padding: "7px 14px",
                            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                            color: col, whiteSpace: "nowrap", letterSpacing: "0.02em",
                            borderRadius: 6, cursor: "default", position: "relative",
                            background: `linear-gradient(145deg,${col}20,${col}08)`,
                            border: `1px solid ${col}45`,
                            borderBottom: `2px solid ${col}70`,
                            boxShadow: `0 4px 14px ${col}15, 0 1px 3px rgba(0,0,0,.4), inset 0 1px 0 ${col}30`,
                            transform: "perspective(400px) rotateX(9deg) rotateY(-2deg)",
                            transition: "transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s, border-color .22s",
                          }}
                          onMouseEnter={e => {
                            const t = e.currentTarget as HTMLSpanElement;
                            t.style.transform = "perspective(400px) rotateX(0deg) rotateY(0deg) translateY(-4px) scale(1.06)";
                            t.style.boxShadow = `0 8px 24px ${col}40, inset 0 1px 0 ${col}50`;
                            t.style.borderColor = `${col}80`;
                            t.style.color = "#fff";
                          }}
                          onMouseLeave={e => {
                            const t = e.currentTarget as HTMLSpanElement;
                            t.style.transform = "perspective(400px) rotateX(9deg) rotateY(-2deg)";
                            t.style.boxShadow = `0 4px 14px ${col}15, 0 1px 3px rgba(0,0,0,.4), inset 0 1px 0 ${col}30`;
                            t.style.borderColor = `${col}45`;
                            t.style.color = col;
                          }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: col, flexShrink: 0, boxShadow: `0 0 6px ${col}` }} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right col: radar chart */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", marginBottom: 14 }}>// competency radar — hover to inspect</div>
            <RadarChart />
          </div>
        </div>
      </div>
    </section>
  );
}
