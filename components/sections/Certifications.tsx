"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import type { CertificationData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        padding: "72px var(--section-px)",
        background: "var(--color-bg2)",
      }}
    >
      <div className="section-inner">
        <div className="section-label">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          07 / certifications
        </div>
        <div className="section-title reveal" style={{ marginBottom: 10 }}>
          Verified{" "}
          <span style={{ color: "var(--color-accent)" }}>Credentials</span>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "var(--color-muted)",
            marginBottom: 28,
          }}
        >
          Every credential earned — a record of what I&apos;ve built, learned,
          and won.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 28,
            marginBottom: 32,
            padding: "18px 24px",
            background: "var(--color-bg3)",
            border: "1px solid var(--color-border)",
            borderRadius: 14,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {[
            ["5", "credentials"],
            ["2", "issuers"],
            ["2024", "most recent"],
          ].map(([num, lbl], k) => (
            <div
              key={lbl}
              style={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color:
                    k === 2 ? "var(--color-accent)" : "var(--color-heading)",
                  letterSpacing: "-.04em",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9.5,
                  color: "var(--color-muted)",
                  letterSpacing: ".04em",
                }}
              >
                {lbl}
              </div>
            </div>
          ))}
          <div
            style={{
              marginLeft: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--color-muted)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--color-accent)",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            All credentials active &amp; verifiable
          </div>
        </div>

        {/* ── VERIFIED CREDENTIALS CARDS (Visible without clicking) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
            marginBottom: 40,
          }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.id}
              className="reveal"
              style={{
                transitionDelay: `${i * 50}ms`,
                background: `linear-gradient(135deg, ${cert.color}12, ${cert.color}06)`,
                border: `1.5px solid ${cert.color}30`,
                borderRadius: 16,
                padding: 14,
                cursor: "default",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Certificate Image */}
              {cert.img ? (
                <a
                  href={cert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    height: 200,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginBottom: 12,
                    border: `1px solid ${cert.color}30`,
                    background: "var(--color-bg3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.85";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: 8,
                    }}
                  />
                </a>
              ) : (
                <div
                  style={{
                    height: 200,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginBottom: 12,
                    border: `1px solid ${cert.color}30`,
                    background: "var(--color-bg3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      color: cert.color,
                      textAlign: "center",
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      style={{ opacity: 0.3 }}
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: "var(--color-muted)",
                      }}
                    >
                      Certificate image
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {/* Verification badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 9,
                    fontFamily: "var(--font-mono)",
                    color: cert.color,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  VERIFIED
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "var(--color-heading)",
                    letterSpacing: "-.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </div>

                {/* Issuer & year */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 10,
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span>{cert.issuer}</span>
                  <span style={{ color: cert.color, fontWeight: 700 }}>{cert.year}</span>
                </div>

                {/* Category */}
                <div
                  style={{
                    display: "inline-block",
                    width: "fit-content",
                    padding: "5px 11px",
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}40`,
                    borderRadius: 6,
                    fontSize: 8.5,
                    fontFamily: "var(--font-mono)",
                    color: cert.color,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.cat}
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 8,
                        padding: "4px 9px",
                        background: `${cert.color}12`,
                        border: `0.5px solid ${cert.color}35`,
                        borderRadius: 4,
                        color: cert.color,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 10,
                    paddingTop: 10,
                    borderTop: `1px solid ${cert.color}20`,
                    fontSize: 9,
                    fontFamily: "var(--font-mono)",
                    color: cert.color,
                    textDecoration: "none",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
