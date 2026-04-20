# 1o Agency Website

> Production-ready multi-page Next.js website for 1o — a freelancing agency building scalable digital products and AI solutions.

**Domain:** [1org.online](https://1org.online)  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## 📁 Project Structure

```
1o-agency/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home (/)
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx          # About (/about)
│   ├── services/page.tsx       # Services (/services)
│   ├── projects/
│   │   ├── page.tsx            # Projects listing (/projects)
│   │   └── [slug]/page.tsx     # Dynamic project detail (/projects/[slug])
│   ├── deepwork-layer/page.tsx # DeepWork Layer (/deepwork-layer)
│   ├── ai-gym-trainer/page.tsx # AI Gym Trainer (/ai-gym-trainer)
│   ├── funding/page.tsx        # Funding (/funding)
│   ├── hire/page.tsx           # Freelancing (/hire)
│   └── contact/page.tsx        # Contact (/contact)
├── components/
│   ├── Navbar.tsx              # Sticky navbar with mobile menu
│   ├── Footer.tsx              # Footer with links
│   └── ui/
│       └── index.tsx           # Reusable UI components
├── lib/
│   └── projectData.ts          # Project details data
├── styles/
│   └── globals.css             # Global styles + custom utilities
├── public/                     # Static assets
├── .env.example                # Environment variable template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18.17+ 
- npm / yarn / pnpm

### Step 1 – Clone / Initialize
```bash
# If cloning from GitHub
git clone https://github.com/YOUR_USERNAME/1o-agency.git
cd 1o-agency

# Or if starting fresh, initialize the folder as a git repo
git init
```

### Step 2 – Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3 – Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### Step 4 – Run Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5 – Build for Production (test locally)
```bash
npm run build
npm run start
```

---

## ☁️ Vercel Deployment

### Option A – Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: your account
# - Link to existing project: N
# - Project name: 1o-agency
# - Root directory: ./
# - Override settings: N

# Deploy to production
vercel --prod
```

### Option B – Deploy via GitHub + Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit – 1o agency website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/1o-agency.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **"Add New Project"**
   - Select your GitHub repo: `1o-agency`
   - Click **"Import"**

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add Environment Variables**
   - In the Vercel project settings → **Environment Variables**
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://1org.online`

5. **Deploy**
   - Click **"Deploy"**
   - Vercel builds and deploys in ~60 seconds
   - You get a `*.vercel.app` URL immediately

6. **Add Custom Domain**
   - Go to project → **Settings → Domains**
   - Add: `1org.online` and `www.1org.online`
   - Update your domain DNS records:
     ```
     A Record:    @    →  76.76.21.21
     CNAME:       www  →  cname.vercel-dns.com
     ```

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Home – hero, services preview, featured projects, tech stack |
| `/about` | About 1o – story, mission, founder |
| `/services` | All services with tech stacks and use cases |
| `/projects` | Projects listing |
| `/projects/applyflow` | ApplyFlow case study |
| `/projects/smart-learn-hub` | SmartLearn Hub case study |
| `/projects/sharp-engineering` | Sharp Engineering case study |
| `/projects/retail-iq` | RetailIQ case study |
| `/projects/deal-detector` | Deal Detector case study |
| `/deepwork-layer` | DeepWork Layer product page |
| `/ai-gym-trainer` | AI Gym Trainer product page |
| `/funding` | Crowdfunding / support page |
| `/hire` | Freelancing / hire page |
| `/contact` | Contact form |

---

## ✨ Features

- **Multi-page routing** with Next.js App Router
- **Fully responsive** – mobile, tablet, desktop
- **SEO optimized** – metadata per page, Open Graph tags
- **Smooth animations** – Framer Motion page + scroll animations
- **Sticky navbar** with scroll detection and mobile menu
- **Grid background** pattern across pages
- **Dynamic project pages** via `[slug]` routing
- **Contact form** with loading and success states
- **TypeScript** throughout
- **Reusable component system** (Badge, Button, Card, Section, etc.)

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router, SSG, SSR) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | DM Serif Display + DM Sans + JetBrains Mono |

---

## 🔧 Customization

**Update contact email:**  
Search for `rohikamble171012@gmail.com` and replace with your email.

**Add a new project:**  
1. Add entry to `lib/projectData.ts`
2. Add entry to `app/projects/page.tsx` projects array
3. New route auto-generated at `/projects/[slug]`

**Add UPI ID:**  
Update the UPI ID placeholder in `app/funding/page.tsx`.

---

## 📄 License

© 2025 1o. All rights reserved.
