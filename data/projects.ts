// ─────────────────────────────────────────────────────────────────
//  Projects data
//  To add a project: copy one block, fill in the fields, save.
//  iconName must match a key in ICON_MAP inside ProjectCard.tsx
// ─────────────────────────────────────────────────────────────────

export interface ProjectData {
  title:    string;
  desc:     string;
  tags:     string[];
  iconName: string;
  color:    string;
  stat:     string;
  live:     string;
  repo?:    string;
}

export const PROJECTS: ProjectData[] = [
  {
    title:    "EduReach AI Platform",
    desc:     "LangChain + Gemini powered educational assistant with RAG pipeline and deep agent architecture.",
    tags:     ["LangChain", "Gemini", "Python", "FastAPI"],
    iconName: "Brain",
    color:    "#7C3AED",
    stat:     "Multi-agent",
    live:     "#",
    repo:     "https://github.com/mdshakee1k",
  },
  {
    title:    "Netflix Clone",
    desc:     "Full-featured streaming UI with TMDB API integration, JWT auth, and dynamic content rows.",
    tags:     ["React", "Node.js", "REST API", "CSS"],
    iconName: "Globe",
    color:    "#E50914",
    stat:     "Full Stack",
    live:     "https://github.com/mdshakee1k",
    repo:     "https://github.com/mdshakee1k",
  },
  {
    title:    "BI Analytics Dashboard",
    desc:     "Interactive Power BI report with DAX measures, drill-throughs, and real-time KPI monitoring.",
    tags:     ["Power BI", "DAX", "SQL", "Excel"],
    iconName: "BarChart3",
    color:    "#00FFB3",
    stat:     "15+ Visuals",
    live:     "#",
  },
  {
    title:    "Tourist Places Hub",
    desc:     "Responsive travel discovery platform with filter system, Maps API, and smooth animations.",
    tags:     ["HTML", "CSS", "JavaScript", "Maps API"],
    iconName: "Globe",
    color:    "#10B981",
    stat:     "Responsive",
    live:     "https://github.com/mdshakee1k",
    repo:     "https://github.com/mdshakee1k",
  },
  {
    title:    "Smart Todo App",
    desc:     "Task manager with localStorage persistence, priority tags, drag-and-drop, and filters.",
    tags:     ["React", "localStorage", "CSS Modules"],
    iconName: "Layers",
    color:    "#F59E0B",
    stat:     "CRUD App",
    live:     "#",
  },
  {
    title:    "FoodBunch Navigation",
    desc:     "Multi-page food ordering SPA with animated nav, cart logic, and responsive layout.",
    tags:     ["React", "React Router", "Context API"],
    iconName: "Zap",
    color:    "#FF6B35",
    stat:     "SPA",
    live:     "#",
  },
];
