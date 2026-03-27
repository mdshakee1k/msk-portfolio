// ─────────────────────────────────────────────────────────────────
//  Shared TypeScript types
//  Import anywhere: import type { Project } from "@/types"
// ─────────────────────────────────────────────────────────────────

import type { ReactNode } from "react";

// ── Projects ────────────────────────────────────────────────────
export interface Project {
  title:    string;
  desc:     string;
  tags:     string[];
  iconName: string;   // key into ICON_MAP in ProjectCard
  color:    string;
  stat:     string;
  live:     string;
  repo?:    string;
}

// ── Skills ──────────────────────────────────────────────────────
export interface SkillBar {
  name:  string;
  level: number;    // 0–100
  color: string;
}

export interface RadarPoint {
  subject: string;
  A:       number;  // 0–100
}

// ── Experience ──────────────────────────────────────────────────
export interface ExperienceItem {
  role:     string;
  company:  string;
  period:   string;
  desc:     string;
  iconName: string;
  color:    string;
}

// ── Education ───────────────────────────────────────────────────
export interface EducationItem {
  degree:   string;
  school:   string;
  period:   string;
  desc:     string;
  subjects: string[];
  color:    string;
  badge:    string;
}

// ── Certifications ──────────────────────────────────────────────
export interface Certification {
  id:            string;
  name:          string;
  issuer:        string;
  year:          string;
  cat:           string;
  color:         string;
  skills:        string[];
  img?:          string | null;
  credentialUrl?: string;
}

// ── Contact form ────────────────────────────────────────────────
export interface ContactFormData {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export type ContactFormStatus = "idle" | "loading" | "success" | "error";

// ── Nav ─────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href:  string;
}

// ── Chat ─────────────────────────────────────────────────────────
export interface ChatMessage {
  role:    "user" | "assistant";
  content: string;
}
