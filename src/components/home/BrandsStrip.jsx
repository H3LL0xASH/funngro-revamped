import { brandLogos } from "../../data/siteContent";
import { ShieldCheck, Star } from "../Icons";
import "../../styles/BrandsStrip.css";

/* Brand Logo SVGs */
function LifelongLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#edf4f5" />
      <circle cx="14" cy="18" r="5" stroke="#009bb3" strokeWidth="2.8" />
      <circle cx="22" cy="18" r="5" stroke="#009bb3" strokeWidth="2.8" />
    </svg>
  );
}

function ICICILogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#a81c2f" />
      <circle cx="18" cy="18" r="10" fill="#f26522" opacity="0.45" />
      <circle cx="18" cy="12.5" r="1.8" fill="#fff" />
      <rect x="16" y="16" width="4" height="9" rx="1" fill="#fff" />
      <path
        d="M12 15.5C14 12.8 17 12 20.5 13"
        stroke="#fdb913"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function KotakLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#f2f5fb" />
      <path
        d="M10 18c0-3 2.5-5.5 5.5-5.5 2.8 0 4.2 2 5.3 3.8l1.5 2.7c1.1 1.9 2.5 3.5 4.7 3.5 2.8 0 4.5-2.2 4.5-4.5"
        stroke="#ed1c24"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M26 18c0 3-2.5 5.5-5.5 5.5-2.8 0-4.2-2-5.3-3.8l-1.5-2.7c-1.1-1.9-2.5-3.5-4.7-3.5-2.8 0-4.5 2.2-4.5 4.5"
        stroke="#003366"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaytmLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#002970" />
      <path
        d="M11 11h7a4.5 4.5 0 0 1 4.5 4.5 4.5 4.5 0 0 1-4.5 4.5H14.5v6H11V11zm3.5 3v3h3.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-3.5z"
        fill="#00baf2"
      />
      <circle cx="24.5" cy="21.5" r="2.5" fill="#00baf2" />
    </svg>
  );
}

function CarDekhoLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#fff3ea" />
      <path
        d="M10 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
        stroke="#ff5a00"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M18 13v4.5l3.5 2.5"
        stroke="#ff5a00"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="21" r="2.8" fill="#2d3748" />
      <path
        d="M12 25h12"
        stroke="#2d3748"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LXMELogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#6a25c9" />
      <path
        d="M18 8l2.5 7.5L28 18l-7.5 2.5L18 28l-2.5-7.5L8 18l7.5-2.5L18 8z"
        fill="#ffd15c"
      />
      <circle cx="18" cy="18" r="2.5" fill="#fff" />
    </svg>
  );
}

function NielsenLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#ebf3fd" />
      <rect x="10" y="17" width="3.2" height="10" rx="1.6" fill="#0055b8" />
      <rect x="15.5" y="11" width="3.2" height="16" rx="1.6" fill="#0055b8" />
      <rect x="21" y="8" width="3.2" height="19" rx="1.6" fill="#2678d9" />
      <rect x="26.5" y="14" width="3.2" height="13" rx="1.6" fill="#4d9bf0" />
    </svg>
  );
}

function TolunaLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#e7f8ef" />
      <circle
        cx="18"
        cy="18"
        r="10"
        stroke="#00a86b"
        strokeWidth="2.8"
        strokeDasharray="16 3"
      />
      <circle cx="18" cy="18" r="5" fill="#00a86b" />
    </svg>
  );
}

function MpokketLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#fff0e4" />
      <rect
        x="8"
        y="11"
        width="20"
        height="15"
        rx="3.5"
        stroke="#f15a24"
        strokeWidth="2.2"
        fill="#fff"
      />
      <path
        d="M11 12.5l7 5.5 7-5.5"
        stroke="#f15a24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="18"
        y="22.5"
        textAnchor="middle"
        fill="#f15a24"
        fontSize="9"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        m
      </text>
    </svg>
  );
}

function NovioLogo() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#eef7e2" />
      <path d="M18 9l8 8-8 8-8-8 8-8z" fill="#5b8c1a" />
      <circle cx="18" cy="17" r="2.8" fill="#fff" />
    </svg>
  );
}

