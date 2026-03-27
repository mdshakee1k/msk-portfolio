"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  /* Read saved preference or OS preference on mount */
  useEffect(() => {
    const saved = localStorage.getItem("msk-theme") as Theme | null;
    const preferLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial: Theme = saved ?? (preferLight ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("msk-theme", next);
  };

  const isLight = theme === "light";

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      style={{
        position: "relative",
        width: 44, height: 24,
        borderRadius: 12,
        border: `1px solid ${isLight ? "rgba(0,150,100,.35)" : "rgba(0,255,179,.35)"}`,
        cursor: "pointer",
        background: isLight ? "rgba(0,150,100,.15)" : "rgba(0,255,179,.18)",
        display: "flex", alignItems: "center", padding: "0 3px",
        flexShrink: 0,
        transition: "background .3s, border-color .3s",
      }}
    >
      <div
        style={{
          width: 18, height: 18, borderRadius: "50%",
          background: isLight ? "#059669" : "var(--color-accent, #00FFB3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: isLight ? "translateX(20px)" : "translateX(0px)",
          transition: "transform .3s cubic-bezier(.34,1.56,.64,1), background .3s",
          flexShrink: 0,
        }}
      >
        {isLight ? (
          /* Sun icon */
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          /* Moon icon */
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#040C18" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </div>
    </button>
  );
}
