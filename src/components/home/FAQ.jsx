import { useState } from "react";
import { faqs } from "../../data/siteContent";
import { ArrowUpRight, BadgeCheck, ChevronRight } from "../Icons";
import "../../styles/FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container-page faq__inner">
        <div className="faq__intro home-reveal">
          <p className="eyebrow">The details, made clear</p>
          <h2 className="section-title" id="faq-title">
            Good questions.{" "}
            <span className="accent">Honest answers.</span>
          </h2>
          <p className="section-copy">
            Everything young earners and parents ask before getting started —
            and what brands want to know before their first campaign.
          </p>

          <div className="faq__support">
            <span className="faq__support-icon" aria-hidden="true">
              <BadgeCheck className="size-5" />
            </span>
            <div>
              <b>Still have a question?</b>
              <p>
                Our team can help with accounts, payouts and safety. Write to{" "}
                <a href="mailto:teenlancer@funngro.com">teenlancer@funngro.com</a>.
              </p>
              <a
                className="text-link"
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                Read the full FAQ
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const btnId = `home-faq-btn-${index}`;
            const panelId = `home-faq-panel-${index}`;

            return (
              <div
                className={`faq-item home-reveal${isOpen ? " is-open" : ""}`}
                key={item.question}
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
    </section>
  );
}
