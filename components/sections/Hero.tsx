"use client";

import TypeWriter from "@/ui/TypeWriter";
import StatCard   from "@/ui/StatCard";
import { navTo }  from "@/lib/utils";
import { TYPEWRITER_TEXTS } from "@/lib/constants";

const STATS = [
  { value: "6+",  label: "projects_shipped", color: "#00FFB3", border: "rgba(0,255,179,.15)",  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { value: "90%", label: "sql_proficiency",  color: "#60A5FA", border: "rgba(96,165,250,.15)", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
  { value: "4",   label: "certifications",   color: "#FF6B35", border: "rgba(255,107,53,.15)", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { value: "2+",  label: "years_building",   color: "#A78BFA", border: "rgba(167,139,250,.15)",icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
];

export default function Hero() {
  return (
    <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 var(--section-px)", paddingTop: "var(--nav-height)", position: "relative" }}>
      {/* Ambient orbs */}
      <div className="hero-orb1" style={{ position: "absolute", top: "18%", right: "5%",  width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,255,179,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div className="hero-orb2" style={{ position: "absolute", bottom: "10%", left: "2%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,53,.07) 0%,transparent 70%)",  pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "55%", right: "20%", width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,.05) 0%,transparent 70%)", pointerEvents: "none", animation: "orbFloat2 22s ease-in-out infinite reverse" }} />

      <div style={{ maxWidth: 860, zIndex: 2, width: "100%" }}>
        {/* Available pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-accent)", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-accent)", letterSpacing: "3px", textTransform: "uppercase" }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", marginBottom: 10, letterSpacing: 1 }}>Hello, World. I'm —</p>
        <div style={{ marginBottom: 18, overflow: "hidden" }}>
          <span style={{ display: "block", fontSize: "clamp(38px,8vw,80px)", fontWeight: 800, lineHeight: 1.04, color: "var(--color-heading)", letterSpacing: "-.035em", animation: "titleReveal .7s cubic-bezier(.22,1,.36,1) .1s both" }}>Mohammed</span>
          <span style={{ display: "block", fontSize: "clamp(38px,8vw,80px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-.035em", background: "linear-gradient(90deg,#00FFB3 0%,#00e8ff 40%,#00FFB3 80%,#7effd4 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "titleReveal .7s cubic-bezier(.22,1,.36,1) .22s both, shimmer 4s linear 1s infinite" }}>Shakeel K</span>
        </div>

        {/* Accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, animation: "fadeUp .6s ease .35s both" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: ".04em" }}>
            &lt; b.tech data science &nbsp;·&nbsp; bi analyst &nbsp;·&nbsp; nxtwave ccbp fellow /&gt;
          </span>
        </div>
        <div style={{ height: 2, width: 120, marginBottom: 22, borderRadius: 2, background: "linear-gradient(90deg,var(--color-accent),transparent)", animation: "fadeUp .5s ease .4s both" }} />

        {/* Typewriter role */}
        <div style={{ fontSize: "clamp(16px,3vw,25px)", fontWeight: 600, color: "var(--color-text)", marginBottom: 22, minHeight: 36, display: "flex", alignItems: "center", letterSpacing: "-.01em" }}>
          <TypeWriter texts={TYPEWRITER_TEXTS} />
        </div>

        {/* Bio */}
        <p style={{ fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.85, color: "var(--color-muted)", maxWidth: 540, marginBottom: 32 }}>
          Final-year B.Tech Data Science student &amp; NxtWave CCBP Fellow, building at the intersection of{" "}
          <span style={{ color: "var(--color-text)" }}>data intelligence</span>,{" "}
          <span style={{ color: "var(--color-accent)" }}>full-stack engineering</span>, and{" "}
          <span style={{ color: "#FF6B35" }}>AI systems</span>.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => navTo("projects")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            View Projects
          </button>
          <button className="btn-outline" onClick={() => navTo("contact")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Get In Touch
          </button>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, maxWidth: 680 }}>
          {STATS.map(s => (
            <StatCard key={s.label} value={s.value} label={s.label} color={s.color} borderColor={s.border} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
