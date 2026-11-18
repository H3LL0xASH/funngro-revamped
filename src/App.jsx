/**
 * App.jsx — Main website wrapper & simple page switcher
 *
 * This file decides which page to show based on the URL:
 * - `/`     -> Main Funngro landing page
 * - `/earn` -> Dedicated Earn guide page
 *
 * It also handles clicking links like `/#stories` from `/earn` so the browser
 * switches back to Home and glides smoothly to that section.
 */

import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Analytics } from "@vercel/analytics/react";
import useScrollReveal from "./hooks/useScrollReveal.js";
import Nav from "./components/Nav.jsx";
import { PageLoader, RouteProgressBar } from "./components/Loader.jsx";
import Hero from "./components/home/Hero.jsx";
import BrandsStrip from "./components/home/BrandsStrip.jsx";
import HowItWorks from "./components/home/HowItWorks.jsx";
import SheLancers from "./components/home/SheLancers.jsx";
import AppShowcase from "./components/home/AppShowcase.jsx";
import Stories from "./components/home/Stories.jsx";
import Journey from "./components/home/Journey.jsx";
import BusinessCTA from "./components/home/BusinessCTA.jsx";
import FAQ from "./components/home/FAQ.jsx";
import Footer from "./components/Footer.jsx";

// Split `/earn` into its own bundle so the Home page downloads less JavaScript
const EarnPage = lazy(() => import("./pages/EarnPage.jsx"));

gsap.registerPlugin(ScrollTrigger);
// Stop mobile address-bar show/hide from forcing expensive GSAP recalculations
ScrollTrigger.config({ ignoreMobileResize: true });

// Clean up trailing slashes so `/earn/` and `/earn` behave identically
function getNormalizedPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export default function App() {
  const [pathname, setPathname] = useState(getNormalizedPath);
  const [splashState, setSplashState] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "hidden"
      : "visible",
  ); // "visible" -> "exiting" -> "hidden"
  const [routeLoading, setRouteLoading] = useState(false);
  const homeRef = useRef(null);
  const routeTimerRef = useRef(null);
  const isEarnRoute = pathname === "/earn";

  // Show a crisp, brief Funngro boot loader until the page finishes painting, then unmount cleanly
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let exitTimer;
    let hideTimer;

    const finishSplash = () => {
      exitTimer = setTimeout(() => {
        setSplashState("exiting");
        hideTimer = setTimeout(() => {
          setSplashState("hidden");
        }, 320);
      }, 360);
    };

    if (document.readyState === "complete") {
      finishSplash();
    } else {
      window.addEventListener("load", finishSplash, { once: true });
    }

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      clearTimeout(routeTimerRef.current);
      window.removeEventListener("load", finishSplash);
    };
  }, []);

  // Gently fade in non-pinned Home sections as the visitor scrolls down.
  // We intentionally leave pinned GSAP sections (HowItWorks & AppShowcase) untouched.
  useScrollReveal(
    homeRef,
    ".brands-head, .brands-showcase, .brands-stats-banner, .shelancers__panel, .stories__head, .stories__carousel-wrap, .journey__head, .journey__step, .business__card, .faq__intro, .faq__list",
    isEarnRoute ? "earn" : "home",
  );

  // Listen for browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPathname(getNormalizedPath());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Keep the browser tab title accurate for each page
  useEffect(() => {
    if (isEarnRoute) {
      document.title = "Earn Online with Real Brands — Funngro";
    } else {
      document.title = "Funngro — Earn Online with India's Biggest Brands";
    }
  }, [isEarnRoute]);

  // Smoothly switch between `/`, `/earn`, and in-page anchors like `/#faq`
  const navigate = useCallback((to) => {
    const [rawPath, hash] = to.split("#");
    const targetPath = (rawPath || "/").replace(/\/+$/, "") || "/";
    const current = getNormalizedPath();

    if (targetPath !== current || hash) {
      const nextUrl = hash
        ? `${targetPath === "/" ? "" : targetPath}#${hash}`
        : targetPath;
      window.history.pushState({}, "", nextUrl || "/");
    }

    if (targetPath !== current) {
      // Flash the sleek top lime-emerald progress bar when switching between `/` and `/earn`
      setRouteLoading(true);
      clearTimeout(routeTimerRef.current);
      routeTimerRef.current = setTimeout(() => {
        setRouteLoading(false);
      }, 480);

      setPathname(targetPath);
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }

    if (hash) {
      // Give React a tiny moment to render the new page before scrolling to the section
      const delay = targetPath !== current ? 140 : 0;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, delay);
    } else if (targetPath === current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Quick branded splash loader on first visit (unmounts right after fade-out) */}
      {splashState !== "hidden" ? (
        <PageLoader
          variant="splash"
          exiting={splashState === "exiting"}
          label={isEarnRoute ? "Preparing your earn guide…" : "Loading opportunities…"}
        />
      ) : null}

      {/* Sleek top progress bar during `/` <-> `/earn` transitions */}
      <RouteProgressBar active={routeLoading} />

      {/* Sticky Top Header (shrinks subtly on scroll) */}
      <Nav currentPath={pathname} onNavigate={navigate} />

      {/* Main Page Area */}
      <main id="main-content">
        {isEarnRoute ? (
          <Suspense
            fallback={<PageLoader variant="inline" label="Loading Earn guide…" />}
          >
            <EarnPage onNavigate={navigate} />
          </Suspense>
        ) : (
          <div className="home-page" ref={homeRef}>
            <Hero />
            <BrandsStrip />
            <HowItWorks />
            <SheLancers />
            <AppShowcase />
            <Stories />
            <Journey />
            <BusinessCTA />
            <FAQ />
          </div>
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigate} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  );
}
