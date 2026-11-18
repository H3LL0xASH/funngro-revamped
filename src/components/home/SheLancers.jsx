/**
 * SheLancers — Women-Only Freelancing Community Spotlight
 *
 * Highlights Funngro's dedicated community for young Indian women, pairing a
 * real team photo with four key benefits and direct join/safety links.
 */
import sheLancerTeam from "../../assets/funngro/shelancer-collaborative-800.webp";
import sheLancerTeamSmall from "../../assets/funngro/shelancer-collaborative-500.webp";
import sheLancerTeamLarge from "../../assets/funngro/shelancer-collaborative-1200.webp";
import { shelancerUrl, sheLancerBenefits } from "../../data/siteContent";
import {
  ArrowUpRight,
  Bolt,
  ShieldCheck,
  Sparkle,
  TrendUp,
  Users,
} from "../Icons";
import "../../styles/SheLancers.css";

const benefitIcons = {
  shield: ShieldCheck,
  trend: TrendUp,
  users: Users,
  bolt: Bolt,
};

export default function SheLancers() {
  return (
    <section
      id="shelancers"
      className="shelancers"
      aria-labelledby="shelancers-title"
    >
      <div className="container-page">
        <div className="shelancers__panel">
          <div className="shelancers__media">
            <div className="shelancers__photo">
              <img
                src={sheLancerTeam}
                srcSet={`${sheLancerTeamSmall} 500w, ${sheLancerTeam} 800w, ${sheLancerTeamLarge} 1200w`}
                sizes="(min-width: 900px) 48vw, 100vw"
                width="1536"
                height="1024"
                alt="A collaborative group of young Indian women working together on projects with a Funngro laptop, representing the SheLancer community"
                loading="lazy"
                decoding="async"
              />
              <span className="shelancers__badge">
                <ShieldCheck className="size-4" />
                100% secured
              </span>
              <span className="shelancers__name">
                <b>SheLancer</b>
                <small>Earn. Learn. Lead.</small>
              </span>
            </div>
            <Sparkle className="shelancers__sparkle" aria-hidden="true" />
          </div>

          <div className="shelancers__copy">
            <p className="eyebrow">Funngro SheLancer</p>
            <h2 className="section-title" id="shelancers-title">
              Empowering women to{" "}
              <span className="accent">earn &amp; build.</span>
            </h2>
            <p className="section-copy">
              A dedicated space for women to earn independently — safe,
              flexible and on your own terms. From your first income to
              financial freedom.
            </p>

            <ul className="shelancers__benefits">
              {sheLancerBenefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon] ?? ShieldCheck;
                return (
                  <li key={benefit.title}>
                    <span className="shelancers__benefit-icon" aria-hidden="true">
                      <Icon className="size-[18px]" />
                    </span>
                    <span>
                      <b>{benefit.title}</b>
                      <small>{benefit.copy}</small>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="shelancers__actions">
              <a
                className="btn btn-primary"
                href={shelancerUrl}
                onClick={(event) => event.preventDefault()}
              >
                Join SheLancer
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className="btn btn-outline"
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                Read trust &amp; safety
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
