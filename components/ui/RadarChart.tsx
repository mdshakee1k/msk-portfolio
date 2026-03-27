"use client";

import { useState, useEffect } from "react";
import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RADAR_DATA, RADAR_TARGET } from "@/data/skills";

interface MergedRadarData {
  subject: string;
  current: number;
  target: number;
}

const mergedData: MergedRadarData[] = RADAR_DATA.map((current, i) => ({
  subject: current.subject,
  current: current.A,
  target: RADAR_TARGET[i]?.A || 0,
}));

const COLORS = {
  current: "#00FFB3",
  target: "#A78BFA",
};

export default function RadarChart() {
  const [mode, setMode] = useState<"current" | "target" | "both">("current");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [displayValues, setDisplayValues] = useState<{ [key: string]: number }>(
    mergedData.reduce((acc, skill) => ({ ...acc, [skill.subject]: 0 }), {})
  );

  // Animate counter values
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    mergedData.forEach((skill) => {
      const targetVal = mode === "target" ? skill.target : skill.current;
      let current = displayValues[skill.subject] || 0;
      if (current < targetVal) {
        const interval = setInterval(() => {
          setDisplayValues((prev) => ({
            ...prev,
            [skill.subject]: Math.min(prev[skill.subject] + 2, targetVal),
          }));
        }, 20);
        intervals.push(interval);
      }
    });
    return () => intervals.forEach(clearInterval);
  }, [mode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <style>{`
        @keyframes radarGlow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(0, 255, 179, 0.3)); }
          50% { filter: drop-shadow(0 0 24px rgba(0, 255, 179, 0.6)); }
        }
        @keyframes radarPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-8px) rotateX(5deg); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes chipPop {
          0% { transform: scale(0.9) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes radarRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .radar-3d-box {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        .radar-chip-3d {
          animation: chipPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* 3D Chart Container */}
      <div
        className="radar-3d-box"
        style={{
          background: "linear-gradient(135deg, rgba(0, 255, 179, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%)",
          border: "1.5px solid rgba(0,255,179,.2)",
          borderRadius: 20,
          padding: 16,
          minHeight: 340,
          position: "relative",
          overflow: "hidden",
          boxShadow: `
            inset 0 1px 2px rgba(0,255,179,.1),
            0 0 40px rgba(0,255,179,.08),
            0 8px 32px rgba(0,0,0,.2)
          `,
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Animated background gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            background: mode === "both" 
              ? "radial-gradient(circle, rgba(0,255,179,0.1) 0%, rgba(167,139,250,0.05) 50%, transparent 100%)"
              : `radial-gradient(circle, ${mode === "current" ? "rgba(0,255,179,0.15)" : "rgba(167,139,250,0.15)"} 0%, transparent 100%)`,
            filter: "blur(40px)",
            animation: "radarPulse 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <ResponsiveContainer width="100%" height={280}>
          <RechartsRadar
            data={mergedData}
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            style={{ 
              overflow: "visible",
              filter: "drop-shadow(0 0 8px rgba(0,255,179,0.15))",
              animation: "radarGlow 3s ease-in-out infinite",
            }}
          >
            <defs>
              <linearGradient id="radarGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFB3" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#00FFB3" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="radarGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            
            <PolarGrid 
              stroke="rgba(0,255,179,.08)" 
              strokeDasharray="5,5"
            />
            
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ 
                fill: "var(--color-muted)", 
                fontSize: 11,
                fontWeight: 600,
              }} 
            />
            
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "rgba(0,255,179,.2)", fontSize: 8 }}
            />

            {(mode === "current" || mode === "both") && (
              <Radar
                name="Current"
                dataKey="current"
                stroke={COLORS.current}
                strokeWidth={2.5}
                fill="url(#radarGradientGreen)"
                fillOpacity={mode === "both" ? 0.12 : 0.2}
                isAnimationActive
                animationDuration={900}
                animationEasing="ease-out"
              />
            )}

            {(mode === "target" || mode === "both") && (
              <Radar
                name="Target (6 mo)"
                dataKey="target"
                stroke={COLORS.target}
                strokeWidth={2.5}
                strokeDasharray="8,4"
                fill="url(#radarGradientPurple)"
                fillOpacity={mode === "both" ? 0.12 : 0.2}
                isAnimationActive
                animationDuration={900}
                animationEasing="ease-out"
              />
            )}

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(7, 18, 36, 0.98)",
                border: "1.5px solid rgba(0,255,179,.4)",
                borderRadius: "12px",
                color: "var(--color-heading)",
                boxShadow: "0 8px 32px rgba(0,255,179,.15), inset 0 1px 0 rgba(255,255,255,.1)",
                padding: "12px 16px",
              }}
              cursor={{ fill: "rgba(0,255,179,.1)" }}
              labelStyle={{ color: "#00FFB3", fontWeight: 600 }}
            />
          </RechartsRadar>
        </ResponsiveContainer>
      </div>

      {/* Enhanced 3D Controls */}
      <div 
        style={{ 
          display: "flex", 
          gap: 8, 
          flexWrap: "wrap",
          perspective: 1000,
        }}
      >
        {[
          { name: "current", label: "Current", color: "#00FFB3" },
          { name: "target", label: "Target (6 mo)", color: "#A78BFA" },
          { name: "both", label: "Compare", color: "#00FFB3" },
        ].map((btn) => (
          <button
            key={btn.name}
            onClick={() => setMode(btn.name as "current" | "target" | "both")}
            style={{
              padding: "10px 20px",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: mode === btn.name ? 700 : 500,
              borderRadius: 10,
              cursor: "pointer",
              border: mode === btn.name 
                ? `2px solid ${btn.color}` 
                : `1.5px solid ${btn.color}30`,
              background: mode === btn.name 
                ? `linear-gradient(135deg, ${btn.color}20, ${btn.color}08)`
                : "transparent",
              color: mode === btn.name ? btn.color : "var(--color-muted)",
              letterSpacing: ".05em",
              textTransform: "uppercase",
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: mode === btn.name ? "scale(1.05) translateY(-2px)" : "scale(1)",
              boxShadow: mode === btn.name 
                ? `0 8px 24px ${btn.color}20, inset 0 1px 0 ${btn.color}40`
                : "none",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              if (mode !== btn.name) {
                target.style.transform = "scale(1.02) translateY(-1px)";
                target.style.borderColor = btn.color + "60";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              if (mode !== btn.name) {
                target.style.transform = "scale(1)";
                target.style.borderColor = btn.color + "30";
              }
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* 3D Skill Chips Grid */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3,1fr)", 
          gap: 12,
          perspective: 1200,
        }}
      >
        {mergedData.map((skill, i) => {
          const chipColors = ["#00FFB3", "#60A5FA", "#00FFB3", "#A78BFA", "#00FFB3", "#FCD34D"];
          const color = chipColors[i] || "#00FFB3";
          const val = displayValues[skill.subject] || 0;
          const isHovered = hoveredSkill === i;

          return (
            <div
              key={skill.subject}
              className="radar-chip-3d"
              onMouseEnter={() => setHoveredSkill(i)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                background: `linear-gradient(135deg, ${color}12, ${color}04)`,
                border: `1.5px solid ${isHovered ? color + "60" : color + "20"}`,
                borderRadius: 14,
                padding: 12,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: isHovered 
                  ? "translateY(-8px) scale(1.05) rotateX(5deg)"
                  : "translateY(0) scale(1) rotateX(0deg)",
                boxShadow: isHovered
                  ? `
                    0 12px 32px ${color}25, 
                    inset 0 1px 0 ${color}30,
                    0 0 20px ${color}15
                  `
                  : `0 4px 12px ${color}08, inset 0 1px 0 ${color}10`,
              }}
            >
              {/* Shimmer effect on hover */}
              {isHovered && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
                    animation: "shimmer 2s infinite",
                    backgroundSize: "200% 200%",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Top label */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, position: "relative", zIndex: 1 }}>
                <span style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: 9, 
                  color: "var(--color-muted)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>
                  {skill.subject}
                </span>
                {isHovered && (
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: color,
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}>
                    ◆
                  </span>
                )}
              </div>

              {/* Animated circular meter */}
              <div style={{ position: "relative", width: "100%", height: 60 }}>
                {/* Background circle */}
                <svg
                  style={{ position: "absolute", width: "100%", height: "100%" }}
                  viewBox="0 0 120 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 10 50 A 40 40 0 0 1 110 50"
                    fill="none"
                    stroke="rgba(255,255,255,.06)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Animated progress arc */}
                  <path
                    d="M 10 50 A 40 40 0 0 1 110 50"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${((val / 100) * 200).toFixed(1)} 200`}
                    style={{
                      transition: "stroke-dasharray 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                      filter: `drop-shadow(0 0 8px ${color}40)`,
                    }}
                  />
                </svg>
                {/* Center value */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  zIndex: 10,
                }}>
                  <div style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: color,
                    letterSpacing: "-.03em",
                    lineHeight: 1,
                    textShadow: `0 0 12px ${color}40`,
                  }}>
                    {val}
                  </div>
                  <div style={{
                    fontSize: 8,
                    fontWeight: 600,
                    color: "var(--color-muted)",
                    letterSpacing: "0.05em",
                    marginTop: 2,
                  }}>
                    %
                  </div>
                </div>
              </div>

              {/* Bottom target indicator */}
              <div style={{
                fontSize: 9,
                color: "var(--color-muted)",
                fontFamily: "var(--font-mono)",
                position: "relative",
                zIndex: 1,
              }}>
                Target: <span style={{ color: "#A78BFA", fontWeight: 600 }}>{skill.target}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
