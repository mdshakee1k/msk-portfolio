import ContactForm from "@/ui/ContactForm";
import { SITE }    from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "72px var(--section-px)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          08 / get_in_touch
        </div>
        <div className="section-title reveal" style={{ marginBottom: 14 }}>
          Let's Build Something<br /><span style={{ color: "var(--color-accent)" }}>Remarkable</span>
        </div>
        <p className="reveal" style={{ fontSize: 14, lineHeight: 1.85, color: "var(--color-muted)", marginBottom: 32, transitionDelay: "60ms" }}>
          Open to internship offers, freelance projects, collaborations, or just a good tech conversation.
        </p>

        <div className="reveal" style={{ background: "var(--color-bg3)", borderRadius: 14, padding: "26px 22px", border: "1px solid var(--color-border)", marginBottom: 20, textAlign: "left", transitionDelay: "120ms" }}>
          <ContactForm />
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="btn-outline btn-sm">LinkedIn ↗</a>
          <a href={SITE.github}   target="_blank" rel="noreferrer" className="btn-outline btn-sm">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}
