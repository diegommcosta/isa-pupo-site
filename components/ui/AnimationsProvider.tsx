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

      // Staggered fade-in for grid children marked with data-animate-stagger.
      // Default direction is up (y:30); pass data-animate-stagger="left" to slide
      // children from the left instead — used for hero text/CTA chains.
      // clearProps releases the inline transform after the entrance ends so the
      // CSS :hover translate (.card-hover) is not overridden by gsap's matrix.
      document.querySelectorAll<HTMLElement>("[data-animate-stagger]").forEach((grid) => {
        const children = Array.from(grid.children) as HTMLElement[];
        if (!children.length) return;
        const fromLeft = grid.dataset.animateStagger === "left";
        gsap.fromTo(
          children,
          fromLeft ? { opacity: 0, x: -40 } : { opacity: 0, y: 30 },
          {
            opacity: 1,
            ...(fromLeft ? { x: 0 } : { y: 0 }),
            duration: 0.72,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: grid,
              start: triggerStart,
              once: true,
            },
          }
        );
      });

      // Single elements that should fade-up on reveal (no background involved)
      document.querySelectorAll<HTMLElement>("[data-animate-up]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.84,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
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
            duration: 0.96,
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
            duration: 0.72,
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
