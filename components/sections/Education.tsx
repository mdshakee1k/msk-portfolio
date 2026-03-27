import { EDUCATION } from "@/data/education";

const ICONS = [
  <svg
    key="ug"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>,
  <svg
    key="12"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>,
  <svg
    key="10"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
  </svg>,
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "72px var(--section-px)" }}>
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
          04 / education
        </div>
        <div className="section-title reveal" style={{ marginBottom: 44 }}>
          Academic{" "}
          <span style={{ color: "var(--color-accent)" }}>Background</span>
        </div>

        {EDUCATION.map((edu, i) => {
          const c = edu.color;
          const isLast = i === EDUCATION.length - 1;
          return (
            <div
              key={edu.degree}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0 28px",
                marginBottom: isLast ? 0 : 32,
                alignItems: "start",
              }}
            >
              {/* Pin + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 6,
                }}
              >
                <div
                  className="reveal"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `linear-gradient(135deg,${c}30,${c}0A)`,
                    border: `1.5px solid ${c}65`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: c,
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {ICONS[i]}
                </div>
                {!isLast && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      background: `linear-gradient(to bottom,${c}65,${c}10)`,
                      minHeight: 60,
                      marginTop: 6,
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="reveal reveal-right"
                style={{
                  background: "var(--color-bg3)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  border: `1px solid var(--color-border)`,
                  borderLeft: `3px solid ${c}`,
                  marginBottom: 4,
                  transitionDelay: `${i * 80 + 40}ms`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "var(--color-heading)",
                        letterSpacing: "-.02em",
                        marginBottom: 3,
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: c,
                      }}
                    >
                      {edu.school}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--color-muted)",
                        background: "var(--color-bg2)",
                        padding: "3px 10px",
                        borderRadius: 4,
                        marginBottom: 5,
                      }}
                    >
                      {edu.period}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: c,
                        fontWeight: 600,
                      }}
                    >
                      {edu.badge}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    color: "var(--color-muted)",
                    marginBottom: edu.subjects.length ? 16 : 0,
                  }}
                >
                  {edu.desc}
                </p>
                {edu.subjects.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9.5,
                        color: "var(--color-muted)",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: 9,
                        opacity: 0.7,
                      }}
                    >
                      Key Subjects
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {edu.subjects.map((s) => (
                        <span
                          key={s}
                          style={{
                            padding: "3px 10px",
                            background: `${c}12`,
                            border: `1px solid ${c}28`,
                            borderRadius: 4,
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: c,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
