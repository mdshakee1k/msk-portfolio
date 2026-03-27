# Mohammed Shakeel K — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and the **Anthropic Claude API**. Features an AI-powered chatbot, interactive skills radar, bento-wall certifications, and animated career timeline.

---

## Quick start

```bash
# 1. Clone and install
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your keys (see .env.example for details)

# 3. Add your CV
# → Drop Mohammed_Shakeel_K_Resume.docx into /public/cv/

# 4. Run dev server
npm run dev
# Open http://localhost:3000
```

---

## Project structure

```
msk-portfolio/
│
├── app/                        # Next.js App Router
│   ├── globals.css             # ← All global styles & CSS variables
│   ├── layout.tsx              # Root layout + <meta> / OpenGraph tags
│   ├── page.tsx                # Home page — reorder sections here
│   └── api/
│       ├── chat/route.ts       # POST — AI chatbot (Claude streaming)
│       ├── contact/route.ts    # POST — Contact form email (Resend)
│       └── download-cv/route.ts# GET  — Serve CV file for download
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav + active section highlight
│   │   └── Footer.tsx
│   ├── sections/               # ← One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Resume.tsx
│   │   ├── Certifications.tsx  # Bento-wall layout
│   │   └── Contact.tsx
│   └── ui/                     # Reusable UI primitives
│       ├── TypeWriter.tsx
│       ├── SkillBar.tsx
│       ├── StatCard.tsx
│       ├── ContactForm.tsx
│       └── ChatBot.tsx         # Floating AI assistant
│
├── data/                       # ← Edit content here, not in components
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   └── education.ts
│
├── lib/
│   ├── constants.ts            # SITE, NAV_LINKS, TYPEWRITER_TEXTS…
│   ├── utils.ts                # navTo(), cn(), slugify(), stagger()
│   └── knowledge.ts            # AI chatbot knowledge base (RAG)
│
├── styles/
│   └── tokens.ts               # ← Design tokens: colors, fonts, radii
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces
│
├── public/
│   ├── cv/                     # ← Drop your resume .docx here
│   │   └── Mohammed_Shakeel_K_Resume.docx
│   └── images/
│       ├── certs/              # ← Drop cert screenshots here (gai.jpg…)
│       └── og/                 # ← Drop og-image.png (1200×630) here
│
├── .env.example                # Safe to commit — variable names only
├── .env.local                  # Git-ignored — your real secrets
├── .gitignore
├── next.config.ts
├── tsconfig.json               # Path aliases: @/data/*, @/lib/*…
└── package.json
```

---

## How to update content

### Add a project
Open `data/projects.ts` and append a new object to `PROJECTS`.  
Icon names: `Brain` | `Globe` | `BarChart3` | `Layers` | `Zap`

### Add / edit a certification
Open `data/certifications.ts`. Set `img: "/images/certs/<id>.jpg"` once you
drop the screenshot into `public/images/certs/`.

### Edit experience or education
`data/experience.ts` and `data/education.ts` — same pattern.

### Change colours / fonts
Edit `styles/tokens.ts`. Every color in the whole site flows from there.

### Update the AI chatbot knowledge
Edit the `PORTFOLIO_KNOWLEDGE` string in `lib/knowledge.ts`.

### Re-order sections
Open `app/page.tsx` and move the `<SectionName />` JSX elements.

### Upload a new CV
1. Drop the new file into `public/cv/`
2. Update `NEXT_PUBLIC_CV_FILENAME` in `.env.local`
3. Re-deploy

---

## Environment variables

| Variable                    | Required | Description                                |
|-----------------------------|----------|--------------------------------------------|
| `ANTHROPIC_API_KEY`         | ✅ Yes   | Powers the AI chatbot                      |
| `RESEND_API_KEY`            | ✅ Yes   | Sends contact form emails                  |
| `CONTACT_TO_EMAIL`          | ✅ Yes   | Where contact form emails arrive           |
| `CONTACT_FROM_EMAIL`        | ✅ Yes   | Sender address (Resend verified domain)    |
| `NEXT_PUBLIC_CV_FILENAME`   | ✅ Yes   | Filename inside `/public/cv/`              |
| `NEXT_PUBLIC_SITE_URL`      | ✅ Yes   | Full URL — used for OG tags                |
| `GITHUB_TOKEN`              | Optional | Live GitHub repo stats                     |
| `NEXT_PUBLIC_ANALYTICS_ID`  | Optional | Analytics script ID                        |

See `.env.example` for the full list with comments.

---

## Scripts

```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check (no emit)
```

---

## Deploy

### Vercel (recommended — zero config)
```bash
npx vercel
```
Add all `.env.local` variables in the Vercel dashboard → Settings → Environment Variables.

### Docker / VPS
```bash
npm run build
npm run start        # PORT=3000 by default
```

---

## Customisation cheatsheet

| Want to…                         | File to edit                          |
|----------------------------------|---------------------------------------|
| Change accent colour             | `styles/tokens.ts` → `COLORS.accent` |
| Add a nav link                   | `lib/constants.ts` → `NAV_LINKS`     |
| Edit hero typewriter roles       | `lib/constants.ts` → `TYPEWRITER_TEXTS` |
| Change what the chatbot knows    | `lib/knowledge.ts`                    |
| Add an image to a cert card      | `data/certifications.ts` + `/public/images/certs/` |
| Change OG / meta tags            | `app/layout.tsx`                      |
| Swap font                        | `styles/tokens.ts` + `app/globals.css` |
