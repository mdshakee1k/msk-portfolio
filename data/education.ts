// ─────────────────────────────────────────────────────────────────
//  Education data  (most recent first)
// ─────────────────────────────────────────────────────────────────

export interface EducationData {
  degree:   string;
  school:   string;
  period:   string;
  desc:     string;
  subjects: string[];
  color:    string;
  badge:    string;
}

export const EDUCATION: EducationData[] = [
  {
    degree:  "B.Tech — Data Science",
    school:  "Garden City University (GCU), Bengaluru",
    period:  "2022 — 2026",
    desc:    "Specialising in building & Scaling Fullstack Web Applications, Big Data Analytics, Deep Learning, and AI Systems. Applying every concept to real-world projects from day one.",
    subjects:["Machine Learning", "Deep Learning", "Database Management", "Big Data Analytics", "Statistics & Probability", "Software Engineering"],
    color:   "#00FFB3",
    badge:   "Bachelors",
  },
  {
    degree:  "Class 12 — PCMB Stream",
    school:  "SRS PU College Challakere Chitradurga, Karnataka",
    period:  "2020 — 2022",
    desc:    "Completed Intermediate with Maths, Physics, Chemistry & Biology. Built a strong foundation in analytical reasoning and mathematical problem-solving — the core of my engineering mindset today.",
    subjects:["Mathematics", "Physics", "Chemistry","Biology"],
    color:   "#FCD34D",
    badge:   "Intermediate",
  },
  {
    degree:  "Class 10 — SSC",
    school:  "Chinmaya Public School Challakere, Chitradurga, Karnataka",
    period:  "20119-2020",
    desc:    "Completed SSC with a strong academic record. Early interest in Mathematics and Science drove the decision to pursue an engineering path.",
    subjects:[],
    color:   "#60A5FA",
    badge:   "Secondary",
  },
];
