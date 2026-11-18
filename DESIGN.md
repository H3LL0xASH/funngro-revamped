# Funngro Revamp — Design Guide

A quick look at the visuals, layout rules, and motion decisions behind the redesigned Funngro website (`home page` and `/earn`).
first i checked funngro.com for designing it form scratch then i started the project from taking ideas or colors guide from funngro official website.
---

## 1. Color System & Dual Themes

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

A theme toggle in the navbar on both desktop and mobile and persists via `localStorage`.
---

## 2. Typography
- **Headings (`Bricolage Grotesque`)**: Bold, expressive display font with tight tracking (`-0.035em`) 
- **Body & UI (`Figtree`)**: Clean, readable geometric sans-serif tuned for cards, numbers, and mobile legibility.

---

