/**
 * EarnHero Component
 *
 * Clean, high-impact hero banner for /earn with breadcrumb navigation,
 * concise value proposition, CTAs, and FY26 live benchmark snapshot.
 */
import { appleStoreUrl, appStoreUrl } from "../../data/siteContent";
import {
  Apple,
  ArrowRight,
  Bolt,
  GooglePlay,
  Rupee,
  ShieldCheck,
  Sparkle,
} from "../Icons";

const quickPayouts = [
  { label: "Brand promotion", range: "₹200–₹1,500" },
  { label: "Referrals", range: "₹300–₹2,000" },
  { label: "Creator briefs", range: "₹500–₹3,000" },
  { label: "Sampling & surveys", range: "₹100–₹800" },
];

export default function EarnHero({ onNavigate }) {
  return (
    <section className="earn-hero" aria-labelledby="earn-hero-title">
      <div className="container-page earn-hero__grid">
        {/* Left Column */}
        <div className="earn-hero__copy earn-reveal">
          <nav className="earn-crumb" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/");
              }}
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Earn</span>
          </nav>

          <p className="eyebrow earn-hero__eyebrow">
            Start earning · Five simple steps
          </p>

          <h1 className="earn-hero__title" id="earn-hero-title">
            Start your{" "}
            <span className="earn-hero__mark">online earning</span>{" "}
            journey today.
          </h1>

          <p className="earn-hero__lead">
            Pick real brand campaigns from your phone and withdraw verified UPI
            payouts within 24 hours — with zero investment.
          </p>

          <div className="earn-hero__actions">
            <a
              className="btn btn-primary"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Earning Free
              <ArrowRight className="size-4" />
            </a>
            <a className="btn btn-outline" href="#earn-categories">
              Explore live work
            </a>
          </div>

          <ul className="earn-hero__trust" aria-label="Core guarantees">
            <li>
              <Bolt className="size-4" />
              24h first payout
            </li>
            <li>
              <Rupee className="size-4" />
              ₹0 joining fee
            </li>
            <li>
              <ShieldCheck className="size-4" />
              5,000+ verified brands
            </li>
          </ul>
        </div>

        {/* Right Column: Live FY26 Snapshot */}
        <aside
          className="earn-snapshot earn-reveal"
          aria-label="Funngro earnings snapshot"
        >
          <div className="earn-snapshot__top">
            <span className="earn-snapshot__pill">
              <Sparkle className="size-3.5" />
              FY26 Benchmarks
            </span>
            <span className="earn-snapshot__live">
              <span className="earn-snapshot__dot" aria-hidden="true" />
              5,000+ live briefs
            </span>
          </div>

          <div className="earn-snapshot__metrics">
            <div className="earn-snapshot__metric">
              <b>₹4,100/mo</b>
              <span>Average active earner</span>
            </div>
            <div className="earn-snapshot__metric earn-snapshot__metric--lime">
              <b>₹18,000+/mo</b>
              <span>Top 5% earners</span>
            </div>
          </div>

          <ul className="earn-snapshot__list" aria-label="Task payout bands">
            {quickPayouts.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.range}</strong>
              </li>
            ))}
          </ul>

          <div className="earn-snapshot__stores">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="earn-mini-store"
            >
              <GooglePlay className="size-4" />
              <span>Google Play</span>
            </a>
            <a
              href={appleStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="earn-mini-store"
            >
              <Apple className="size-4" />
              <span>App Store</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
