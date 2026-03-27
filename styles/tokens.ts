// ─────────────────────────────────────────────────────────────────
//  Design Tokens
//  Edit here to retheme the entire site.
//  Import: import { COLORS, FONTS } from "@/styles/tokens"
// ─────────────────────────────────────────────────────────────────

export const COLORS = {
  // Brand
  accent:   "#00FFB3",
  accent2:  "#FF6B35",
  accent3:  "#7C3AED",

  // Backgrounds
  bg:  "#040C18",
  bg2: "#071224",
  bg3: "#0A1929",

  // Text
  text:    "#C8D8E8",
  heading: "#ECF4FF",
  muted:   "#4A6580",

  // UI
  border: "rgba(0,255,179,0.12)",

  // Semantic
  blue:   "#60A5FA",
  purple: "#A78BFA",
  yellow: "#FCD34D",
  orange: "#FB923C",
  green:  "#10B981",
  red:    "#E50914",
} as const;

export const FONTS = {
  sans: "'Manrope', system-ui, sans-serif",
  mono: "'Geist Mono', 'Courier New', monospace",
} as const;

export const RADIUS = {
  sm:  "4px",
  md:  "8px",
  lg:  "12px",
  xl:  "14px",
  xxl: "18px",
} as const;

export const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
} as const;

// Height of the fixed nav — used to offset scroll targets
export const NAV_HEIGHT = 58;
