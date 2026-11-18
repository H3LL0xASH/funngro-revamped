# Funngro Revamp

A fast, responsive, modern revamp of **Funngro** — India's youth earning platform connecting **70 Lakh+ young earners (ages 14–25)** with **5,000+ verified brands** for paid campaigns, content creation, referrals, surveys, and UPI payouts.

Built with two complete, connected routes:
- **`/` (Home)** — Hero, borderless partner brand marquee, pinned horizontal *How It Works* glass deck, *SheLancer* spotlight, pinned 5-screen *Inside the App* showcase, 5-card stepped pyramid *Stories* slider, straight chronological *Our Story* timeline (with inline Shark Tank India Season 2 video proof), *For Businesses* CTA, and smooth *FAQ* accordion.
- **`/earn` (Earn Guide)** — Dedicated earning hub with filterable work categories, 5-step timeline, 3-stage earning ladder + interactive monthly income estimator, 7-step growth roadmap, and `/earn` FAQs.

> For the visual system, color tokens, typography, and motion philosophy, see [DESIGN.md](./DESIGN.md).

---

## Tech Stack Used
- **React 19** — Modular UI components with lightweight History API routing (`/` and `/earn`).
- **Vite 8** — Instant dev server and optimized production bundling.
- **Tailwind CSS v4 + Custom Component CSS** — Clean design tokens (`src/styles/tokens.css`, `src/styles/theme.css`) powering Light Cream and Greenish Forest Dark themes.
- **GSAP 3 + ScrollTrigger** — Scoped exclusively to the two pinned scroll showcases (`HowItWorks` & `AppShowcase`) for smooth 60fps performance.
- **Native `IntersectionObserver`** (`src/hooks/useScrollReveal.js`) — Lightweight zero-lag scroll-appear reveals across Home and `/earn`.
- **Oxlint** — Ultra-fast JavaScript/JSX linting (`0 warnings, 0 errors`).

---

## SEO & Discoverability Features (Short Summary)
- **Complete Meta & Canonical Tags**: Indian English locale (`lang="en-IN"`), unique dynamic page `<title>` per route, rich meta description, canonical URL (`https://www.funngro.com/`), and full `robots` indexing directives (`max-image-preview:large`).
- **Open Graph & Twitter Cards**: Full `og:*` and `twitter:card` (`summary_large_image`) metadata with crisp social preview imagery for WhatsApp, LinkedIn, Instagram, and X sharing.
- **Structured Data (JSON-LD `@graph`)**: Embedded Schema.org markup for `Organization`, `WebSite`, and `FAQPage` in `index.html` to qualify for Google rich results and FAQ snippets.
- **AI & Search Crawler Readiness**: Includes `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, and `public/.well-known/ai-catalog.json` for modern search engines and AI assistants.
- **Core Web Vitals & Asset Optimization**: Preloaded self-hosted `.woff2` fonts (`Figtree` & `Bricolage Grotesque`), `fetchpriority="high"` responsive WebP hero `srcset`, compressed card assets, semantic HTML5 landmarks, and a `<noscript>` fallback.

---

## Project Structure

```text
├── index.html                  # SEO meta tags, JSON-LD schema, font preloads & theme boot script
├── DESIGN.md                   # Short visual, layout & motion design guide
├── public/                     # Fonts, responsive hero WebPs, robots.txt, sitemap.xml, llms.txt
└── src/
    ├── App.jsx                 # Route switcher (/ and /earn) + Home layout
    ├── hooks/
    │   └── useScrollReveal.js  # Zero-lag IntersectionObserver fade-up helper
    ├── pages/
    │   └── EarnPage.jsx        # Complete /earn page composition
    ├── data/
    │   ├── siteContent.js      # Home data (brands, stories, milestones, FAQs, links)
    │   └── earnContent.js      # /earn data (categories, steps, ladder, roadmap, FAQs)
    ├── components/
    │   ├── Nav.jsx, Footer.jsx, Logo.jsx, Icons.jsx  # Shared global UI components
    │   ├── home/               # Home page sections (Hero, BrandsStrip, HowItWorks, SheLancers, AppShowcase, Stories, Journey, BusinessCTA, FAQ)
    │   └── earn/               # /earn page sections (EarnHero, EarnCategories, EarnSteps, EarnLadder, EarnProgression, EarnFAQ)
    └── styles/                 # Base tokens, dark forest theme, and per-component CSS
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Lint codebase
npm run lint

# Preview production build
npm run preview
```
