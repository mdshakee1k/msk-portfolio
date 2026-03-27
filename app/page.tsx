// ─────────────────────────────────────────────────────────────────
//  Home page
//  To reorder sections: just move the JSX elements below.
//  To add a new section: create the component, import it, drop it in.
// ─────────────────────────────────────────────────────────────────

import Navbar        from "@/layout/Navbar";
import Footer        from "@/layout/Footer";
import Hero          from "@/sections/Hero";
import About         from "@/sections/About";
import Skills        from "@/sections/Skills";
import Projects      from "@/sections/Projects";
import Education     from "@/sections/Education";
import Experience    from "@/sections/Experience";
import Resume        from "@/sections/Resume";
import Certifications from "@/sections/Certifications";
import Contact       from "@/sections/Contact";
import ChatBot       from "@/ui/ChatBot";

export default function Home() {
  return (
    <main>
      {/* Ambient overlays */}
      <div className="scanline"       aria-hidden="true" />
      <div className="noise-overlay"  aria-hidden="true" />
      <div id="scroll-progress"       aria-hidden="true" />

      <Navbar />

      {/* ── Page sections — reorder freely ── */}
      <Hero          />
      <div className="section-divider" />
      <About         />
      <Skills        />
      <Projects      />
      <Education     />
      <Experience    />
      <Resume        />
      <Certifications />
      <Contact       />

      <Footer />

      {/* Floating AI chatbot */}
      <ChatBot />
    </main>
  );
}
