import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: {
    default:  "Mohammed Shakeel K — BI Analyst & Full Stack Developer",
    template: "%s | Mohammed Shakeel K",
  },
  description:
    "Final-year B.Tech Data Science student and NxtWave CCBP Fellow. BI Analyst, Full Stack Developer, and AI/ML builder based in Bengaluru.",
  keywords: [
    "Mohammed Shakeel K", "BI Analyst", "Full Stack Developer",
    "Data Science", "React", "Next.js", "Power BI", "Portfolio",
  ],
  authors:  [{ name: "Mohammed Shakeel K" }],
  creator:  "Mohammed Shakeel K",
  openGraph: {
    type:      "website",
    locale:    "en_IN",
    url:       process.env.NEXT_PUBLIC_SITE_URL,
    siteName:  "Mohammed Shakeel K",
    title:     "Mohammed Shakeel K — BI Analyst & Full Stack Developer",
    description:
      "Building at the intersection of data intelligence, full-stack engineering, and AI systems.",
    images: [{ url: "/images/og/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Mohammed Shakeel K — BI Analyst & Full Stack Developer",
    description: "Building at the intersection of data intelligence, full-stack engineering, and AI.",
    images:      ["/images/og/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var t=localStorage.getItem('msk-theme');
            var p=window.matchMedia('(prefers-color-scheme:light)').matches;
            if(t==='light'||(t==null&&p)){
              document.documentElement.setAttribute('data-theme','light');
            }
          })();
        `}} />
      </head>
      <body>
        <ScrollReveal />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
