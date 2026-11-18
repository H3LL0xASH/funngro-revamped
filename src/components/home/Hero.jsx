/**
 * Hero — First screen visitors see on `/`
 *
 * Shows Funngro's main headline, Sign Up & How It Works buttons, three centered
 * trust cards (Flexible work, Real earnings, Top brands), and the creator
 * portrait smoothly blended into the page background.
 */
import { appStoreUrl } from "../../data/siteContent";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Gift,
  Megaphone,
  PlayCircle,
  Rupee,
  Sparkle,
  Video,
} from "../Icons";
import "../../styles/Hero.css";

const proofPoints = [
  { icon: Bolt, title: "Flexible work", copy: "Do it your way" },
  { icon: Rupee, title: "Real earnings", copy: "Paid via UPI" },
  { icon: BadgeCheck, title: "Top brands", copy: "Trusted partners" },
];

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container-page hero__inner">
        <div className="hero__copy">
          <p className="hero__tagline">
            <span className="hero__tagline-pulse" aria-hidden="true" />
            · India&apos;s youth · India&apos;s brands · 2026 ·
          </p>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__mark">Your Skills.</span>
            <span>Real Opportunities.</span>
            <span>Real Earnings.</span>
          </h1>

          <p className="hero__lead">
            Join Funngro and work on paid campaigns, create content, refer
            brands, take surveys and more — right from your phone.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn-primary"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Earning Free
              <ArrowRight className="size-4" />
            </a>
            <a className="btn btn-outline" href="#how-it-works">
              <PlayCircle className="size-5 text-brand" />
              Watch How It Works
            </a>
          </div>

          <ul className="hero__proof" aria-label="Why young Indians choose Funngro">
            {proofPoints.map(({ icon: ProofIcon, title, copy }) => (
              <li className="hero__proof-item" key={title}>
                <span className="hero__proof-icon" aria-hidden="true">
                  <ProofIcon className="size-[16px]" />
                </span>
                <span className="hero__proof-text">
                  <b>{title}</b>
                  <small>{copy}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art">
          <div className="hero__blob" aria-hidden="true" />
          <div className="hero__ring" aria-hidden="true" />

          {/* Showcasing creator portrait with native Funngro app UI on smartphone */}
          <div className="hero__stage">
            <img
              className="hero__photo"
              src="/images/hero-creator-480.webp"
              srcSet="/images/hero-creator-400.webp 400w, /images/hero-creator-480.webp 480w, /images/hero-creator-640.webp 640w, /images/hero-creator-800.webp 800w, /images/hero-creator-960.webp 960w"
              sizes="(min-width: 960px) 520px, (min-width: 640px) 460px, 92vw"
              width="1199"
              height="1312"
              alt="Young Funngro creator smiling and showcasing the Funngro earnings app on her smartphone"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Floating badge chips */}
          <span className="hero-chip hero-chip--campaigns" aria-hidden="true">
            <span className="hero-chip__icon hero-chip__icon--lime">
              <Megaphone className="size-3.5" />
            </span>
            Paid campaigns
          </span>

          <span className="hero-chip hero-chip--content" aria-hidden="true">
            <span className="hero-chip__icon hero-chip__icon--lime">
              <Video className="size-3.5" />
            </span>
            Create content
          </span>

          <span className="hero-chip hero-chip--surveys" aria-hidden="true">
            <span className="hero-chip__icon hero-chip__icon--lime">
              <BadgeCheck className="size-3.5" />
            </span>
            Take surveys
          </span>

          <span className="hero-chip hero-chip--refer" aria-hidden="true">
            <span className="hero-chip__icon hero-chip__icon--amber">
              <Gift className="size-3.5" />
            </span>
            Refer &amp; earn
          </span>

          <Sparkle className="hero__sparkle hero__sparkle--one" />
          <Sparkle className="hero__sparkle hero__sparkle--two" />
          <Sparkle className="hero__sparkle hero__sparkle--three" />
        </div>
      </div>
    </section>
  );
}
