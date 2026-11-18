/**
 * EarnCategories Component
 *
 * Interactive category explorer showcasing real Funngro work tracks,
 * transparent payout bands, time commitments, and verified brand partners.
 */
import { useState } from "react";
import { earnCategories } from "../../data/earnContent";
import { appStoreUrl } from "../../data/siteContent";
import {
  ArrowUpRight,
  Megaphone,
  ShieldCheck,
  Users,
  Video,
} from "../Icons";

const categoryIcons = {
  megaphone: Megaphone,
  video: Video,
  users: Users,
  shield: ShieldCheck,
};

const filterTabs = ["All", "Promotion", "Content", "Referrals", "Surveys"];

export default function EarnCategories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCategories =
    activeFilter === "All"
      ? earnCategories
      : earnCategories.filter((cat) => cat.filter === activeFilter);

  return (
    <section
      id="earn-categories"
      className="earn-section earn-section--mist"
      aria-labelledby="earn-categories-title"
    >
      <div className="container-page">
        <div className="earn-head earn-reveal">
          <div>
            <p className="eyebrow">Real work · Real pay bands</p>
            <h2 className="section-title" id="earn-categories-title">
              Pick the work that fits{" "}
              <span className="accent">your skills &amp; schedule.</span>
            </h2>
          </div>

          <div
            className="earn-filters"
            role="tablist"
            aria-label="Filter earning categories"
          >
            {filterTabs.map((tab) => {
              const isSelected = tab === activeFilter;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`earn-filter-pill${isSelected ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="earn-cat-grid">
          {visibleCategories.map((category) => {
            const Icon = categoryIcons[category.icon] ?? Megaphone;
            return (
              <article
                key={category.id}
                className="earn-cat-card earn-reveal"
              >
                <div className="earn-cat-card__top">
                  <span className="earn-cat-card__icon" aria-hidden="true">
                    <Icon className="size-5" />
                  </span>
                  <span className="earn-cat-card__level">{category.level}</span>
                </div>

                <h3 className="earn-cat-card__title">{category.title}</h3>
                <p className="earn-cat-card__payout">{category.payout}</p>
                <p className="earn-cat-card__desc">{category.description}</p>

                <div className="earn-cat-card__brands" aria-label="Sample brands">
                  {category.brands.map((brand) => (
                    <span className="earn-brand-tag" key={brand}>
                      {brand}
                    </span>
                  ))}
                  <span className="earn-time-tag">{category.time}</span>
                </div>

                <a
                  className="earn-cat-card__link"
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start in Funngro app
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
