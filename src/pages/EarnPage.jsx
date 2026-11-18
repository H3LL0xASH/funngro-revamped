/**
 * EarnPage — Complete `/earn` page
 *
 * Brings together all 6 Earn sections in one smooth flow:
 * 1. Hero & live FY26 snapshot
 * 2. Filterable work categories
 * 3. 5-step start-to-payout journey
 * 4. 3-stage earning ladder + interactive monthly income calculator
 * 5. 7-step growth roadmap
 * 6. Fast, smooth FAQ accordion + download banner
 *
 * Uses native IntersectionObserver (via useScrollReveal) instead of heavy
 * per-element GSAP scroll listeners so scrolling and FAQ expansion stay silky.
 */
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import EarnHero from "../components/earn/EarnHero.jsx";
import EarnCategories from "../components/earn/EarnCategories.jsx";
import EarnSteps from "../components/earn/EarnSteps.jsx";
import EarnLadder from "../components/earn/EarnLadder.jsx";
import EarnProgression from "../components/earn/EarnProgression.jsx";
import EarnFAQ from "../components/earn/EarnFAQ.jsx";
import "../styles/EarnPage.css";

export default function EarnPage({ onNavigate }) {
  const pageRef = useRef(null);

  // Fade in each section smoothly as the user scrolls down `/earn`
  useScrollReveal(pageRef, ".earn-reveal", "earn-page");

  return (
    <div className="earn-page" ref={pageRef}>
      <EarnHero onNavigate={onNavigate} />
      <EarnCategories />
      <EarnSteps />
      <EarnLadder />
      <EarnProgression />
      <EarnFAQ onNavigate={onNavigate} />
    </div>
  );
}
