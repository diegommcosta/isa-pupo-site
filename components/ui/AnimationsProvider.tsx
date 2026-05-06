"use client";

import { useEffect } from "react";

export default function AnimationsProvider() {
  useEffect(() => {
    let killed = false;

    (async () => {
      // Respect user's motion preference — skip all GSAP if reduced-motion is set
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;

      gsap.registerPlugin(ScrollTrigger);

      const isMobile = window.innerWidth < 768;
      const triggerStart = isMobile ? "top 95%" : "top 85%";

      // Fade-in + slide-up for each section marked with data-animate
      document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: triggerStart,
              once: true,
            },
          }
        );
      });

      // Staggered fade-in for grid children marked with data-animate-stagger
      document.querySelectorAll<HTMLElement>("[data-animate-stagger]").forEach((grid) => {
        const children = Array.from(grid.children) as HTMLElement[];
        if (!children.length) return;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: triggerStart,
              once: true,
            },
          }
        );
      });

      // Images slide in from their visual side — never animate background colors
      document.querySelectorAll<HTMLElement>("[data-animate-image]").forEach((el) => {
        const fromX = el.dataset.animateImage === "left" ? -60 : 60;
        gsap.fromTo(
          el,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: triggerStart,
              once: true,
            },
          }
        );
      });

      // Tags slide in from left
      document.querySelectorAll<HTMLElement>("[data-animate-tag]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: triggerStart,
              once: true,
            },
          }
        );
      });
    })();

    return () => {
      killed = true;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return null;
}
