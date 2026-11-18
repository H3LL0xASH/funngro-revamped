/**
 * EarnProgression Component
 *
 * Full-width connected 7-step growth roadmap filling the grid evenly
 * (4-column top flow + 3-column scaled finish + direct CTA card) with
 * smooth connector arrows and clean borderless tonal tiles.
 */
import { earnProgressionSteps } from "../../data/earnContent";
import { appStoreUrl } from "../../data/siteContent";
import { ArrowRight } from "../Icons";

export default function EarnProgression() {
  return (
    <section
      id="earn-progression"
      className="earn-section"
      aria-labelledby="earn-progression-title"
    >
      <div className="container-page">
        <div className="earn-head earn-reveal">
          <div>
            <p className="eyebrow">Your 7-step growth path</p>
            <h2 className="section-title" id="earn-progression-title">
              From first task to{" "}
              <span className="accent">leading a Clan.</span>
            </h2>
          </div>
          <p className="section-copy">
            Every approved submission boosts your GroScore and unlocks the next
            level automatically.
          </p>
        </div>

        {/* Full-Width Filled 4×2 Connected Bento Track (7 Steps + Start CTA Tile) */}
        <ol className="earn-roadmap-grid">
          {earnProgressionSteps.map((item, idx) => (
            <li key={item.step} className="earn-roadmap-tile earn-reveal">
              <div className="earn-roadmap-tile__head">
                <span className="earn-roadmap-tile__num">{item.step}</span>
                <span className="earn-roadmap-tile__tag">{item.tag}</span>
                {idx < earnProgressionSteps.length - 1 && (
                  <span className="earn-roadmap-tile__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <p className="earn-roadmap-tile__text">{item.text}</p>
            </li>
          ))}

          {/* 8th Balanced Slot: Direct Launch Tile so the 4×2 grid feels full & connected */}
          <li className="earn-roadmap-tile earn-roadmap-tile--cta earn-reveal">
            <span className="earn-roadmap-tile__eyebrow">Ready to begin?</span>
            <h3>Start at Step 01 today.</h3>
            <a
              className="earn-roadmap-tile__btn"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Funngro Free
              <ArrowRight className="size-4" />
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
