"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value:    string;   // e.g. "6+" or "90%"
  label:    string;
  color:    string;
  icon:     React.ReactNode;
  borderColor: string;
}

export default function StatCard({ value, label, color, icon, borderColor }: Props) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const num    = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/\d/g, "");

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        let cur = 0;
        const dur  = 1200;
        const step = Math.max(Math.floor(dur / Math.max(num, 1)), 40);
        const t = setInterval(() => {
          cur++;
          setDisplay(cur + suffix);
          if (cur >= num) clearInterval(t);
        }, step);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--color-bg3)",
        border: `1px solid ${borderColor}`,
        borderRadius: 12, padding: "15px 17px",
        display: "flex", alignItems: "center", gap: 12,
        transition: "transform .25s, box-shadow .25s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,.3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      <div style={{ width: 38, height: 38, borderRadius: 9, background: `${color}1E`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 21, fontWeight: 800, color: "var(--color-heading)", lineHeight: 1, letterSpacing: "-.025em" }}>
          {display || value}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--color-muted)", marginTop: 3 }}>
          {label}
        </div>
      </div>
    </div>
  );
}
