"use client";

import { useEffect, useRef, useState } from "react";
import type { SkillBarData }            from "@/data/skills";

export default function SkillBar({ name, level, color }: SkillBarData) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setWidth(level); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ marginBottom: 17 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-text)" }}>
          {name}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color }}>{level}%</span>
      </div>
      <div style={{ height: 5, background: "rgba(255,255,255,.05)", borderRadius: 3, overflow: "hidden" }}>
        <div
          style={{
            height: "100%", borderRadius: 3,
            background: color,
            boxShadow: `0 0 8px ${color}55`,
            width: `${width}%`,
            transition: "width 1.3s cubic-bezier(.22,1,.36,1)",
          }}
        />
      </div>
    </div>
  );
}
