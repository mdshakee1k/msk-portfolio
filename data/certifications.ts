// ─────────────────────────────────────────────────────────────────
//  Certifications data
//
//  To add a certificate image:
//  1. Drop the image in /public/images/certs/<id>.jpg  (or .png/.webp)
//  2. Set  img: "/images/certs/<id>.jpg"  in the matching entry below
// ─────────────────────────────────────────────────────────────────

export interface CertificationData {
  id:            string;
  name:          string;
  issuer:        string;
  year:          string;
  cat:           string;
  color:         string;
  skills:        string[];
  img:           string | null;  // path inside /public, e.g. "/images/certs/gai.jpg"
  credentialUrl?: string;        // link to verify the credential online
}

export const CERTIFICATIONS: CertificationData[] = [
  {
    id:            "QHJLJNWHOW",
    name:          "Developers Foundations",
    issuer:        "NxtWave",
    year:          "2026",
    cat:           "Computer Fundamentals",
    color:         "#295ca9",
    skills:        ["GIT", "GITHUB", "CLI", "LINUX"],
    img:           "/images/certs/QHJLJNWHOW.png",         // → set to "/images/certs/gai.jpg" once uploaded
    credentialUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QHJLJNWHOW.png",
  },
  {
    id:            "SBXGKWNSSJ",
    name:          "Introduction to databases",
    issuer:        "NxtWave",
    year:          "2025",
    cat:           "Frontend",
    color:         "#00FFB3",
    skills:        ["SQL", "SQLITE", "POSTGRESQL"],
    img:           "/images/certs/SBXGKWNSSJ.png",
    credentialUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/SBXGKWNSSJ.png",
  },
  {
    id:            "CQUIIWAMTL",
    name:          "Build Your Own Responsive Website",
    issuer:        "NxtWave Academy",
    year:          "APRIL-2025",
    cat:           "Frontend",
    color:         "#7C3AED",
    skills:        ["BOOT-STRAP", "FLEX-BOX"],
    img:           "/images/certs/CQUIIWAMTL.png",
    credentialUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/CQUIIWAMTL.png",
  },
  {
    id:            "YOVSRWRCVR",
    name:          "Build Your Own Static Website",
    issuer:        "NxtWave",
    year:          "JAN-2025",
    cat:           "Development",
    color:         "#FF6B35",
    skills:        ["HTML5", "CSS", "BOOTSTRAP"],
    img:           "/images/certs/YOVSRWRCVR.png",
    credentialUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/YOVSRWRCVR.png",
  },
  {
    id:            "ba",
    name:          "BuildAThon Industry Projects ×2",
    issuer:        "NxtWave",
    year:          "2023 – 2024",
    cat:           "Projects",
    color:         "#10B981",
    skills:        ["Full Stack", "Agile", "Deployment"],
    img:           null,
    credentialUrl: "",
  },
];
