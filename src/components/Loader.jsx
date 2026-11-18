/**
 * Loader — Minimal Branded Funngro Loading Effects (Icon-Only, No Visible Text)
 *
 * Uses Funngro's signature 4 rising green growth bars so every loading state
 * matches both Light Cream and Greenish Forest Dark themes effortlessly.
 *
 * Variants:
 * - `splash`  : Quick, smooth entry loader when the site first boots (fades out & unmounts)
 * - `inline`  : Clean centered loader shown while lazy routes like `/earn` download
 * - `compact` : Subtle dark-glass loader for embedded media (e.g., Shark Tank YouTube player)
 *
 * Also exports `RouteProgressBar`, a sleek lime-emerald bar gliding across the
 * top edge whenever you switch between `/` and `/earn`.
 */
import "../styles/Loader.css";

export function PageLoader({
  variant = "inline",
  label = "Loading",
  exiting = false,
}) {
  return (
    <div
      className={`fn-loader fn-loader--${variant}${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      {/* 4 rising bars inspired by the official Funngro emblem */}
      <div className="fn-loader__bars" aria-hidden="true">
        <span className="fn-loader__bar fn-loader__bar--1" />
        <span className="fn-loader__bar fn-loader__bar--2" />
        <span className="fn-loader__bar fn-loader__bar--3" />
        <span className="fn-loader__bar fn-loader__bar--4" />
      </div>
    </div>
  );
}

export function RouteProgressBar({ active }) {
  if (!active) return null;

  return (
    <div className="fn-route-bar" aria-hidden="true">
      <div className="fn-route-bar__fill" />
    </div>
  );
}
