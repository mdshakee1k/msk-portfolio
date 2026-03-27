import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: "20px var(--section-px)",
      borderTop: "1px solid var(--color-border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 8,
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)" }}>
        © {year} {SITE.name} — Built with Next.js + ♥
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)" }}>
        {SITE.handle}
      </span>
    </footer>
  );
}
