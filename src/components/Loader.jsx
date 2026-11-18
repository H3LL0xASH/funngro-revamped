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
