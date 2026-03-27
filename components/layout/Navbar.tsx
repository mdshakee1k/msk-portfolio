"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE }     from "@/lib/constants";
import { navTo }               from "@/lib/utils";
import ThemeToggle             from "@/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [activeId,  setActiveId]  = useState("");

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section highlight */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { threshold: 0.4 },
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      id="main-nav"
      style={{
        position: "sticky", top: 0, zIndex: 200,
        padding: "13px 5%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(4,12,24,.98)" : "rgba(4,12,24,.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,255,179,.12)",
        transition: "background .3s",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: "flex", alignItems: "center", gap: 9, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        aria-label="Scroll to top"
      >
        <div style={{ width: 30, height: 30, borderRadius: 7, background: "rgba(0,255,179,.12)", border: "1px solid rgba(0,255,179,.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-accent)", fontWeight: 500, letterSpacing: "0.03em" }}>
          msk.dev
        </span>
      </button>

      {/* Links */}
      <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
        {NAV_LINKS.map(link => (
          <button
            key={link.href}
            onClick={() => navTo(link.href)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              color: activeId === link.href ? "var(--color-accent)" : "var(--color-muted)",
              transition: "color .2s", letterSpacing: "0.02em",
            }}
          >
            {link.label}
          </button>
        ))}

        {/* GitHub icon */}
        <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub"
          style={{ color: "var(--color-muted)", display: "flex", transition: "color .2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
