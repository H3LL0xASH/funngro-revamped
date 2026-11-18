import { contactSalesUrl, partnerUrl } from "../../data/siteContent";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Sparkle,
} from "../Icons";
import "../../styles/BusinessCTA.css";

const highlights = [
  "Campaign, content and survey briefs",
  "A verified community of young earners",
  "Pay only for approved work",
];

export default function BusinessCTA() {
  return (
    <section id="businesses" className="business" aria-labelledby="business-title">
      <div className="container-page">
        <div className="business__card">
          <div className="business__copy">
            <p className="eyebrow business__eyebrow">For brands &amp; businesses</p>
            <h2 className="section-title business__title" id="business-title">
              Meet the next generation of{" "}
              <span className="accent">creators and customers.</span>
            </h2>
            <p>
              Run campaigns, content, referral and survey tasks with 70 lakh+
              young Indians. Share a brief, review real submissions and pay
              only for approved work.
            </p>
            <div className="business__actions">
              <a
                className="btn btn-dark"
                href={partnerUrl}
                onClick={(event) => event.preventDefault()}
              >
                Partner with Funngro
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className="btn business__sales"
                href={contactSalesUrl}
                onClick={(event) => event.preventDefault()}
              >
                Talk to sales
              </a>
            </div>
          </div>

          <aside className="business__aside" aria-label="Why brands work with Funngro">
            <div className="business__stats">
              <div>
                <b>70 Lakh+</b>
                <span>young earners</span>
              </div>
              <div>
                <b>5,000+</b>
                <span>brand partners</span>
              </div>
            </div>

            <ul className="business__list">
              {highlights.map((item) => (
                <li key={item}>
                  <Check className="size-4" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="business__note">
              <BadgeCheck className="size-5" />
              <p>
                <b>Built for real briefs.</b> Set the task, review submissions
                and release payouts from one place.
              </p>
            </div>
          </aside>

          <Sparkle className="business__sparkle" aria-hidden="true" />
          <span className="business__ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
