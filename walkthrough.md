# JessePatoka.com — Walkthrough

## What Was Built

A dark-mode personal brand site for Jesse Patoka using **Astro 4.16** + **Tailwind CSS v4** + **React** islands.

**Project location**: `C:\Users\jp_bl\.gemini\antigravity\scratch\jessepatoka.com`

---

## Architecture

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro 4.16 (islands) | Zero-JS by default; React only hydrates interactive components |
| Styling | Tailwind v4 (CSS-first) | No JS config file; `@theme` block in `global.css` |
| Interactivity | React islands via `@astrojs/react` | Framer Motion animations + Lucide icons |
| Accent | Electric Blue `#3B82F6` | Custom `--color-electric` CSS token |
| Font | Inter (Google Fonts) | Clean, professional sans-serif |

---

## Sections

### Hero
![Hero section with Engineering at Scale headline](file:///C:/Users/jp_bl/.gemini/antigravity/brain/edd07412-39b1-4201-ad74-6c858b1ca918/hero_section_top_1773753780894.png)

- "Available for opportunities" pill badge with pulse animation
- **"Engineering at Scale."** — gradient Electric Blue headline
- Sub-headline emphasizing 17+ years and retail & e-commerce
- "Let's Connect" (primary) + "View Activity" (secondary) CTAs
- Stats bar: 17+ Years, 50+ Engineers Led, ∞ Coffee

### Navigation

Sticky glass-blur bar with `JP.` logo and Lucide-icon links → LinkedIn, GitHub, Resume PDF.

### Active Life Dashboard + Lab

![Dashboard and Lab sections](file:///C:/Users/jp_bl/.gemini/antigravity/brain/edd07412-39b1-4201-ad74-6c858b1ca918/lab_and_footer_section_1773753794729.png)

- **Activity Card**: Last Ride stats (Distance, Elevation, Suffer Score, Moving Time)
- **Map Placeholder**: SVG route line decoration, ready for Leaflet.js
- **Lab Card**: Web Game "Coming Soon" with Canvas/TypeScript/WebGL tags
- **Footer**: © 2026 + "Built with Astro & Tailwind CSS"

---

## GitHub Action

[sync-strava.yml](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/.github/workflows/sync-strava.yml) scaffolded with:
- Daily cron (6 AM UTC) + manual dispatch
- Placeholder steps: fetch Strava → commit JSON → trigger rebuild
- Secrets documented: `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`

---

## Verification

| Check | Result |
|---|---|
| `npm run build` | ✅ Exit 0, 1 page built in 4.35s |
| Visual review (browser) | ✅ All sections render correctly |
| Console errors | ✅ None |
| Framer Motion animations | ✅ Fade-up on load + scroll-triggered |

---

## Key Files

| File | Purpose |
|---|---|
| [astro.config.mjs](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/astro.config.mjs) | Astro + React + Tailwind v4 config |
| [global.css](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/styles/global.css) | Design tokens & base styles |
| [BaseLayout.astro](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/layouts/BaseLayout.astro) | HTML shell, meta, fonts |
| [index.astro](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/pages/index.astro) | Main page composing all sections |
| [Hero.tsx](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/components/Hero.tsx) | Hero with Framer Motion |
| [StravaDashboard.tsx](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/components/StravaDashboard.tsx) | Activity card + map placeholder |
| [Lab.tsx](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/src/components/Lab.tsx) | Projects section |
| [sync-strava.yml](file:///C:/Users/jp_bl/.gemini/antigravity/scratch/jessepatoka.com/.github/workflows/sync-strava.yml) | GitHub Action scaffold |

## Next Steps

1. **Deploy** — Push to GitHub, connect to Cloudflare Pages or Vercel
2. **Strava integration** — Implement the fetch script in `scripts/fetch-strava.js`
3. **Leaflet.js map** — Replace the placeholder with a `client:only="react"` Leaflet island
4. **Resume PDF** — Replace `public/resume.pdf` with your actual resume
5. **Web game** — Build out the Lab project
