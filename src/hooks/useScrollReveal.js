import { useEffect } from "react";

export default function useScrollReveal(containerRef, selector, depKey) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll(selector));
    if (!elements.length) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => {
        el.classList.add("is-visible");
      });
      return undefined;
    }

    elements.forEach((el) => {
      el.classList.add("reveal-ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
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