const brandLogosMap = {
  Lifelong: LifelongLogo,
  ICICI: ICICILogo,
  Kotak: KotakLogo,
  Paytm: PaytmLogo,
  CarDekho: CarDekhoLogo,
  LXME: LXMELogo,
  Nielsen: NielsenLogo,
  Toluna: TolunaLogo,
  Mpokket: MpokketLogo,
  Novio: NovioLogo,
};

/* Decorative Header SVGs */
function BrushUnderline() {
  return (
    <svg
      className="brands-head__brush"
      viewBox="0 0 170 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 10C45 4.5 125 3.5 168 9"
        stroke="var(--color-accent)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkBurst() {
  return (
    <svg
      className="brands-head__spark"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 24L12 15"
        stroke="var(--color-accent)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M17 19L24 13"
        stroke="var(--color-accent)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M16 25L23 23"
        stroke="var(--color-accent)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Stat Icons */
function UsersGroupIcon({ className = "size-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HandshakeIcon({ className = "size-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0L11 13" />
      <path d="m18 11 2.3-2.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0L13.6 6.6" />
      <path d="m2 11 4.3 4.3a1 1 0 0 0 1.4 0L13 10" />
      <path d="m9.3 6.3-2-2a1 1 0 0 0-1.4 0L2 8.2" />
    </svg>
  );
}

function RocketIcon({ className = "size-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
      <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
    </svg>
  );
}

function LayersIcon({ className = "size-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 2 10 5-10 5L2 7l10-5Z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  );
}

const statsData = [
  {
    icon: UsersGroupIcon,
    value: "70 Lakh+",
    label: "young Indians earning",
  },
  {
    icon: HandshakeIcon,
    value: "5,000+",
    label: "brand partners",
  },
  {
    icon: RocketIcon,
    value: "1,000+",
    label: "live projects",
  },
  {
    icon: LayersIcon,
    value: "12+",
    label: "work categories",
  },
];

export default function BrandsStrip() {
  // Duplicated list for seamless infinite self-scrolling marquee (no arrows)
  const marqueeLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="brands" aria-labelledby="brands-title">
      <div className="container-page">
        {/* Header Row: Title on Left, Badges on Right */}
        <header className="brands-head">
          <div className="brands-head__title-group">
            <span className="brands-head__dot" aria-hidden="true" />
            <h2 className="brands-head__title" id="brands-title">
              Real Brands.{" "}
              <span className="brands-head__highlight">
                Real Work.
                <BrushUnderline />
                <SparkBurst />
              </span>
            </h2>
          </div>

          <div className="brands-head__badges">
            <span className="brands-badge">
              <Star className="size-3.5 text-amber shrink-0" />
              <span>4.2 on Play Store</span>
            </span>
            <span className="brands-badge">
              <ShieldCheck className="size-3.5 text-brand shrink-0" />
              <span>Featured In· Shark Tank India Season 2</span>
            </span>
          </div>
        </header>

        {/* Self-scrolling brand cards showcase (Infinite marquee, no arrows) */}
        <div
          className="brands-showcase"
          role="region"
          aria-label="Partner brand logos"
        >
          <div className="brands-marquee-container">
            <div className="brands-marquee-track">
              {marqueeLogos.map((brand, index) => {
                const Logo = brandLogosMap[brand.name];
                const isDuplicate = index >= brandLogos.length;
                return (
                  <div
                    className="brand-card"
                    key={`${brand.name}-${index}`}
                    aria-hidden={isDuplicate ? "true" : undefined}
                  >
                    <div className="brand-card__icon" aria-hidden="true">
                      {Logo ? <Logo /> : brand.mark}
                    </div>
                    <b className="brand-card__name">{brand.name}</b>
                    <small className="brand-card__category">
                      {brand.category}
                    </small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner (Vibrant, medium-rich green pill) */}
        <div className="brands-stats-banner">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                className={`brands-stat-item${
                  index < statsData.length - 1
                    ? " brands-stat-item--divided"
                    : ""
                }`}
                key={stat.label}
              >
                <div
                  className="brands-stat-item__icon-wrap"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </div>
                <div className="brands-stat-item__content">
                  <span className="brands-stat-item__value">{stat.value}</span>
                  <span className="brands-stat-item__label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
