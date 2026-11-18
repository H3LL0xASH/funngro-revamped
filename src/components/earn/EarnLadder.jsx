/**
 * EarnLadder Component
 *
 * Connected 3-stage Income & Influence Ladder flowing seamlessly into an
 * interactive Monthly Earnings Estimator (no heavy boxed borders).
 */
import { useState } from "react";
import { earnStages } from "../../data/earnContent";
import { appStoreUrl } from "../../data/siteContent";
import { ArrowRight, Check, Sparkle } from "../Icons";

export default function EarnLadder() {
  const [selectedStageId, setSelectedStageId] = useState("grower");
  const [weeklyHours, setWeeklyHours] = useState(6);

  const selectedStage =
    earnStages.find((s) => s.id === selectedStageId) ?? earnStages[1];

  const estimatedLow =
    Math.round((selectedStage.basePerHour * weeklyHours * 3.2) / 100) * 100;
  const estimatedHigh =
    Math.round((selectedStage.basePerHour * weeklyHours * 4.6) / 100) * 100;

  return (
    <section
      id="earn-ladder"
      className="earn-section earn-section--mist"
      aria-labelledby="earn-ladder-title"
    >
      <div className="container-page">
        <div className="earn-head earn-reveal">
          <div>
            <p className="eyebrow">Income &amp; influence ladder</p>
            <h2 className="section-title" id="earn-ladder-title">
              From <span className="accent">first gigs</span> to running your
              own squad.
            </h2>
          </div>
          <p className="section-copy">
            Click any stage below to preview your monthly range and unlock path.
          </p>
        </div>

        {/* Connected 3-Stage Track */}
        <div className="earn-ladder-track">
          <div className="earn-ladder-line" aria-hidden="true" />

          {earnStages.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <article
                key={stage.id}
                className={`earn-stage-card earn-reveal${
                  stage.popular ? " earn-stage-card--featured" : ""
                }${isSelected ? " is-selected" : ""}`}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <div className="earn-stage-card__head">
                  <span className="earn-stage-card__tag">{stage.stage}</span>
                  {stage.popular && (
                    <span className="earn-stage-card__badge">
                      <Sparkle className="size-3.5" />
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="earn-stage-card__title">{stage.title}</h3>
                <p className="earn-stage-card__range">{stage.range}</p>
                <p className="earn-stage-card__body">{stage.body}</p>

                <ul className="earn-stage-card__perks">
                  {stage.perks.map((perk) => (
                    <li key={perk}>
                      <Check className="size-4 shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Unified Interactive Monthly Estimator */}
        <div className="earn-estimator earn-reveal">
          <div className="earn-estimator__controls">
            <p className="earn-estimator__eyebrow">Monthly Estimator</p>
            <h3 className="earn-estimator__title">
              <span className="accent">{weeklyHours} hrs/week</span> as a{" "}
              {selectedStage.roleLabel}
            </h3>

            <div
              className="earn-estimator__stage-pills"
              role="group"
              aria-label="Choose stage"
            >
              {earnStages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  className={`earn-stage-btn${
                    stage.id === selectedStageId ? " is-active" : ""
                  }`}
                  onClick={() => setSelectedStageId(stage.id)}
                  aria-pressed={stage.id === selectedStageId}
                >
                  {stage.title}
                </button>
              ))}
            </div>

            <label className="earn-slider-label" htmlFor="earn-hours-slider">
              <span>Weekly spare time</span>
              <strong>{weeklyHours} hrs / week</strong>
            </label>
            <input
              id="earn-hours-slider"
              className="earn-slider"
              type="range"
              min="2"
              max="16"
              step="1"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
            />
            <div className="earn-slider-marks" aria-hidden="true">
              <span>2 hrs</span>
              <span>8 hrs</span>
              <span>16 hrs</span>
            </div>
          </div>

          <div className="earn-estimator__result">
            <span className="earn-estimator__result-label">
              Illustrative Monthly Range
            </span>
            <strong className="earn-estimator__result-val">
              ₹{estimatedLow.toLocaleString("en-IN")} – ₹
              {estimatedHigh.toLocaleString("en-IN")}
            </strong>
            <p className="earn-estimator__benchmark">
              FY26 benchmark: Avg active user ₹4,100/mo · Top 5% ₹18,000+/mo.
            </p>
            <a
              className="btn btn-lime"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Stage 01 Free
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
