// ─────────────────────────────────────────────────────────────────
//  Site-wide constants
//  Non-sensitive values that don't belong in .env
// ─────────────────────────────────────────────────────────────────

export const SITE = {
  name:     "Mohammed Shakeel K",
  handle:   "msk.dev",
  tagline:  "BI Analyst · Full Stack Developer · Data Science Engineer",
  email:    "your@email.com",          // ← update with real email
  github:   "https://github.com/mdshakee1k",
  linkedin: "https://linkedin.com/in/mohammedshakeelk",
  location: "Bengaluru, Karnataka, India",
} as const;

export const NAV_LINKS = [
  { label: "About",         href: "about"         },
  { label: "Skills",        href: "skills"        },
  { label: "Projects",      href: "projects"      },
  { label: "Education",     href: "education"     },
  { label: "Certifications", href: "certifications" },
  { label: "Experience",    href: "experience"    },
  { label: "Resume",        href: "resume"        },
  { label: "Contact",       href: "contact"       },
] as const;

export const TYPEWRITER_TEXTS = [
  "BI Analyst.",
  "Full Stack Developer.",
  "Data Science Engineer.",
  "AI/ML Builder.",
] as const;

export const CV_FILENAME = "Mohammed_Shakeel_K_Resume.docx";

export const QUICK_FACTS = [
  { emoji: "📍", key: "Location",  value: "Bengaluru, Karnataka" },
  { emoji: "🎓", key: "Degree",    value: "B.Tech Data Science (Final Year)" },
  { emoji: "💼", key: "Role",      value: "BI Analyst | Full Stack Dev" },
  { emoji: "🏫", key: "Institute", value: "NxtWave CCBP 4.0 Fellow" },
  { emoji: "🔭", key: "Building",  value: "EduReach AI + YouTube Channel" },
  { emoji: "⚡", key: "Stack",     value: "React · Node · Python · Power BI" },
] as const;

export const STAT_CARDS = [
  { value: "6+",  label: "projects_shipped", colorKey: "accent"  },
  { value: "90%", label: "sql_proficiency",  colorKey: "blue"    },
  { value: "4",   label: "certifications",   colorKey: "accent2" },
  { value: "2+",  label: "years_building",   colorKey: "purple"  },
] as const;
