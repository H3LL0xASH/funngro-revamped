# Funngro Revamp — Design Guide

A quick look at the visual language, layout rules, and motion decisions behind the redesigned Funngro website (`/` and `/earn`).

---

## 1. Color System & Dual Themes
Funngro uses an energetic botanical palette rather than cold grays or pitch-black dark mode:

- **Light Mode (Warm Cream)**
  - Page canvas: `#fffdf6` (soft warm cream) with fixed subtle emerald/lime ambient light pools
  - Elevated surfaces: `#ffffff` and soft mist `#eef5e9`
  - Text: Deep forest ink `#122018` + muted sage `#4b584e`
- **Dark Mode (Greenish Forest — Not Pitch Black)**
  - Page canvas: `#0c2317` (deep emerald forest)
  - Elevated surfaces: `#153624` and `#112d1e`
  - Text: Crisp mint-white `#effaf2` + soft sage `#a9cab4`
- **Signature Accents (Both Themes)**
  - Funngro Lime: `#c6f45e` (highlights, active badges, CTAs)
  - Funngro Emerald: `#16a34a` / `#4ade80` (trust accents, progress indicators, timeline spine)

The theme toggle lives permanently in the top navbar on both desktop and mobile (never tucked inside a hamburger menu) and persists via `localStorage` with a flash-free boot script in `index.html`.

---

## 2. Typography
- **Headings (`Bricolage Grotesque`)**: Bold, expressive display font with tight tracking (`-0.035em`) for confident youth-first headlines.
- **Body & UI (`Figtree`)**: Clean, highly readable geometric sans-serif tuned for cards, numbers, and mobile legibility.
- Both fonts are self-hosted in `public/fonts/` and preloaded for zero layout shift.

---

## 3. Connected Layout & Visual Rhythm
- **One Continuous Canvas**: Instead of harsh horizontal color stripes, a single GPU-cached ambient background sits behind the whole site while alternating sections fade softly in and out.
- **Border-Minimal Clarity**: Cards rely on gentle tonal contrast, generous spacing, and crisp iconography rather than heavy boxy borders (e.g., borderless brand marquee, soft glass step cards, clean tonal `/earn` blocks).
- **Sticky Compacting Navbar**: Starts at `76px` and smoothly trims to `64px` once scrolling begins, staying unobtrusive while keeping navigation and the theme switch one tap away.

---

## 4. Signature Interactive Patterns
- **How Funngro Works (Pinned Horizontal Deck)**: Four frosted glass cards layered over translucent custom watermark artwork slide smoothly across the viewport as you scroll, pausing briefly on Step 04 (`Get paid by UPI`) before releasing.
- **Inside the App (Pinned 5-Screen Tour)**: Locks to `100dvh` on both desktop and mobile. Only the phone screen image, bottom-to-up masked text, active step highlight, and bottom progress bar change as you scroll through `01 Home Screen → 05 UPI Payout`.
- **Stories Carousel (5-Card Stepped Pyramid)**: Built with pure React + CSS (no GSAP). Desktop displays 5 cards in a smooth pyramid—center card popped highest, inner flanks stepped slightly down, outer flanks stepped further down—with floating side arrows and ping-pong auto-reverse (`1→2→3→4→5` then reversing smoothly back).
- **Our Story Timeline**: A straight vertical center spine connects milestones in strict chronological order (`FY22 → DEC 2022 Shark Tank video proof → 2023 → Q4 FY25 → FY26`) with balanced left/right cards and zero blank voids.
- **Zero-Lag Accordions**: FAQs on both `/` and `/earn` start closed by default and expand cleanly using isolated CSS Grid (`0fr → 1fr`) transitions.

---

## 5. Motion & Performance Principles
- **GPU-First Animations**: Page scroll-appear reveals use native `IntersectionObserver` (`useScrollReveal`) with `transform` and `opacity` only—no heavy per-card scroll listeners.
- **Scoped GSAP**: GSAP `ScrollTrigger` is reserved exclusively for the two pinned product showcases (`HowItWorks` and `AppShowcase`), tuned with `anticipatePin: 1`, `fastScrollEnd: true`, and lightweight compressed card assets for steady 60fps scrolling.
- **Accessibility**: Full `prefers-reduced-motion` support, semantic landmarks, keyboard-accessible accordions and controls, and zero horizontal overflow from `320px` to `1920px`.
