// ─────────────────────────────────────────────────────────────────
//  Skills data
//  Update `level` (0–100) as your proficiency grows.
// ─────────────────────────────────────────────────────────────────

export interface SkillBarData {
  name:  string;
  level: number;  // 0–100
  color: string;
}

export interface RadarData {
  subject: string;
  A:       number; // 0–100
}

export const SKILL_BARS: SkillBarData[] = [
  { name: "SQL & Databases",          level: 90, color: "#00FFB3" },
  { name: "Power BI / DAX",           level: 85, color: "#00FFB3" },
  { name: "JavaScript / TypeScript",  level: 82, color: "#60A5FA" },
  { name: "React / Next.js",          level: 80, color: "#A78BFA" },
  { name: "Node.js / Express",        level: 72, color: "#FF6B35" },
  { name: "Python (Intermediate)",    level: 55, color: "#FCD34D" },
  { name: "C++ (Intermediate)",       level: 50, color: "#FB923C" },
];

export const RADAR_DATA: RadarData[] = [
  { subject: "Frontend", A: 85 },
  { subject: "Backend",  A: 72 },
  { subject: "SQL/DB",   A: 90 },
  { subject: "AI/ML",    A: 74 },
  { subject: "Power BI", A: 85 },
  { subject: "DSA",      A: 65 },
];

// 6-month target levels (shown in the radar "Compare" mode)
export const RADAR_TARGET: RadarData[] = [
  { subject: "Frontend", A: 92 },
  { subject: "Backend",  A: 82 },
  { subject: "SQL/DB",   A: 93 },
  { subject: "AI/ML",    A: 88 },
  { subject: "Power BI", A: 88 },
  { subject: "DSA",      A: 78 },
];

// Grouped technology tags (colour keys match COLORS in tokens.ts)
export const TECH_GROUPS = [
  {
    label: "Frontend",
    colorKey: "accent",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend & DB",
    colorKey: "blue",
    tags: ["Node.js", "Express", "SQL", "MongoDB", "REST APIs", "FastAPI"],
  },
  {
    label: "Languages",
    colorKey: "accent2",
    tags: ["Python", "C++", "Java (Basic)", "Git"],
  },
  {
    label: "AI / ML & BI",
    colorKey: "purple",
    tags: ["LangChain", "Gemini API", "Power BI", "DAX", "Excel", "Pandas"],
  },
] as const;
