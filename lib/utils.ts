// ─────────────────────────────────────────────────────────────────
//  Utility helpers
// ─────────────────────────────────────────────────────────────────

import { NAV_HEIGHT } from "@/styles/tokens";

/**
 * Smooth-scroll to a section by id, offsetting for the fixed nav.
 * Use this everywhere instead of window.scrollTo or scrollIntoView
 * to avoid shadowing the native window.scrollTo() function.
 */
export function navTo(id: string, extraOffset = 8): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - extraOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

/** Merge class names (tiny alternative to clsx) */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Stagger delay string for CSS animation-delay */
export function stagger(index: number, baseMs = 80): string {
  return `${index * baseMs}ms`;
}

/** Convert a title string to a URL-safe slug */
export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
