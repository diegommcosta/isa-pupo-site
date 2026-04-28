"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type Options = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  childSelector?: string;
};

export function useScrollAnimation<T extends HTMLElement>(
  options: Options = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const {
    y = 40,
    duration = 0.7,
    delay = 0,
    stagger = 0,
    childSelector,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    let gsap: typeof import("gsap").gsap;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    (async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.gsap;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const targets = childSelector
        ? ref.current!.querySelectorAll(childSelector)
        : [ref.current!];

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current!,
            start: "top 85%",
            once: true,
          },
        }
      );
    })();

    return () => {
      ScrollTrigger?.getAll().forEach((t) => t.kill());
    };
  }, [y, duration, delay, stagger, childSelector]);

  return ref;
}
