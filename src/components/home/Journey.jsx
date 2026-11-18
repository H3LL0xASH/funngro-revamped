/**
 * Journey Component ("Our Story")
 *
 * Presents Funngro's growth milestones along a straight vertical center
 * timeline with balanced left/right cards (eliminating empty voids next to the
 * expanded DEC 2022 Shark Tank India Season 2 inline video proof).
 */
import { useState } from "react";
import { aboutUrl, journeyFacts, journeyMilestones } from "../../data/siteContent";
import sharkTankThumb from "../../assets/funngro/sharktank-thumb-CRRYxI2z.jpg";
import {
  ArrowUpRight,
  Crown,
  Rocket,
  TrendUp,
  Tv,
  Users,
} from "../Icons";
import "../../styles/Journey.css";

const milestoneIcons = {
  rocket: Rocket,
  tv: Tv,
  users: Users,
  trend: TrendUp,
  crown: Crown,
};

export default function Journey() {
  const [isPlayingSharkTank, setIsPlayingSharkTank] = useState(false);

  return (
    <section className="journey" id="about" aria-labelledby="journey-title">
      <div className="container-page journey__inner">
        {/* Section Header: Left Story Copy + Right Stat Card */}
        <div className="journey__head home-reveal">
          <div className="journey__intro">
            <p className="journey__eyebrow">
              <span className="journey__dot" aria-hidden="true" />
              OUR STORY
            </p>
            <h2 className="journey__title" id="journey-title">
              From one MVP to
              <br />
              <span className="journey__highlight">70 lakh earners.</span>
            </h2>
            <p className="journey__lead">
              Funngro began with two founders, an MVP and zero paid marketing.
              Today, 70 lakh+ young Indians have earned with 5,000+ brands — and
              the business is profitable.
            </p>
            <a
              className="journey__link"
              href={aboutUrl}
              onClick={(event) => event.preventDefault()}
            >
              Read the full story
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Top Right Dark Green Fact Card */}
          <aside className="journey__facts-card" aria-label="Funngro at a glance">
            <div className="journey__facts-lead">
              <span className="journey__facts-badge" aria-hidden="true">
                <ArrowUpRight className="size-4" />
              </span>
              <div className="journey__facts-stat">
                <b className="journey__facts-val">70 Lakh+</b>
                <span className="journey__facts-sub">young Indians earning</span>
              </div>
            </div>

            <div className="journey__facts-divider" aria-hidden="true" />

            <dl className="journey__facts-table">
              {journeyFacts.map((fact) => (
                <div className="journey__facts-row" key={fact.label}>
                  <dt className="journey__facts-label">
                    {fact.label.toUpperCase()}
                  </dt>
                  <dd className="journey__facts-value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Straight Center Timeline with Balanced Left & Right Milestone Cards */}
        <div
          className="journey__stage"
          role="region"
          aria-label="Company timeline"
        >
          {/* Straight Vertical Center Spine (Desktop) */}
          <div className="journey__axis" aria-hidden="true" />

          {/* 5 Milestones in strict chronological DOM order, balanced L/R on desktop */}
          <ol className="journey__steps" aria-label="Funngro milestones">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestoneIcons[milestone.icon] || Rocket;
              // Left column: all 4 compact milestones (FY22, 2023, Q4 FY25, FY26)
              // Right column: the featured DEC 2022 Shark Tank video card
              const isRightSide = index === 1;
              const isSharkTank = milestone.when === "DEC 2022";

              return (
                <li
                  className={`journey__step journey__step--${
                    isRightSide ? "right" : "left"
                  } journey__step--${index + 1} home-reveal`}
                  key={milestone.when}
                >
                  {/* Left Side Pill Layout: Icon -> Content -> Tag */}
                  {!isRightSide && (
                    <article className="journey-pill journey-pill--left">
                      <div className="journey-pill__icon-wrap" aria-hidden="true">
                        <Icon className="size-5" />
                      </div>
                      <div className="journey-pill__body">
                        <h3 className="journey-pill__title">{milestone.title}</h3>
                        <p className="journey-pill__copy">{milestone.body}</p>
                      </div>
                      <div className="journey-pill__tag-wrap">
                        <span className="journey-pill__tag">{milestone.when}</span>
                      </div>
                    </article>
                  )}

                  {/* Standard Right Side Pill (Q4 FY25) */}
                  {isRightSide && !isSharkTank && (
                    <article className="journey-pill journey-pill--right">
                      <div className="journey-pill__tag-wrap">
                        <span className="journey-pill__tag">{milestone.when}</span>
                      </div>
                      <div className="journey-pill__icon-wrap" aria-hidden="true">
                        <Icon className="size-5" />
                      </div>
                      <div className="journey-pill__body">
                        <h3 className="journey-pill__title">{milestone.title}</h3>
                        <p className="journey-pill__copy">{milestone.body}</p>
                      </div>
                    </article>
                  )}

                  {/* DEC 2022 Milestone Card with Shark Tank India Video Proof */}
                  {isSharkTank && (
                    <article className="journey-pill journey-pill--right journey-pill--video">
                      <div className="journey-pill__video-header">
                        <div className="journey-pill__tag-wrap">
                          <span className="journey-pill__tag">{milestone.when}</span>
                        </div>
                        <div className="journey-pill__icon-wrap" aria-hidden="true">
                          <Icon className="size-5" />
                        </div>
                        <div className="journey-pill__body">
                          <h3 className="journey-pill__title">{milestone.title}</h3>
                          <p className="journey-pill__copy">{milestone.body}</p>
                        </div>
                      </div>

                      {/* Shark Tank Episode Proof Card */}
                      <div className="journey-proof">
                        <div className="journey-proof__media">
                          {isPlayingSharkTank ? (
                            <div className="journey-proof__player">
                              <iframe
                                className="journey-proof__iframe"
                                src="https://www.youtube-nocookie.com/embed/sGysgwm02YY?autoplay=1&rel=0"
                                title="Funngro on Shark Tank India Season 2 — Full Pitch"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                              <button
                                type="button"
                                className="journey-proof__close-btn"
                                onClick={() => setIsPlayingSharkTank(false)}
                                aria-label="Close video"
                              >
                                ✕ Close
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="journey-proof__thumb-btn"
                              onClick={() => setIsPlayingSharkTank(true)}
                              aria-label="Play Funngro Shark Tank India full pitch"
                            >
                              <img
                                src={sharkTankThumb}
                                alt="Funngro founders on Shark Tank India Season 2 — Full Pitch"
                                className="journey-proof__img"
                                width="640"
                                height="360"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="journey-proof__overlay" aria-hidden="true" />

                              {/* Top Badges */}
                              <span className="journey-proof__badge journey-proof__badge--top-left">
                                🦈 EPISODE CLIP
                              </span>
                              <span className="journey-proof__badge journey-proof__badge--top-right">
                                SET INDIA · SONY LIV
                              </span>

                              {/* Glowing Play Button */}
                              <div className="journey-proof__play-circle" aria-hidden="true">
                                <svg
                                  className="journey-proof__play-icon"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <polygon points="7,4 20,12 7,20" />
                                </svg>
                              </div>

                              {/* Bottom Duration Badge */}
                              <span className="journey-proof__badge journey-proof__badge--bottom-left">
                                THE PITCH · 9:42
                              </span>
                            </button>
                          )}
                        </div>

                        {/* Caption Bar */}
                        <div className="journey-proof__footer">
                          <span className="journey-proof__caption-text">
                            INVESTMENT FROM AMIT JAIN · SUCSEED · ANCHOR EPISODE OF SEASON 2
                          </span>
                          <a
                            className="journey-proof__yt-link"
                            href="https://www.youtube.com/watch?v=sGysgwm02YY"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            YouTube ↗
                          </a>
                        </div>
                      </div>
                    </article>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
