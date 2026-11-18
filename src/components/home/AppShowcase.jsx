/**
 * AppShowcase Component — "Inside the app · Five screens. One uninterrupted journey."
 *
 * Implements a pinned, scroll-driven 5-screen product tour on BOTH desktop and mobile:
 * - The entire stage stays rock-solid in place until all 5 steps finish scrolling.
 * - ONLY the dynamic description text (sliding smoothly bottom-to-up inside a fixed
 *   masked slot), the inner phone screen image, the active step highlight card
 *   (01 Home Screen → 02 Growth → 03 Daily Tasks → 04 Clan Ladder → 05 UPI Payout),
 *   and the segmented progress bar update on scroll.
 * - Clicking step cards, mobile prev/next arrows, pagination dots, or swiping the
 *   phone jumps smoothly to that exact chapter inside the pinned scroll timeline.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeScreen from "../../assets/funngro/screen-home-DvfQ0qPp.webp";
import journeyScreen from "../../assets/funngro/screen-journey-BJkQ-t9o.webp";
import rewardScreen from "../../assets/funngro/screen-reward-xa-KPYrd.webp";
import tierScreen from "../../assets/funngro/screen-tier-DYEG0bT7.webp";
import walletScreen from "../../assets/funngro/screen-wallet-CJr6gtJh.webp";
import { appleStoreUrl, appStoreUrl } from "../../data/siteContent";
import {
  Apple,
  Bolt,
  ChevronLeft,
  ChevronRight,
  GooglePlay,
  ShieldCheck,
  Star,
  Users,
  Wallet,
} from "../Icons";
import "../../styles/AppShowcase.css";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------------------------------
   Custom Step & Feature SVG Icons matching mockup aesthetics
   -------------------------------------------------------------------------- */
function HomeStepIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6" />
    </svg>
  );
}

function GrowthStepIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M12 20v-9" />
      <path d="M17 20V8" />
      <path d="m6 11 5-4 3 2 5-5" />
      <path d="M15.5 4H19v3.5" />
    </svg>
  );
}

function DailyTasksStepIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M4 10h16" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function CoinsIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="9.5" cy="7" rx="5.5" ry="2.5" />
      <path d="M4 7v5c0 1.4 2.5 2.5 5.5 2.5S15 13.4 15 12V7" />
      <path d="M4 12v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5" />
      <path d="M15 10.5c2.8.2 5 1.2 5 2.5v4c0 1.3-2.2 2.3-5 2.5" />
    </svg>
  );
}

