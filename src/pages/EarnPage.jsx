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
