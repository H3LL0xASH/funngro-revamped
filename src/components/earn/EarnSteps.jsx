/**
 * EarnSteps Component
 *
 * Connected 5-step vertical timeline with a continuous glowing emerald spine
 * and borderless tonal surfaces linking Download → Pick → Submit → UPI → Scale.
 */
import { earnFiveSteps } from "../../data/earnContent";
import { Check } from "../Icons";

export default function EarnSteps() {
  return (
    <section
      id="earn-steps"
      className="earn-section"
      aria-labelledby="earn-steps-title"
    >
      <div className="container-page">
        <div className="earn-head earn-reveal">
          <div>
            <p className="eyebrow">How earning works</p>
            <h2 className="section-title" id="earn-steps-title">
              Five steps to your{" "}
              <span className="accent">first UPI payout.</span>
            </h2>
          </div>
          <p className="section-copy">
            Clear briefs, quick verification, and direct UPI payouts — every
            step flows right inside one app.
          </p>
        </div>

        {/* Continuous Connected Timeline */}
        <ol className="earn-timeline">
          {earnFiveSteps.map((step) => (
            <li key={step.number} className="earn-timeline__item earn-reveal">
              {/* Glowing Node on Continuous Spine */}
              <div className="earn-timeline__node" aria-hidden="true">
                <span>{step.number}</span>
              </div>

              {/* Clean Borderless Step Row */}
              <div className="earn-timeline__panel">
                <div className="earn-timeline__copy">
                  <span className="earn-timeline__kicker">{step.kicker}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>

                <ul className="earn-timeline__chips" aria-label="Key details">
                  {step.chips.map((chip) => (
                    <li key={chip}>
                      <Check className="size-3.5 shrink-0" />
                      <span>{chip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
