import {
  appleStoreUrl,
  appStoreUrl,
  footerColumns,
  socialLinks,
} from "../data/siteContent";
import {
  Apple,
  BadgeCheck,
  Facebook,
  GitHub,
  GooglePlay,
  Instagram,
  LinkedIn,
  Mail,
  XSocial,
  YouTube,
} from "./Icons";
import Logo from "./Logo";
import "../styles/Footer.css";

const socialIcons = {
  instagram: Instagram,
  linkedin: LinkedIn,
  youtube: YouTube,
  x: XSocial,
  facebook: Facebook,
};

const currentYear = new Date().getFullYear();

export default function Footer({ onNavigate }) {
  const handleInternalLink = (event, link) => {
    if (link.href === "#") {
      event.preventDefault();
      return;
    }
    if (!onNavigate || link.external || !link.href.startsWith("/")) return;
    event.preventDefault();
    onNavigate(link.href);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container-page">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo light onNavigate={onNavigate} />
            <p>
              India&apos;s youth, India&apos;s brands. Get paid in UPI or bank
              transfer for the work you actually want to do.
            </p>

            <div className="site-footer__apps">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Funngro on Google Play"
              >
                <GooglePlay className="size-4" />
                Google Play
              </a>
              <a
                href={appleStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Funngro on the App Store"
              >
                <Apple className="size-4" />
                App Store
              </a>
            </div>

            <ul className="site-footer__social">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon] ?? Instagram;
                const isBlank = !href || href === "#";
                return (
                  <li key={label}>
                    <a
                      href={isBlank ? "#" : href}
                      onClick={isBlank ? (e) => e.preventDefault() : undefined}
                      aria-label={label}
                      {...(!isBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="site-footer__columns" aria-label="Footer navigation">
            {footerColumns.map((column) => (
              <div className="site-footer__column" key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(event) => handleInternalLink(event, link)}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} Funngro. Made in India.</p>
          <div className="site-footer__center">
            <span className="site-footer__note">
              <BadgeCheck className="size-3.5" />
              BACKED BY SUCSEED INDOVATION
            </span>
            <div className="site-footer__dev">
              <span>DESIGNED BY</span>
              <a
                href="https://github.com/H3LL0xASH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Developer GitHub profile"
                title="GitHub — H3LL0xASH"
              >
                <GitHub className="size-3.5" />
              </a>
              <a
                href="mailto:ashx111@proton.me"
                aria-label="Email developer at ashx111@proton.me"
                title="ashx111@proton.me"
              >
                <Mail className="size-3.5" />
              </a>
            </div>
          </div>
          <div className="site-footer__legal">
            <a
              href="https://www.youtube-nocookie.com/embed/sGysgwm02YY?autoplay=1&rel=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              FEATURED IN. SHARK TANK INDIA S2
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
