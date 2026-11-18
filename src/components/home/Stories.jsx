/**
 * Stories — "Real people. Real payouts."
 *
 * Interactive earner stories slider (built with plain React + CSS, no GSAP):
 * - On desktop: shows 5 cards in a stepped pyramid — the middle card pops up
 *   highest, the two cards next to it step slightly down, and the two outer
 *   cards step down a little further.
 * - On tablet: shows 3 cards (middle popped up, left/right stepped down).
 * - On mobile: shows 1 full card at a time with swipe support.
 * - Automatically slides forward and smoothly reverses when it reaches either
 *   end (1 -> 2 -> 3 ... -> End -> ... -> 3 -> 2 -> 1).
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { appStoreUrl, stories, storiesUrl } from "../../data/siteContent";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "../Icons";
import "../../styles/Stories.css";

// Decide how many cards fit side-by-side based on screen width
function getVisibleCount() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth >= 1024) return 5;
  if (window.innerWidth >= 640) return 3;
  return 1;
}

export default function Stories() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // +1 means sliding right (forward), -1 means sliding back left (reverse)
  const directionRef = useRef(1);
  const touchStartX = useRef(null);

  const maxStart = Math.max(0, stories.length - visibleCount);
  const clampedStart = Math.min(startIndex, maxStart);
  const centerIndex = clampedStart + Math.floor(visibleCount / 2);

  // Update visible card count whenever the browser window crosses a breakpoint
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move left or right by 1 card; gently reverse direction if we hit either end
  const stepBy = useCallback(
    (delta) => {
      setStartIndex((prev) => {
        const current = Math.min(prev, maxStart);
        let next = current + delta;

        if (next > maxStart) {
          directionRef.current = -1;
          next = Math.max(0, maxStart - 1);
        } else if (next < 0) {
          directionRef.current = 1;
          next = Math.min(maxStart, 1);
        } else {
          directionRef.current = delta > 0 ? 1 : -1;
        }
        return next;
      });
    },
    [maxStart],
  );

  // Gentle auto-slide that ping-pongs back and forth; pauses while hovering or touching
  useEffect(() => {
    if (isPaused) return undefined;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setStartIndex((prev) => {
        const current = Math.min(prev, maxStart);
        let next = current + directionRef.current;

        if (next > maxStart) {
          directionRef.current = -1;
          next = Math.max(0, maxStart - 1);
        } else if (next < 0) {
          directionRef.current = 1;
          next = Math.min(maxStart, 1);
        }
        return next;
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, maxStart]);

  // Finger swipe support for phones and tablets
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        stepBy(diff > 0 ? 1 : -1);
      }
      touchStartX.current = null;
    }
    setIsPaused(false);
  };

  // Each step moves the track by exactly one card slot (20% for 5 cards, 33.33% for 3, 100% for 1)
  const translatePct = (clampedStart * 100) / visibleCount;

  return (
    <section className="stories" id="stories" aria-labelledby="stories-title">
      <div className="container-page">
        {/* Top Header + Compact Arrow Controls */}
        <div className="stories__head">
          <div className="stories__head-text">
            <p className="stories__eyebrow">
              <span className="stories__dot" aria-hidden="true" />
              FUNNGRO STORIES
            </p>
            <h2 className="stories__title" id="stories-title">
              Real people.
              <br />
              <span className="stories__highlight">Real payouts.</span>
            </h2>
          </div>

          <div className="stories__aside">
            <p className="stories__lead">
              From a first payout to a first smartphone, young Indians are
              turning free hours into real income with brands they already know.
            </p>
            <div className="stories__head-actions">
              <a
                className="stories__all-link"
                href={storiesUrl}
                onClick={(event) => event.preventDefault()}
              >
                Read every story
                <ArrowUpRight className="size-3.5" />
              </a>

              <div
                className="stories__nav-arrows"
                aria-label="Story carousel controls"
              >
                <button
                  type="button"
                  className="stories__arrow-btn"
                  onClick={() => stepBy(-1)}
                  aria-label="Previous story"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  className="stories__arrow-btn"
                  onClick={() => stepBy(1)}
                  aria-label="Next story"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Card Stepped Pyramid Carousel with Side Arrows */}
        <div
          className="stories__carousel-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="stories__side-arrow stories__side-arrow--left"
            onClick={() => stepBy(-1)}
            aria-label="Previous story"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="stories__viewport">
            <div
              className="stories__slider"
              style={{
                transform: `translate3d(-${translatePct}%, 0, 0)`,
              }}
            >
              {stories.map((story, idx) => {
                // Distance from the center spotlight determines the stepped height:
                // 0 = center (highest), 1 = inner sides (mid), 2 = outer sides (lowest)
                const dist = Math.min(2, Math.abs(idx - centerIndex));
                const tierClass =
                  dist === 0
                    ? " is-center"
                    : dist === 1
                      ? " is-mid"
                      : " is-outer";

                return (
                  <div className="stories__slide" key={story.name}>
                    <article
                      className={`story-card-item${tierClass}`}
                      data-tier={dist}
                      onClick={() => {
                        if (visibleCount > 1) {
                          const offset = Math.floor(visibleCount / 2);
                          const target = Math.min(
                            maxStart,
                            Math.max(0, idx - offset),
                          );
                          setStartIndex(target);
                        }
                      }}
                    >
                      <div className="story-card__photo-box">
                        <img
                          className="story-card__photo"
                          src={story.portrait}
                          alt={story.alt || `Portrait of ${story.name}`}
                          width="320"
                          height="340"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                        <div className="story-card__shade" aria-hidden="true" />
                        <span className="story-card__city-chip">
                          · {story.city.toUpperCase()} ·
                        </span>
                        <span className="story-card__tier-chip">
                          {story.tier}
                        </span>
                      </div>

                      <div className="story-card__content">
                        <div className="story-card__header">
                          <h3 className="story-card__name">
                            {story.name}
                            {story.age ? (
                              <span className="story-card__age">
                                {" "}
                                · {story.age}
                              </span>
                            ) : null}
                          </h3>
                        </div>

                        <blockquote className="story-card__quote">
                          “{story.quote}”
                        </blockquote>

                        <div className="story-card__earnings">
                          <b className="story-card__amount">{story.earned}</b>
                          <span className="story-card__suffix">
                            {story.suffix}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="stories__side-arrow stories__side-arrow--right"
            onClick={() => stepBy(1)}
            aria-label="Next story"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Bottom Call-to-Action Strip */}
        <div className="stories__cta">
          <div className="stories__cta-copy">
            <h3 className="stories__cta-heading">Your story could be next.</h3>
            <p className="stories__cta-sub">
              Join 70 lakh+ young Indians earning on their own terms — with real
              brands and payouts you can track.
            </p>
          </div>
          <a
            className="stories__cta-btn"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start earning free
            <ArrowRight className="size-4" />
          </a>
          <span className="stories__cta-note">
            Free to join · No joining fee
          </span>
        </div>
      </div>
    </section>
  );
}
