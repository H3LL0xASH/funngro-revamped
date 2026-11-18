/**
 * Nav — Sticky Top Navigation Bar
 *
 * Stays pinned at the top of both `/` and `/earn` and gently trims its height
 * once you start scrolling. Includes the official Funngro logo, navigation
 * links, Sign Up CTA, a Light/Green-Dark theme button (kept right in the bar
 * on phones too — never hidden inside the menu), and a mobile slide-down menu.
 */
import { useEffect, useState } from "react";
import { appStoreUrl, navLinks } from "../data/siteContent";
import { ArrowUpRight, Close, Menu, Moon, Sun } from "./Icons";
import Logo from "./Logo";
import "../styles/Nav.css";

const THEME_STORAGE_KEY = "funngro-theme";

/** Read initial theme safely from DOM attribute or localStorage */
function getInitialTheme() {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.dataset.theme;
  if (attr === "dark" || attr === "light") return attr;
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // Ignore storage access restrictions
  }
  return "light";
}

export default function Nav({ currentPath = "/", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  // Subtle navbar shrink on page scroll (passive listener only — avoids initial mount reflow)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Synchronize theme attribute, storage, and mobile browser chrome color
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access restrictions
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", isDark ? "#0c2317" : "#fffdf6");
    }
  }, [theme, isDark]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const handleNavClick = (event, href) => {
    setMenuOpen(false);
    if (!onNavigate) return;
    if (href.startsWith("/")) {
      event.preventDefault();
      onNavigate(href);
    }
  };

  const normalizedPath = currentPath.replace(/\/+$/, "") || "/";

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="container-page nav-shell" aria-label="Main navigation">
        {/* Adaptive Funngro Brand Wordmark */}
        <Logo light={isDark} onNavigate={onNavigate} />

        {/* Navigation Links & Account Actions (Drawer on Mobile, Inline on Desktop) */}
        <div
          id="primary-navigation"
          className={`nav-panel${menuOpen ? " is-open" : ""}`}
        >
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && normalizedPath === "/") ||
                (link.href === "/earn" && normalizedPath === "/earn");
              return (
                <li key={link.label}>
                  <a
                    className={`nav-link${isActive ? " is-active" : ""}`}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) => handleNavClick(event, link.href)}
                  >
                    {link.label}
                    {link.starred ? (
                      <span className="nav-link__star" aria-hidden="true">
                        *
                      </span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <a
              className="nav-login"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Log in
            </a>
            <a
              className="btn btn-dark btn-small nav-signup"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Free
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Persistent Top-Bar Controls: Theme Switcher (Always Visible) + Mobile Menu Button */}
        <div className="nav-controls">
          <button
            className={`theme-toggle${isDark ? " is-dark" : ""}`}
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light cream theme"
                : "Switch to greenish dark theme"
            }
            aria-pressed={isDark}
            title={isDark ? "Switch to Light Mode" : "Switch to Forest Mode"}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {isDark ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </span>
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
