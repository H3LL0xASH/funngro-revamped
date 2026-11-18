import { ArrowLeft, ArrowRight, Sparkle } from "./Icons";
import "../styles/NotFound.css";

export default function NotFound({ onNavigate, currentPath = "" }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("/");
    else window.location.href = "/";
  };

  const handleEarnClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("/earn");
    else window.location.href = "/earn";
  };

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__inner">
        <span className="not-found__badge">
          <Sparkle className="size-4" />
          HTTP 404 · Page Not Found
        </span>

        <div className="not-found__code" aria-hidden="true">
          404
        </div>

        <h1 className="not-found__title" id="not-found-title">
          We couldn&apos;t find that page
        </h1>

        <p className="not-found__copy">
          The requested URL{" "}
          {currentPath ? (
            <span className="not-found__path">{currentPath}</span>
          ) : (
            "you followed"
          )}{" "}
          doesn&apos;t exist, may have been moved, or is no longer available.
        </p>

        <div className="not-found__actions">
          <a
            className="btn btn-primary"
            href="/"
            onClick={handleHomeClick}
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </a>
          <a
            className="btn btn-outline"
            href="/earn"
            onClick={handleEarnClick}
          >
            Explore Ways to Earn
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="not-found__links">
          <span className="not-found__link-label">Popular pages:</span>
          <a
            className="not-found__link"
            href="/"
            onClick={handleHomeClick}
          >
            Home
          </a>
          <a
            className="not-found__link"
            href="/earn"
            onClick={handleEarnClick}
          >
            Earn Guide
          </a>
          <a
            className="not-found__link"
            href="/#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("/#how-it-works");
            }}
          >
            How It Works
          </a>
          <a
            className="not-found__link"
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("/#faq");
            }}
          >
            FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
