/**
 * useScrollReveal — Smooth, lightweight fade-up when sections enter the screen
 *
 * Why we use IntersectionObserver instead of GSAP here:
 * The browser natively watches when elements appear on screen without running
 * JavaScript on every scroll pixel. That keeps scrolling buttery smooth and
 * prevents lag when things like FAQs expand or collapse below.
 */
import { useEffect } from "react";

export default function useScrollReveal(containerRef, selector, depKey) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll(selector));
    if (!elements.length) return undefined;

    // If the user prefers reduced motion, show everything right away with no fade
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => {
        el.classList.add("is-visible");
      });
      return undefined;
    }

    // Mark each target as ready to reveal, then let the browser watch it
    elements.forEach((el) => {
      el.classList.add("reveal-ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop watching once revealed so it never re-triggers or wastes CPU
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.04,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, selector, depKey]);
}
