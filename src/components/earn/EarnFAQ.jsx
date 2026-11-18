/**
 * EarnFAQ Component
 *
 * Clean, concise /earn FAQ accordion (all closed initially with smooth
 * expand/collapse animation) flowing into the signature lime conversion banner.
 */
import { useState } from "react";
import { earnFaqs } from "../../data/earnContent";
import { appleStoreUrl, appStoreUrl } from "../../data/siteContent";
import {
  Apple,
  ArrowLeft,
  BadgeCheck,
  ChevronRight,
  GooglePlay,
} from "../Icons";

export default function EarnFAQ({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="earn-faq"
      className="earn-section earn-section--mist"
      aria-labelledby="earn-faq-title"
    >
      <div className="container-page">
        <div className="earn-faq__grid">
          <div className="earn-faq__intro earn-reveal">
            <p className="eyebrow">Common questions</p>
            <h2 className="section-title" id="earn-faq-title">
              Earning online, <span className="accent">answered.</span>
            </h2>
            <p className="section-copy">
              Quick, honest answers on fees, work types, and UPI payouts.
            </p>

            <div className="earn-faq__trust-box">
              <span className="earn-faq__trust-icon" aria-hidden="true">
                <BadgeCheck className="size-5" />
              </span>
              <div>
                <b>100% Free for Young Earners</b>
                <p>Zero joining, application, or UPI withdrawal fees.</p>
              </div>
            </div>
          </div>

          <div className="earn-faq__list earn-reveal">
            {earnFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              const btnId = `earn-faq-btn-${index}`;
              const panelId = `earn-faq-panel-${index}`;

              return (
                <div
                  key={item.question}
                  className={`earn-faq-item${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    id={btnId}
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="faq-item__collapse"
                  >
                    <div className="faq-item__answer">
                      <div className="faq-item__answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Signature Lime CTA Banner */}
        <div className="earn-bottom-cta earn-reveal">
          <div className="earn-bottom-cta__copy">
            <span className="earn-bottom-cta__eyebrow">
              Free to join · Zero investment
            </span>
            <h2>Ready for your first UPI payout in 24 hours?</h2>
            <p>
              Join 70 Lakh+ young Indians completing real briefs for 5,000+
              brands.
            </p>
          </div>

          <div className="earn-bottom-cta__actions">
            <a
              className="btn btn-dark"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlay className="size-4" />
              Google Play
            </a>
            <a
              className="btn btn-dark"
              href={appleStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Apple className="size-4" />
              App Store
            </a>
            <a
              className="earn-bottom-cta__back"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/");
              }}
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
