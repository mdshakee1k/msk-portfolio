# Mohammed Shakeel K — Portfolio Website

A modern, full-stack portfolio website built with **Next.js 15**, **TypeScript**, and the **Anthropic Claude API**. Features an AI-powered chatbot, interactive skills radar, bento-wall certifications, animated career timeline, and curated project showcase.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Claude API](https://img.shields.io/badge/Claude-AI-purple?logo=anthropic)](https://www.anthropic.com/)

---

## 🎯 Features

✨ **Interactive Sections:**
- **Hero** — Animated typewriter intro with CTA
- **About** — Professional overview and background
- **Skills** — Interactive radar chart with proficiency levels
- **Projects** — Featured portfolio showcase with live links
- **Experience** — Career timeline with animations
- **Education** — Academic credentials and achievements
- **Certifications** — Bento-wall grid layout
- **Contact** — Form with Resend email integration
- **Resume** — Modal viewer + download functionality

🤖 **AI Features:**
- Claude-powered chatbot (streaming responses)
- Context-aware conversations about your work

🎨 **Design:**
- Dark/light theme toggle with CSS variables
- Smooth scroll animations and fade-in effects
- Fully responsive (mobile-first)
- ATS-optimized resume

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/mdshakee1k/msk-portfolio.git
cd msk-portfolio
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
```

Fill in these required variables:
```env
# Claude AI API
ANTHROPIC_API_KEY=your-anthropic-key

# Email service
RESEND_API_KEY=your-resend-key
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=noreply@yourdomain.com

# CV storage
NEXT_PUBLIC_CV_FILENAME=md_cv.pdf
```

### 3. Add Your CV
Drop your resume file into `/public/cv/`:
```
/public/cv/
└── md_cv.pdf  (or your chosen filename)
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
msk-portfolio/
│
├── app/                           # Next.js App Router
│   ├── globals.css                # Global styles & CSS variables
│   ├── layout.tsx                 # Root layout + metadata
│   ├── page.tsx                   # Home page (section order here)
│   └── api/
│       ├── chat/route.ts          # POST — Claude AI chatbot
│       ├── contact/route.ts       # POST — Email submissions
│       └── download-cv/route.ts   # GET — CV downloads
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky navigation + scroll highlight
│   │   └── Footer.tsx             # Footer
│   ├── sections/                  # One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Resume.tsx
│   └── ui/
│       ├── ChatBot.tsx            # AI assistant modal
│       ├── ContactForm.tsx        # Email form
│       ├── RadarChart.tsx         # Skills visualization
│       ├── ResumeViewer.tsx       # PDF modal + download
│       ├── SkillBar.tsx           # Proficiency bars
│       ├── ThemeToggle.tsx        # Dark/light switcher
│       ├── TypeWriter.tsx         # Animated text
│       ├── BackToTop.tsx          # Scroll-to-top button
│       └── StatCard.tsx           # Featured stat cards
│
├── data/
│   ├── projects.ts                # Project showcase data
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   └── certifications.ts
│
├── lib/
│   ├── constants.ts               # App configuration
│   ├── knowledge.ts               # Claude context/knowledge
│   └── utils.ts                   # Helper functions
│
├── public/
│   ├── favicon.svg                # Theme-aware icon
│   ├── cv/
│   │   └── md_cv.pdf              # Your resume
│   └── images/
│       ├── og/                    # OpenGraph preview images
│       ├── certs/                 # Certification badges
│       └── projects/              # Project screenshots ⭐
│
└── styles/
    └── tokens.ts                  # Design tokens
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js 15, TypeScript, React 19, Tailwind CSS |
| **Backend** | Next.js API Routes, Node.js |
| **AI/Chatbot** | Anthropic Claude API (streaming) |
| **Email** | Resend (transactional email) |
| **Styling** | CSS Modules, CSS Variables, Tailwind |
| **File Storage** | Next.js Public Dir (static serving) |
| **Analytics** | OpenGraph, Meta tags, SEO optimized |

---

## 📊 Projects Showcase

### 1. EduReach AI Platform
**Multi-agent educational assistant powered by LangChain and Gemini**

![EduReach AI Platform](/images/projects/edureach-ai.png)

- 🔗 **Live**: Coming Soon
- 📦 **Stack**: LangChain, Gemini API, Python, FastAPI
- ⭐ **Features**: RAG pipeline, deep agent architecture, context awareness
- 🏆 **Type**: Multi-agent System

**GitHub**: [mdshakee1k/edureach-ai](https://github.com/mdshakee1k)

---

### 2. Netflix Clone
**Full-featured streaming platform UI with real movie data**

![Netflix Clone](/images/projects/netflix-clone.png)

- 🔗 **Live**: [View Project](https://github.com/mdshakee1k)
- 📦 **Stack**: React, Node.js, Express, TMDB API, JWT
- ⭐ **Features**: Dynamic content rows, search, auth system, responsive UI
- 🏆 **Type**: Full Stack Web App

**GitHub**: [mdshakee1k/netflix-clone](https://github.com/mdshakee1k)

---

### 3. BI Analytics Dashboard
**Interactive data visualization with 15+ Power BI charts**

![BI Analytics Dashboard](/images/projects/bi-dashboard.png)

- 🔗 **Live**: Available upon request
- 📦 **Stack**: Power BI, DAX, SQL, Excel
- ⭐ **Features**: Real-time KPI monitoring, drill-throughs, custom measures
- 🏆 **Type**: Business Intelligence

---

### 4. Tourist Places Hub
**Travel discovery platform with interactive maps**

![Tourist Places Hub](/images/projects/tourist-hub.png)

- 🔗 **Live**: [View Project](https://github.com/mdshakee1k)
- 📦 **Stack**: HTML5, CSS3, JavaScript, Google Maps API
- ⭐ **Features**: Filter system, location search, smooth animations
- 🏆 **Type**: Responsive Web App

**GitHub**: [mdshakee1k/tourist-hub](https://github.com/mdshakee1k)

---

### 5. Smart Todo App
**Task management with persistence and drag-and-drop**

![Smart Todo App](/images/projects/smart-todo.png)

- 🔗 **Live**: Available upon request
- 📦 **Stack**: React, localStorage, CSS Modules
- ⭐ **Features**: CRUD operations, priority tags, filters, local storage sync
- 🏆 **Type**: React Web App

---

### 6. FoodBunch Navigation
**Single-page food ordering application**

![FoodBunch Navigation](/images/projects/foodbunch.png)

- 🔗 **Live**: Available upon request
- 📦 **Stack**: React, React Router, Context API, CSS
- ⭐ **Features**: Multi-page navigation, cart system, animations
- 🏆 **Type**: React SPA

---

## 📸 Adding Project Screenshots

To add actual screenshots of your projects:

1. **Take screenshots** of each project in action
2. **Optimize them** (recommended ~800x600px, <100KB)
3. **Save to** `/public/images/projects/` folder:
   ```
   /public/images/projects/
   ├── edureach-ai.png
   ├── netflix-clone.png
   ├── bi-dashboard.png
   ├── tourist-hub.png
   ├── smart-todo.png
   └── foodbunch.png
   ```
4. **Replace** the `/images/projects/filename.png` placeholders in the Projects section above

**Screenshot Tips:**
- **Dimensions**: 800x600px (or 16:9 ratio)
- **Format**: PNG or JPG
- **File size**: <100KB (compress with TinyPNG)
- **Content**: Show the app in action, not just landing page
- **Quality**: Use full-screen or near full-screen captures
- **Consistency**: Similar framing for all projects

---

## 🔧 Configuration

### Update Your Info
Edit `/data/projects.ts`, `/data/skills.ts`, etc. to match your portfolio.

### Customize Sections
Reorder sections in `/app/page.tsx`:
```typescript
<Hero />
<About />
<Skills />
<Projects />      {/* Move these around as needed */}
<Experience />
<Education />
<Certifications />
<Contact />
```

### Modify Colors
Update CSS variables in `/app/globals.css`:
```css
:root {
  --color-accent: #00ffb3;      /* Cyan */
  --color-secondary: #ff006e;   /* Pink */
  --color-bg1: #0a0e27;         /* Dark bg */
  /* ... more variables */
}
```

---

## 🤖 AI Chatbot Setup

The chatbot is powered by Claude. Your knowledge/context is stored in `/lib/knowledge.ts`.

To customize chatbot responses:

1. Edit `/lib/knowledge.ts` (your background, projects, skills)
2. Update the system prompt in `/app/api/chat/route.ts` if needed
3. Restart dev server

The chatbot has context about:
- Your professional background
- Project details
- Skills and expertise
- Contact information

---

## 📧 Email Setup

Contact form uses **Resend** for transactional emails.

### Get Your Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use test domain
3. Copy API key to `.env.local`

### Test Locally
Use `onboarding@resend.dev` as the sender email to test:
```env
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

---

## 📄 Resume Management

### Where to Put Your CV
Drop file into `/public/cv/` folder and update `.env.local`:

```env
NEXT_PUBLIC_CV_FILENAME=md_cv.pdf
```

### Supported Formats
- PDF (recommended)
- DOCX (Word document)

The resume viewer has two modes:
- **View** — Opens in modal for preview
- **Download** — Direct file download to Downloads folder

---

## 🎨 Customization

### Theme Colors
Update in `/app/globals.css`:
```css
--color-accent: #00ffb3;        /* Primary accent */
--color-secondary: #ff006e;     /* Secondary accent */
--color-heading: #e5e5e5;       /* Text headings */
--color-muted: #a0a0a0;         /* Text muted */
```

### Fonts
Currently using system fonts. To add custom fonts, edit `/app/layout.tsx`.

### Animations
Adjust animation speed in component files or `/styles/tokens.ts`.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: `npm run build` → deploy `out/` folder
- **AWS**: Follow Next.js deployment guide
- **Custom Server**: Use `next start` with Node.js

### Environment Variables
Before deploying, set all required variables in your hosting platform's settings.

---

## 📱 Performance

- **Lighthouse Score**: 95+ (Core Web Vitals optimized)
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **CSS**: Optimized with Tailwind purging
- **Streaming**: Claude responses stream for faster perceived performance

---

## 🔐 Security

- ✅ XSS Protection (HTML escaping in contact form)
- ✅ CSRF Protection (Next.js built-in)
- ✅ Environment variables (never exposed to client)
- ✅ Content Security Policy (CSP headers)
- ✅ CORS configured properly
- ✅ Input validation on all forms

---

## 📈 SEO & Meta

All pages include:
- ✅ Meta tags (title, description, keywords)
- ✅ OpenGraph images (for social sharing)
- ✅ Twitter Card tags
- ✅ Mobile viewport optimized
- ✅ Structured data (JSON-LD)
- ✅ Sitemap ready

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Resume Not Showing
1. Check file exists: `/public/cv/md_cv.pdf`
2. Verify filename in `.env.local` matches exactly
3. Restart dev server: `npm run dev`

### Chatbot Not Responding
1. Check `ANTHROPIC_API_KEY` in `.env.local`
2. Verify API key is valid and has credits
3. Check browser console for errors (F12)

### Image Not Loading
1. Ensure image is in `/public/` folder
2. Check image path is lowercase and matches exactly
3. Restart dev server

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Claude API](https://docs.anthropic.com/)
- [Resend Email](https://resend.com/docs)

---

## 📄 License

This portfolio is **open source** and available under the MIT License. Feel free to fork, clone, and customize for your own use!

---

## 👋 Let's Connect

- **Email**: [mohammedshakeel.kk@gmail.com](mailto:mohammedshakeel.kk@gmail.com)
- **GitHub**: [@mdshakee1k](https://github.com/mdshakee1k)
- **LinkedIn**: [@mohammedshakeelk](https://linkedin.com/in/mohammedshakeelk)
- **Portfolio**: [shakeel.me](https://shakeel1.me)

---

**Last updated**: March 27, 2026 | Built with ❤️ using Next.js & Claude AI
