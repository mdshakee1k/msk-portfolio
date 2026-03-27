// ─────────────────────────────────────────────────────────────────
//  Experience data
//  iconName maps to a Lucide icon key in ExperienceCard.tsx
// ─────────────────────────────────────────────────────────────────

export interface ExperienceData {
  role:     string;
  company:  string;
  period:   string;
  desc:     string;
  chips:    string[];
  iconName: string;
  color:    string;
  metric?:  { value: string; label: string };
  badge:    string;
  isCurrent?: boolean;
}

export const EXPERIENCE: ExperienceData[] = [
  {
    role:     "BI Analyst",
    company:  "Active Role",
    period:   "2024 — Present",
    desc:     "Building interactive Power BI dashboards with 15+ visuals, writing complex SQL with CTEs and window functions, automating reporting with DAX — reducing manual effort ~60%.",
    chips:    ["Power BI", "SQL", "DAX", "Excel"],
    iconName: "BarChart3",
    color:    "#00FFB3",
    metric:   { value: "~60%", label: "manual effort reduced" },
    badge:    "Current",
    isCurrent: true,
  },
  {
    role:     "Web Dev Intern",
    company:  "SkillCraft Technology",
    period:   "2024",
    desc:     "Developed responsive web interfaces, integrated REST APIs for dynamic content rendering, contributed to full-stack features in a production Agile environment.",
    chips:    ["React", "REST APIs", "Agile"],
    iconName: "Code2",
    color:    "#60A5FA",
    badge:    "Internship",
  },
  {
    role:     "CCBP Academy Fellow",
    company:  "NxtWave",
    period:   "2022 — Present",
    desc:     "Industry-grade Full Stack + Data Science fellowship. BuildAThon winner ×2. Mentor-reviewed projects across React, Node.js, Python, and SQL.",
    chips:    ["Full Stack", "Data Science", "BuildAThon ×2"],
    iconName: "BookOpen",
    color:    "#A78BFA",
    badge:    "Fellowship",
  },
];
