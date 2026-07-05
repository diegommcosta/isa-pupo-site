"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sistema de animação global v2 (Editorial Orgânico).
 *
 * Anti-FOUC por construção:
 * - Nenhum estado oculto vem do CSS/markup — todo estado inicial nasce de
 *   gsap.set()/from() no cliente. Sem JS o site fica 100% visível.
 * - Elementos que já estão dentro do viewport no momento do scan não são
 *   escondidos nem animados (evita "conteúdo some e reanima" em hidratação
 *   tardia ou navegação com âncora).
 * - prefers-reduced-motion: early-return total, GSAP nem é carregado.
 *
 * Catálogo (data-attributes):
 * - data-anim="lines"                título revelado linha a linha (SplitText mask)
 * - data-anim="fade-up"              fade + y:28→0
 * - data-anim="stagger"              filhos diretos em cascata
 * - data-anim="image"                reveal por clip-path de baixo pra cima + scale
 * - data-anim="parallax" data-speed  deslocamento vertical em scrub (decorativos)
 * - data-anim="counter" data-to      número rola de 0 até o alvo (formato pt-BR)
 * - data-anim-group="hero"           timeline de intro on-mount; filhos com
 *   data-hero="lines|fade|image|blob" e data-hero-order
 */
export default function AnimationsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let killed = false;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ]);
      // SplitText mede linhas — só escaneia com as fontes prontas
      await document.fonts.ready;
      if (killed) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const isMobile = window.innerWidth < 768;
      const start = isMobile ? "top 97%" : "top 92%";
      // Elemento já visível no scan → não esconder (fica como está)
      const belowFold = (el: HTMLElement) =>
        el.getBoundingClientRect().top > window.innerHeight * 0.88;
      const claim = (el: HTMLElement) => {
        if (el.dataset.animDone) return false;
        el.dataset.animDone = "1";
        return true;
      };

      ctx = gsap.context(() => {
        // ---- intro do hero (on-mount, sem ScrollTrigger) ----
        document.querySelectorAll<HTMLElement>('[data-anim-group="hero"]').forEach((group) => {
          if (!claim(group)) return;
          // Hidratação tardia: usuário já está lendo — não esconder nada
          if (performance.now() > 2500) return;
          const items = Array.from(group.querySelectorAll<HTMLElement>("[data-hero]")).sort(
            (a, b) => Number(a.dataset.heroOrder ?? 0) - Number(b.dataset.heroOrder ?? 0)
          );
          if (!items.length) return;
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          items.forEach((el, i) => {
            const at = i === 0 ? 0 : "-=0.45";
            switch (el.dataset.hero) {
              case "lines":
                SplitText.create(el, {
                  type: "lines",
                  mask: "lines",
                  autoSplit: true,
                  onSplit: (self) =>
                    tl.from(
                      self.lines,
                      { yPercent: 112, duration: 0.9, stagger: 0.12 },
                      at
                    ),
                });
                break;
              case "image":
                tl.fromTo(
                  el,
                  { clipPath: "inset(100% 0% 0% 0%)" },
                  { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power2.inOut" },
                  at
                );
                break;
              case "blob":
                tl.from(el, { scale: 0.85, opacity: 0, duration: 0.9, ease: "power2.out" }, at);
                break;
              default:
                tl.from(el, { opacity: 0, y: 24, duration: 0.6 }, at);
            }
          });
        });

        // ---- títulos linha a linha ----
        document.querySelectorAll<HTMLElement>('[data-anim="lines"]').forEach((el) => {
          if (!claim(el)) return;
          if (!belowFold(el)) return;
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 112,
                duration: 0.8,
                stagger: 0.09,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start, once: true },
              }),
          });
        });

        // ---- fade-up ----
        document.querySelectorAll<HTMLElement>('[data-anim="fade-up"]').forEach((el) => {
          if (!claim(el)) return;
          if (!belowFold(el)) return;
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start, once: true },
          });
        });

        // ---- cascata de filhos ----
        document.querySelectorAll<HTMLElement>('[data-anim="stagger"]').forEach((grid) => {
          if (!claim(grid)) return;
          if (!belowFold(grid)) return;
          const children = Array.from(grid.children) as HTMLElement[];
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "transform", // preserva hovers CSS (.card-hover)
            scrollTrigger: { trigger: grid, start, once: true },
          });
        });

        // ---- reveal de imagem (clip de baixo pra cima + settle de escala) ----
        document.querySelectorAll<HTMLElement>('[data-anim="image"]').forEach((el) => {
          if (!claim(el)) return;
          if (!belowFold(el)) return;
          const img = el.querySelector("img");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: el, start, once: true },
          });
          tl.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power2.inOut" }
          );
          if (img) tl.from(img, { scale: 1.06, duration: 1.2, ease: "power2.out" }, 0);
        });

        // ---- parallax decorativo (scrub) ----
        document.querySelectorAll<HTMLElement>('[data-anim="parallax"]').forEach((el) => {
          const speed = Number(el.dataset.speed ?? 0.9);
          const off = (1 - speed) * 400;
          gsap.fromTo(
            el,
            { y: off },
            {
              y: -off,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        // ---- contador numérico (pt-BR) ----
        document.querySelectorAll<HTMLElement>('[data-anim="counter"]').forEach((el) => {
          if (!claim(el)) return;
          if (!belowFold(el)) return;
          const to = Number(el.dataset.to ?? el.textContent?.replace(",", ".") ?? 0);
          const decimals = (el.dataset.to ?? "").includes(".") ? 2 : 0;
          const state = { v: 0 };
          gsap.to(state, {
            v: to,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start, once: true },
            onStart: () => {
              el.textContent = (0).toFixed(decimals).replace(".", ",");
            },
            onUpdate: () => {
              el.textContent = state.v.toFixed(decimals).replace(".", ",");
            },
          });
        });
      });

      ScrollTrigger.refresh();
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