function JourneyBrush() {
  return (
    <svg
      className="app-showcase__brush"
      viewBox="0 0 180 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5C52 3 122 2.5 176 8.5"
        stroke="#c6f45e"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Five App Chapters (Ordered 01 -> 05)
   -------------------------------------------------------------------------- */
const showcaseChapters = [
  {
    step: "01",
    label: "Home Screen",
    shortDesc: "Today's brand drops, sorted for you.",
    headline: "Today's brand drops, sorted for you.",
    body: "Toluna surveys, ICICI promotions, Shadow Ninja testing. Every morning, Funngro matches verified paid campaigns directly to your profile and skill level.",
    Icon: HomeStepIcon,
    src: homeScreen,
    alt: "Funngro app home screen showing today's paid brand tasks",
    width: 600,
    height: 1075,
  },
  {
    step: "02",
    label: "Growth",
    shortDesc: "Build your earnings & skills.",
    headline: "Unlock higher-paying tiers as you grow.",
    body: "Starter ₹100. Growth ₹1,000+. Pro ₹10,000+. Complete briefs on time to earn XP, build verified portfolio proof, and unlock bigger enterprise campaigns.",
    Icon: GrowthStepIcon,
    src: journeyScreen,
    alt: "Funngro app growth screen showing Starter, Growth and Pro tiers",
    width: 1024,
    height: 1536,
    fit: "contain",
  },
  {
    step: "03",
    label: "Daily Tasks",
    shortDesc: "Do simple tasks and earn.",
    headline: "Five tasks. One bonus. Repeat daily.",
    body: "Surveys, content creation, sampling, and app testing — pick quick 15-minute tasks between classes and hit daily streaks for instant cash bonuses.",
    Icon: DailyTasksStepIcon,
    src: rewardScreen,
    alt: "Funngro app daily bonus screen with quick brand tasks",
    width: 600,
    height: 1075,
  },
  {
    step: "04",
    label: "Clan Ladder",
    shortDesc: "Compete, collaborate & climb.",
    headline: "Bronze. Silver. Gold. Climb the Clan ladder.",
    body: "Team up with student peers, lead creator clans, and unlock up to 2× reward multipliers. Top leaderboard earners get direct brand referrals.",
    Icon: Users,
    src: tierScreen,
    alt: "Funngro app clan tier ladder from Bronze to Platinum",
    width: 1024,
    height: 1536,
    fit: "contain",
  },
  {
    step: "05",
    label: "UPI Payout",
    shortDesc: "Withdraw earnings instantly.",
    headline: "Convert GroMoney. Withdraw to UPI.",
    body: "Every approved submission adds GroMoney straight to your wallet. Withdraw to Google Pay, PhonePe, Paytm, or your bank account within 24 hours.",
    Icon: Wallet,
    src: walletScreen,
    alt: "Funngro app wallet with earnings ready for instant UPI payout",
    width: 739,
    height: 1600,
  },
];

const featureHighlights = [
  { label: "15-min tasks", Icon: Bolt },
  { label: "Verified brands", Icon: ShieldCheck },
  { label: "Real rewards", Icon: CoinsIcon },
];

export default function AppShowcase() {
  const sectionRef = useRef(null);
  const pinStageRef = useRef(null);
  const triggerRef = useRef(null);
  const activeStepRef = useRef(0);
  const touchStartX = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  // Pin stage on BOTH desktop and mobile so the entire section stays fixed
  // until all 5 screens finish scrubbing smoothly in order.
  useEffect(() => {
    const section = sectionRef.current;
    const pinStage = pinStageRef.current;
    if (!section || !pinStage) return undefined;

    const totalSteps = showcaseChapters.length;
    const mm = gsap.matchMedia();

    // Lock this section in place while the user scrolls through all 5 app screens.
    // We only update React when the active screen index actually changes (5 times total)
    // so scrolling stays lightweight and instant.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        id: "app-showcase-pin",
        trigger: section,
        start: "top top",
        end: () =>
          `+=${window.innerHeight * (window.innerWidth < 960 ? 2.4 : 2.9)}`,
        pin: pinStage,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextStep = Math.min(
            totalSteps - 1,
            Math.max(0, Math.floor(self.progress * totalSteps)),
          );
          if (nextStep !== activeStepRef.current) {
            activeStepRef.current = nextStep;
            setActiveStep(nextStep);
          }
        },
      });

      triggerRef.current = st;

      return () => {
        triggerRef.current = null;
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  // Jump smoothly to a chosen step (keeps pinned scroll position synchronized)
  const jumpToStep = useCallback((targetIndex) => {
    const clamped = Math.min(
      showcaseChapters.length - 1,
      Math.max(0, targetIndex),
    );
    activeStepRef.current = clamped;
    setActiveStep(clamped);

    const trigger = triggerRef.current;
    if (!trigger) return;

    const targetProgress = (clamped + 0.5) / showcaseChapters.length;
    const targetScroll =
      trigger.start + targetProgress * (trigger.end - trigger.start);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  // Touch horizontal swipe support on the phone mockup
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 42) {
      if (diff > 0 && activeStep < showcaseChapters.length - 1) {
        jumpToStep(activeStep + 1);
      } else if (diff < 0 && activeStep > 0) {
        jumpToStep(activeStep - 1);
      }
    }
    touchStartX.current = null;
  };

  const currentChapter = showcaseChapters[activeStep] || showcaseChapters[0];

  return (
    <section
      className="app-showcase"
      id="app"
      ref={sectionRef}
      aria-labelledby="app-showcase-title"
    >
      {/* Organic corner luminous waves */}
      <div className="app-showcase__corner-top" aria-hidden="true" />
      <div className="app-showcase__corner-bottom" aria-hidden="true" />

      <div className="app-showcase__pin" ref={pinStageRef}>
        <div className="container-page app-showcase__container">
          {/* Main 3-Column Stage (Desktop) / Stacked Locked Stage (Mobile) */}
          <div className="app-showcase__stage">
            {/* COLUMN 1: Left Static Copy Shell + Bottom-to-Up Dynamic Text */}
            <div className="app-showcase__left">
              <div className="app-showcase__pill">
                <span className="app-showcase__pill-dot" aria-hidden="true" />
                <span>Inside the app</span>
              </div>

              <h2 className="app-showcase__title" id="app-showcase-title">
                Five screens.
                <br />
                <span className="accent">One uninterrupted</span>
                <br />
                <span className="accent app-showcase__journey-word">
                  journey.
                  <JourneyBrush />
                </span>
              </h2>

              {/* Fixed-height masked text viewport: ONLY text glides smoothly bottom-to-up */}
              <div className="app-text-stage" aria-live="polite">
                {showcaseChapters.map((chapter, index) => {
                  const stateClass =
                    index === activeStep
                      ? "is-active"
                      : index < activeStep
                        ? "is-past"
                        : "is-upcoming";
                  return (
                    <article
                      key={chapter.step}
                      className={`app-text-slide ${stateClass}`}
                      aria-hidden={index !== activeStep}
                    >
                      <h3 className="app-text-slide__title">{chapter.headline}</h3>
                      <p className="app-text-slide__body">{chapter.body}</p>
                    </article>
                  );
                })}
              </div>

              {/* 3 Feature Highlight Pills */}
              <div className="app-feature-row" aria-label="App highlights">
                {featureHighlights.map(({ label, Icon }) => (
                  <div className="app-feature-chip" key={label}>
                    <span className="app-feature-chip__icon" aria-hidden="true">
                      <Icon className="size-3.5" />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Store Download Buttons & Social Proof */}
              <div className="app-showcase__foot">
                <div className="app-showcase__stores">
                  <a
                    className="app-store-btn"
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Funngro on Google Play"
                  >
                    <GooglePlay className="size-4 shrink-0" />
                    <span className="app-store-btn__text">
                      <small>GET IT ON</small>
                      <b>Google Play</b>
                    </span>
                  </a>

                  <a
                    className="app-store-btn"
                    href={appleStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Funngro on the App Store"
                  >
                    <Apple className="size-4 shrink-0" />
                    <span className="app-store-btn__text">
                      <small>DOWNLOAD ON</small>
                      <b>App Store</b>
                    </span>
                  </a>
                </div>

                <p className="app-showcase__rating">
                  <Star className="size-3.5 text-accent shrink-0" />
                  <span>
                    <b>4.2</b> Play Store · 70 Lakh+ youth · ₹0 joining fee
                  </span>
                </p>
              </div>
            </div>

            {/* COLUMN 2: Center Static Phone Mockup + Glowing Pedestal */}
            <div
              className="app-showcase__center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="app-showcase__glow" aria-hidden="true" />

              <div
                className="showcase-phone"
                role="region"
                aria-label={`Phone screen ${currentChapter.step}: ${currentChapter.label}`}
              >
                {/* Dynamic Island Notch */}
                <div className="showcase-phone__island" aria-hidden="true">
                  <span className="showcase-phone__lens" />
                </div>

                {/* Inner Screen Stack: ONLY the screen image transitions smoothly */}
                <div className="showcase-phone__screen">
                  {showcaseChapters.map((chapter, index) => {
                    const stateClass =
                      index === activeStep
                        ? "is-active"
                        : index < activeStep
                          ? "is-past"
                          : "is-upcoming";
                    return (
                      <div
                        key={chapter.step}
                        className={`app-screen ${stateClass}`}
                        aria-hidden={index !== activeStep}
                      >
                        <img
                          src={chapter.src}
                          alt={chapter.alt}
                          width={chapter.width}
                          height={chapter.height}
                          loading="lazy"
                          decoding="async"
                          className={`showcase-phone__img${
                            chapter.fit === "contain"
                              ? " showcase-phone__img--contain"
                              : ""
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="showcase-phone__shine" aria-hidden="true" />
              </div>

              {/* Glowing Emerald 3D Pedestal (Desktop) */}
              <div className="app-pedestal" aria-hidden="true">
                <div className="app-pedestal__top" />
                <div className="app-pedestal__base" />
              </div>
            </div>

            {/* COLUMN 3: Right Vertical 5-Step Highlight Rail (Desktop) */}
            <nav
              className="app-steps-rail"
              aria-label="App journey steps"
            >
              <div className="app-steps-rail__line" aria-hidden="true" />

              {showcaseChapters.map((chapter, index) => {
                const isActive = index === activeStep;
                const StepIcon = chapter.Icon;
                return (
                  <button
                    key={chapter.step}
                    type="button"
                    className={`app-step-card${isActive ? " is-active" : ""}`}
                    onClick={() => jumpToStep(index)}
                    aria-pressed={isActive}
                  >
                    <span className="app-step-card__node" aria-hidden="true" />
                    <span className="app-step-card__num">{chapter.step}</span>
                    <span className="app-step-card__icon" aria-hidden="true">
                      <StepIcon className="size-5" />
                    </span>
                    <span className="app-step-card__meta">
                      <strong className="app-step-card__title">
                        {chapter.label}
                      </strong>
                      <small className="app-step-card__desc">
                        {chapter.shortDesc}
                      </small>
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* MOBILE BOTTOM CONTROLS: Segmented Progress + Active Highlight Card + Arrows & Dots */}
            <div className="app-mobile-dock">
              {/* Mobile Segmented Progress Bar */}
              <div className="app-mobile-progress">
                <div className="app-progress-pill__segments" aria-hidden="true">
                  {showcaseChapters.map((chapter, index) => (
                    <span
                      key={chapter.step}
                      className={`app-progress-seg${
                        index === activeStep
                          ? " is-active"
                          : index < activeStep
                            ? " is-done"
                            : ""
                      }`}
                    />
                  ))}
                </div>
                <span className="app-progress-pill__label">
                  Screen {currentChapter.step} of 05
                </span>
              </div>

              {/* Active Highlight Card with Prev/Next Arrows */}
              <div className="app-mobile-switcher">
                <button
                  type="button"
                  className="app-mobile-arrow"
                  onClick={() => jumpToStep(activeStep - 1)}
                  disabled={activeStep === 0}
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="size-4" />
                </button>

                {/* Masked bottom-to-up active step highlight card */}
                <div className="app-mobile-card-stage">
                  {showcaseChapters.map((chapter, index) => {
                    const StepIcon = chapter.Icon;
                    const stateClass =
                      index === activeStep
                        ? "is-active"
                        : index < activeStep
                          ? "is-past"
                          : "is-upcoming";
                    return (
                      <div
                        key={chapter.step}
                        className={`app-mobile-card ${stateClass}`}
                        aria-hidden={index !== activeStep}
                      >
                        <span className="app-mobile-card__icon" aria-hidden="true">
                          <StepIcon className="size-5" />
                        </span>
                        <span className="app-mobile-card__text">
                          <strong>{chapter.label}</strong>
                          <small>{chapter.shortDesc}</small>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="app-mobile-arrow"
                  onClick={() => jumpToStep(activeStep + 1)}
                  disabled={activeStep === showcaseChapters.length - 1}
                  aria-label="Next screen"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Bottom Pagination Dots */}
              <div className="app-mobile-dots" role="group" aria-label="Screen indicators">
                {showcaseChapters.map((chapter, index) => (
                  <button
                    key={chapter.step}
                    type="button"
                    className={`app-mobile-dot${index === activeStep ? " is-active" : ""}`}
                    onClick={() => jumpToStep(index)}
                    aria-label={`Go to ${chapter.label}`}
                    aria-pressed={index === activeStep}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Bottom Full-Width Progress Line + Screen Counter */}
          <footer className="app-bottom-bar" aria-live="polite">
            <div className="app-bottom-bar__track" aria-hidden="true">
              <div
                className="app-bottom-bar__fill"
                style={{
                  width: `${((activeStep + 1) / showcaseChapters.length) * 100}%`,
                }}
              />
            </div>
            <div className="app-bottom-bar__meta">
              <span className="app-bottom-bar__count">
                Screen {currentChapter.step} of 05
              </span>
              <span className="app-bottom-bar__active">
                <span className="app-bottom-bar__dot" aria-hidden="true" />
                {currentChapter.step} · {currentChapter.label}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
