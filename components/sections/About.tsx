import { SITE, QUICK_FACTS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" style={{ padding: "72px var(--section-px)" }}>
      <div className="section-inner">
        <div className="section-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          01 / about_me
        </div>
        <div className="section-title reveal" style={{ marginBottom: 36 }}>
          The Human Behind<br /><span style={{ color: "var(--color-accent)" }}>The Terminal</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" }}>
          {/* Bio */}
          <div>
            {[
              <p key="1">I'm <strong style={{ color: "var(--color-heading)" }}>Mohammed Shakeel K</strong> — a data-obsessed developer who loves turning raw numbers into insight and raw ideas into shipped products.</p>,
              <p key="2">Currently finishing my B.Tech in <span style={{ color: "var(--color-accent)" }}>Data Science</span> while working as a <span style={{ color: "#FF6B35" }}>BI Analyst</span>, building dashboards, writing complex SQL, and shipping full-stack projects on the side.</p>,
              <p key="3" style={{ color: "var(--color-muted)" }}>I'm an <strong style={{ color: "var(--color-text)" }}>NxtWave CCBP Academy Fellow</strong> with a web dev internship at SkillCraft Technology under my belt. I believe great engineers write code that tells a story.</p>,
            ].map((p, i) => (
              <div key={i} className="reveal" style={{ fontSize: 15, lineHeight: 1.9, marginBottom: 16, transitionDelay: `${i * 60}ms` }}>{p}</div>
            ))}

            <div className="reveal" style={{ display: "flex", gap: 11, flexWrap: "wrap", marginTop: 28, transitionDelay: "200ms" }}>
              {[
                { href: SITE.github,   label: "GitHub" },
                { href: SITE.linkedin, label: "LinkedIn" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn-outline btn-sm">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="reveal reveal-right" style={{ background: "var(--color-bg3)", borderRadius: 14, padding: "20px 18px", border: "1px solid var(--color-border)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-accent)", marginBottom: 14 }}>&gt; quick_facts.json</div>
            {QUICK_FACTS.map((f, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, padding: "8px 0", borderBottom: i < QUICK_FACTS.length - 1 ? "1px solid var(--color-border)" : "none", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", whiteSpace: "nowrap" }}>{f.emoji} {f.key}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text)", textAlign: "right", flex: 1, minWidth: 100 }}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
