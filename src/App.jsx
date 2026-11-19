import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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

const EarnPage = lazy(() => import("./pages/EarnPage.jsx"));

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

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
  );
  const [routeLoading, setRouteLoading] = useState(false);
  const homeRef = useRef(null);
  const routeTimerRef = useRef(null);
  const isEarnRoute = pathname === "/earn";

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

  useScrollReveal(
    homeRef,
    ".brands-head, .brands-showcase, .brands-stats-banner, .shelancers__panel, .stories__head, .stories__carousel-wrap, .journey__head, .journey__step, .business__card, .faq__intro, .faq__list",
    isEarnRoute ? "earn" : "home",
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getNormalizedPath());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const desc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');

    if (isEarnRoute) {
      document.title = "Earn Online with Real Brands — Funngro";
      const earnUrl = "https://funngro-revamped.vercel.app/earn";
      const earnDesc =
        "Explore live projects, freelancing opportunities, paid brand campaigns, and learning resources for teens on Funngro. Start earning safely today.";
      if (canonical) canonical.setAttribute("href", earnUrl);
      if (ogUrl) ogUrl.setAttribute("content", earnUrl);
      if (desc) desc.setAttribute("content", earnDesc);
      if (ogTitle) ogTitle.setAttribute("content", "Earn Online with Real Brands — Funngro");
      if (ogDesc) ogDesc.setAttribute("content", earnDesc);
    } else {
      document.title = "Funngro — Earn Online with India's Biggest Brands";
      const homeUrl = "https://funngro-revamped.vercel.app/";
      const homeDesc =
        "Join 70 lakh+ young Indians earning with Funngro. Find paid brand campaigns, content tasks, referrals and surveys. Free to join, verified brands and UPI payouts.";
      if (canonical) canonical.setAttribute("href", homeUrl);
      if (ogUrl) ogUrl.setAttribute("content", homeUrl);
      if (desc) desc.setAttribute("content", homeDesc);
      if (ogTitle) ogTitle.setAttribute("content", "Funngro — Earn Online with India's Biggest Brands");
      if (ogDesc) ogDesc.setAttribute("content", homeDesc);
    }
  }, [isEarnRoute]);

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

      {splashState !== "hidden" ? (
        <PageLoader
          variant="splash"
          exiting={splashState === "exiting"}
          label={isEarnRoute ? "Preparing your earn guide…" : "Loading opportunities…"}
        />
      ) : null}

      <RouteProgressBar active={routeLoading} />

      <Nav currentPath={pathname} onNavigate={navigate} />

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

      <Footer onNavigate={navigate} />

      <Analytics />
      <SpeedInsights />
    </>
  );
}
