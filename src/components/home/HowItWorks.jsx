import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import step1Bg from "../../assets/hiw/step-1-bg.webp";
import step2Bg from "../../assets/hiw/step-2-bg.webp";
import step3Bg from "../../assets/hiw/step-3-bg.webp";
import step4Bg from "../../assets/hiw/step-4-bg.webp";
import {
  BadgeCheck,
  Check,
  Gift,
  ShieldCheck,
  Users,
  Wallet,
} from "../Icons";
import "../../styles/HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

function AccountPhone3D() {
  return (
    <div className="hiw-art-3d hiw-art-3d--account" aria-hidden="true">
      <svg viewBox="0 0 92 92" fill="none" className="hiw-3d-svg">
        <defs>
          <linearGradient id="hiwPhoneFrame" x1="16" y1="8" x2="72" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4ade80" />
            <stop offset="0.5" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="hiwPlusGrad" x1="56" y1="54" x2="82" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#86efac" />
            <stop offset="0.5" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
          <filter id="hiwCardDrop" x="4" y="4" width="84" height="84" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#15803d" floodOpacity="0.24" />
          </filter>
        </defs>

        <g filter="url(#hiwCardDrop)" transform="rotate(-7 44 46)">
          <rect x="18" y="12" width="52" height="66" rx="13" fill="url(#hiwPhoneFrame)" />
          <rect x="22" y="16" width="44" height="58" rx="9" fill="#ffffff" />
          <circle cx="44" cy="36" r="8.5" fill="#16a34a" />
          <path d="M31 55c0-6.2 5.8-10.2 13-10.2s13 4 13 10.2" fill="#22c55e" />
          <rect x="33" y="61" width="22" height="3.2" rx="1.6" fill="#dcfce7" />
          <rect x="37" y="67" width="14" height="3.2" rx="1.6" fill="#bbf7d0" />
        </g>

        <g>
          <circle cx="68" cy="66" r="13.5" fill="url(#hiwPlusGrad)" />
          <circle cx="68" cy="66" r="13.5" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M68 60v12M62 66h12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function CampaignMiniGrid() {
  return (
    <div className="hiw-mini-grid" aria-hidden="true">
      <span className="hiw-mini-tile hiw-mini-tile--play">
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path d="M8 6.5l10 5.5-10 5.5v-11z" fill="#16a34a" />
        </svg>
      </span>
      <span className="hiw-mini-tile hiw-mini-tile--users">
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <circle cx="9.5" cy="8.5" r="3" fill="#0d9488" />
          <path d="M4 18.5c0-2.8 2.4-4.8 5.5-4.8s5.5 2 5.5 4.8" fill="#0d9488" />
          <circle cx="16.5" cy="9.5" r="2.2" fill="#14b8a6" />
          <path d="M15.5 14.5c2 0 4 1.3 4 3.5" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="hiw-mini-tile hiw-mini-tile--games">
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <rect x="3.5" y="7.5" width="17" height="10" rx="5" fill="#ef4444" />
          <path d="M8.5 10.5v4M6.5 12.5h4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="15.5" cy="11.5" r="1.1" fill="#ffffff" />
          <circle cx="17.5" cy="13.5" r="1.1" fill="#ffffff" />
        </svg>
      </span>
      <span className="hiw-mini-tile hiw-mini-tile--survey">
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <rect x="5" y="5" width="14" height="15" rx="3" stroke="#7c3aed" strokeWidth="2" />
          <rect x="8.5" y="3" width="7" height="3.5" rx="1.2" fill="#7c3aed" />
          <path d="M8.5 11.5h7M8.5 15h4.5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

function SubmitUpload3D() {
  return (
    <div className="hiw-art-3d hiw-art-3d--submit" aria-hidden="true">
      <svg viewBox="0 0 92 92" fill="none" className="hiw-3d-svg">
        <defs>
          <linearGradient id="hiwUploadBadge" x1="54" y1="46" x2="82" y2="74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4ade80" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
          <filter id="hiwSubmitDrop" x="4" y="4" width="84" height="84" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#15803d" floodOpacity="0.22" />
          </filter>
        </defs>

        <g filter="url(#hiwSubmitDrop)" transform="rotate(-7 42 46)">
          <rect x="14" y="16" width="56" height="54" rx="12" fill="#ffffff" stroke="#e2f5e7" strokeWidth="2.5" />
          <rect x="20" y="22" width="44" height="32" rx="7" fill="#dcfce7" />
          <circle cx="52" cy="31" r="4" fill="#86efac" />
          <path d="M22 52l11-13 7 8 8-10 14 15H22z" fill="#22c55e" />
          <rect x="22" y="59" width="24" height="3.5" rx="1.75" fill="#bbf7d0" />
        </g>

        <g>
          <circle cx="67" cy="61" r="13.5" fill="url(#hiwUploadBadge)" />
          <circle cx="67" cy="61" r="13.5" stroke="#ffffff" strokeWidth="2.5" />
          <path
            d="M67 67V55M61 60.5l6-6 6 6"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function WalletCash3D() {
  return (
    <div className="hiw-art-3d hiw-art-3d--wallet" aria-hidden="true">
      <svg viewBox="0 0 92 92" fill="none" className="hiw-3d-svg">
        <defs>
          <linearGradient id="hiwWalletGrad" x1="16" y1="28" x2="74" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4ade80" />
            <stop offset="0.55" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="hiwCoinGrad" x1="36" y1="12" x2="72" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef08a" />
            <stop offset="0.55" stopColor="#facc15" />
            <stop offset="1" stopColor="#eab308" />
          </linearGradient>
          <filter id="hiwWalletDrop" x="6" y="8" width="82" height="80" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#15803d" floodOpacity="0.26" />
          </filter>
        </defs>

        <g filter="url(#hiwWalletDrop)">
          {/* Floating gold coins pouring into wallet */}
          <ellipse cx="44" cy="29" rx="10" ry="6" fill="url(#hiwCoinGrad)" stroke="#fde047" strokeWidth="1.2" />
          <ellipse cx="56" cy="23" rx="9" ry="5.5" fill="url(#hiwCoinGrad)" stroke="#fde047" strokeWidth="1.2" />
          <ellipse cx="66" cy="18" rx="6.5" ry="4" fill="#fef08a" stroke="#facc15" strokeWidth="1.2" />

          {/* Green wallet body */}
          <rect x="16" y="32" width="58" height="44" rx="13" fill="url(#hiwWalletGrad)" />
          <rect x="58" y="47" width="18" height="14" rx="5" fill="#15803d" />
          <circle cx="65" cy="54" r="2.6" fill="#fef08a" />
          <text
            x="40"
            y="62"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="23"
            fontWeight="800"
            fontFamily="var(--font-display), sans-serif"
          >
            ₹
          </text>
        </g>
      </svg>
    </div>
  );
}

/* Top-Right Category Squircle Icons */
function CategoryMegaphone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M18 8l2-2M19 12h3M18 16l2 2M5 9h2l5-4v14l-5-4H5a2 2 0 01-2-2v-2a2 2 0 012-2z"
        stroke="#16a34a"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="M8 6.5l10 5.5-10 5.5v-11z" fill="#16a34a" />
    </svg>
  );
}

function CategoryUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M16 19v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1"
        stroke="#0284c7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="8" r="3" fill="#0284c7" />
      <path
        d="M18 15a2.5 2.5 0 012 2.4V18"
        stroke="#0284c7"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.78"
      />
      <circle cx="17.5" cy="7.5" r="2.2" fill="#0284c7" opacity="0.78" />
    </svg>
  );
}

function CategoryClipboard() {
  return (
    <div className="hiw-cat-clip-wrap">
      <span className="hiw-sparkle-rays" aria-hidden="true">
        <span className="hiw-ray hiw-ray--1" />
        <span className="hiw-ray hiw-ray--2" />
        <span className="hiw-ray hiw-ray--3" />
      </span>
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <rect x="4" y="5" width="16" height="16" rx="3.5" stroke="#7c3aed" strokeWidth="2" />
        <rect x="8" y="2.5" width="8" height="4" rx="1.5" fill="#7c3aed" />
        <path d="M8 11h8M8 15h5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BrushUnderline() {
  return (
    <svg className="hiw-title__brush" viewBox="0 0 240 16" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M6 12C68 3 156 2 234 9"
        stroke="url(#hiwBrushStroke)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="hiwBrushStroke" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ade80" />
          <stop offset="0.5" stopColor="#22c55e" />
          <stop offset="1" stopColor="#c6f45e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   4 Step Definitions with Custom Glassy PNG Watermarks
   -------------------------------------------------------------------------- */
const howSteps = [
  {
    step: "01",
    title: "Create your\naccount",
    bullets: ["Quick sign up", "Get started in minutes"],
    bgImg: step1Bg,
    Visual: AccountPhone3D,
    featured: true,
  },
  {
    step: "02",
    title: "Choose a\ncampaign",
    bgImg: step2Bg,
    Visual: CampaignMiniGrid,
  },
  {
    step: "03",
    title: "Submit\nyour work",
    bgImg: step3Bg,
    Visual: SubmitUpload3D,
  },
  {
    step: "04",
    title: "Get paid\nby UPI/BANK",
    bgImg: step4Bg,
    Visual: WalletCash3D,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const trustRef = useRef(null);
  const triggerRef = useRef(null);
  const activeStepRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const trust = trustRef.current;
    if (!section || !pin || !viewport || !track) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      if (trust) gsap.set(trust, { opacity: 1, y: 0 });
      return undefined;
    }

    const getMaxShift = () =>
      Math.max(0, track.scrollWidth - viewport.clientWidth);

    const ctx = gsap.context(() => {
      if (trust) {
        gsap.set(trust, { opacity: 0.25, y: 20 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "hiw-step-carousel",
          trigger: section,
          start: () => (window.innerWidth < 960 ? "top 60px" : "top top"),
          end: () =>
            `+=${Math.max(
              window.innerHeight * 0.95,
              getMaxShift() * (window.innerWidth < 768 ? 1.35 : 1.55),
            )}`,
          pin: pin,
          pinSpacing: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          scrub: true,
          onUpdate: (self) => {
            const slideProgress = Math.min(1, self.progress / 0.8);
            const nextStep = Math.min(
              howSteps.length - 1,
              Math.max(0, Math.floor(slideProgress * howSteps.length)),
            );
            if (nextStep !== activeStepRef.current) {
              activeStepRef.current = nextStep;
              setActiveStep(nextStep);
            }
          },
        },
      });

      triggerRef.current = tl.scrollTrigger;

      tl.to(
        track,
        {
          x: () => -getMaxShift(),
          force3D: true,
          ease: "none",
          duration: 0.8,
        },
        0,
      );

      if (trust) {
        tl.to(
          trust,
          {
            opacity: 1,
            y: 0,
            force3D: true,
            ease: "power2.out",
            duration: 0.28,
          },
          0.52,
        );
      }

      tl.to({}, { duration: 0.2 }, 0.8);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Clicking a card, dot, or category squircle smoothly syncs the scroll position
  const handleJumpToStep = (targetStep) => {
    activeStepRef.current = targetStep;
    setActiveStep(targetStep);
    const trigger = triggerRef.current;
    if (!trigger) return;

    const ratio = targetStep / (howSteps.length - 1);
    const targetScroll =
      trigger.start + ratio * (trigger.end - trigger.start);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      id="how-it-works"
      className="hiw"
      ref={sectionRef}
      aria-labelledby="hiw-title"
    >
      <span id="ways-to-earn" className="sr-only" aria-hidden="true" />

      <div className="hiw-pin" ref={pinRef}>
        <div className="container-page hiw__inner">
          <header className="hiw-head">
            <div className="hiw-head__left">
              <p className="hiw-head__eyebrow">
                <span className="hiw-head__dot" aria-hidden="true" />
                HOW FUNNGRO WORKS
              </p>
              <h2 className="hiw-head__title" id="hiw-title">
                More ways to earn,
                <br />
                from sign-up{" "}
                <span className="hiw-head__highlight">
                  to payout.
                  <BrushUnderline />
                </span>
              </h2>
            </div>

            <div
              className="hiw-categories"
              role="group"
              aria-label="Ways to earn categories"
            >
              <button
                type="button"
                className={`hiw-cat-pill hiw-cat-pill--campaigns${activeStep === 1 ? " is-active" : ""}`}
                title="Brand Campaigns"
                aria-label="Brand Campaigns"
                onClick={() => handleJumpToStep(1)}
              >
                <CategoryMegaphone />
              </button>
              <button
                type="button"
                className={`hiw-cat-pill hiw-cat-pill--content${activeStep === 2 ? " is-active" : ""}`}
                title="Content Creation"
                aria-label="Content Creation"
                onClick={() => handleJumpToStep(2)}
              >
                <CategoryPlay />
              </button>
              <button
                type="button"
                className={`hiw-cat-pill hiw-cat-pill--referrals${activeStep === 0 ? " is-active" : ""}`}
                title="Create Account"
                aria-label="Create Account"
                onClick={() => handleJumpToStep(0)}
              >
                <CategoryUsers />
              </button>
              <button
                type="button"
                className={`hiw-cat-pill hiw-cat-pill--surveys${activeStep === 3 ? " is-active" : ""}`}
                title="Get Paid by UPI"
                aria-label="Get Paid by UPI"
                onClick={() => handleJumpToStep(3)}
              >
                <CategoryClipboard />
              </button>
            </div>
          </header>

          {/* Clean Borderless Horizontal Cards Viewport (NO side arrows!) */}
          <div className="hiw-viewport" ref={viewportRef}>
            <div
              className="hiw-track"
              ref={trackRef}
              role="region"
              aria-label="Four steps from sign-up to UPI payout"
            >
              {howSteps.map((step, index) => {
                const { Visual } = step;
                const isCurrent = index === activeStep;
                return (
                  <div
                    key={step.step}
                    className={`hiw-card${step.featured ? " hiw-card--wide" : ""}${
                      isCurrent ? " is-current" : ""
                    }`}
                    onClick={() => handleJumpToStep(index)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isCurrent}
                    aria-label={`Step ${step.step}: ${step.title.replace("\n", " ")}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleJumpToStep(index);
                      }
                    }}
                  >
                    {/* Lightweight WebP Watermark Underneath Card */}
                    <img
                      className="hiw-card__bg"
                      src={step.bgImg}
                      alt=""
                      width="480"
                      height="320"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Foreground Frosted Content Layer */}
                    <div className="hiw-card__content">
                      <div className="hiw-card__top">
                        <span className="hiw-card__badge">{step.step}</span>
                        <h3 className="hiw-card__title">{step.title}</h3>
                      </div>

                      {step.bullets ? (
                        <div className="hiw-card__split">
                          <ul className="hiw-card__bullets">
                            {step.bullets.map((b) => (
                              <li key={b}>
                                <span className="hiw-bullet-check" aria-hidden="true">
                                  <Check className="size-3" />
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <Visual />
                        </div>
                      ) : (
                        <div className="hiw-card__visual">
                          <Visual />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div
            className="hiw-dots"
            role="group"
            aria-label="Step progress indicator"
          >
            {howSteps.map((s, index) => {
              const isSelected = index === activeStep;
              return (
                <button
                  type="button"
                  key={s.step}
                  className={`hiw-dot${isSelected ? " is-active" : ""}`}
                  onClick={() => handleJumpToStep(index)}
                  aria-label={`Go to step ${s.step}`}
                  aria-pressed={isSelected}
                />
              );
            })}
          </div>

          {/* Bottom Safe & Trusted Pill Strip */}
          <div
            className="hiw-trust-strip"
            ref={trustRef}
            role="region"
            aria-label="Security and trust guarantees"
          >
            <div className="hiw-trust-item hiw-trust-item--highlight">
              <span className="hiw-trust-icon hiw-trust-icon--glow" aria-hidden="true">
                <ShieldCheck className="size-5" />
              </span>
              <span className="hiw-trust-label">Safe &amp; Trusted</span>
            </div>

            <div className="hiw-trust-item">
              <span className="hiw-trust-icon" aria-hidden="true">
                <Users className="size-4" />
              </span>
              <span className="hiw-trust-sublabel">70 Lakh+ Earners</span>
            </div>

            <div className="hiw-trust-item">
              <span className="hiw-trust-icon" aria-hidden="true">
                <ShieldCheck className="size-4" />
              </span>
              <span className="hiw-trust-sublabel">Verified Campaigns</span>
            </div>

            <div className="hiw-trust-item">
              <span className="hiw-trust-icon" aria-hidden="true">
                <Gift className="size-4" />
              </span>
              <span className="hiw-trust-sublabel">Real Rewards</span>
            </div>

            <div className="hiw-trust-item">
              <span className="hiw-trust-icon" aria-hidden="true">
                <Wallet className="size-4" />
              </span>
              <span className="hiw-trust-sublabel">Instant UPI Payouts</span>
            </div>

            <div className="hiw-trust-item">
              <span className="hiw-trust-icon" aria-hidden="true">
                <BadgeCheck className="size-4" />
              </span>
              <span className="hiw-trust-sublabel">No Hidden Charges</span>
            </div>
          </div>
        </div>

        {/* Soft Organic Bottom Lime Wave */}
        <svg
          className="hiw-wave"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,45 C280,75 520,20 840,55 C1160,85 1340,35 1440,50 L1440,80 L0,80 Z"
            fill="rgb(198 244 94 / 0.16)"
          />
          <path
            d="M0,60 C320,30 640,78 980,45 C1240,25 1380,65 1440,70 L1440,80 L0,80 Z"
            fill="rgb(24 154 74 / 0.06)"
          />
        </svg>
      </div>
    </section>
  );
}
