"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Sistema de animação global v2.1 (Editorial Orgânico).
 *
 * Anti-FOUC por construção:
 * - Nenhum estado oculto vem do CSS/markup — todo estado inicial nasce de
 *   gsap.set()/from() no cliente. Sem JS o site fica 100% visível.
 * - Elementos acima da dobra ganham uma TIMELINE DE ENTRADA em cascata
 *   (páginas internas têm hero visível no load); a entrada só roda se a
 *   página acabou de pintar — em hidratação tardia no primeiro load
 *   (> 2500ms) nada é escondido, o conteúdo segue como está.
 * - prefers-reduced-motion: early-return total, GSAP nem é carregado.
 *
 * Catálogo (data-attributes):
 * - data-anim="lines"                título revelado linha a linha (SplitText mask)
 * - data-anim="fade-up"              fade + y:32→0
 * - data-anim="stagger"              filhos diretos em cascata
 * - data-anim="image"                reveal por clip-path de baixo pra cima + scale
 * - data-anim="parallax" data-speed  deslocamento vertical em scrub (decorativos)
 * - data-anim="counter" data-to      número rola de 0 até o alvo (formato pt-BR)
 * - data-anim-group="hero"           timeline de intro dedicada; filhos com
 *   data-hero="lines|fade|image|blob" e data-hero-order
 */
export default function AnimationsProvider() {
  const pathname = usePathname();
  const firstRunRef = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isFirstRun = firstRunRef.current;
    firstRunRef.current = false;

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
      const belowFold = (el: HTMLElement) =>
        el.getBoundingClientRect().top > window.innerHeight * 0.88;
      const claim = (el: HTMLElement) => {
        if (el.dataset.animDone) return false;
        el.dataset.animDone = "1";
        return true;
      };
      // Entrada acima da dobra: em navegação client-side sempre (DOM recém-
      // pintado); no primeiro load só se a hidratação foi rápida — senão o
      // usuário já está lendo e nada deve sumir/reanimar.
      const allowIntro = !isFirstRun || performance.now() < 2500;

      ctx = gsap.context(() => {
        // ---- intro do hero da home (timeline dedicada) ----
        document.querySelectorAll<HTMLElement>('[data-anim-group="hero"]').forEach((group) => {
          if (!claim(group)) return;
          if (!allowIntro) return;
          const items = Array.from(group.querySelectorAll<HTMLElement>("[data-hero]")).sort(
            (a, b) => Number(a.dataset.heroOrder ?? 0) - Number(b.dataset.heroOrder ?? 0)
          );
          if (!items.length) return;
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          let textIndex = 0;
          items.forEach((el) => {
            // Imagem e blob entram JUNTO com o texto (posições absolutas no
            // início da timeline), não depois — entrada mais fluida.
            switch (el.dataset.hero) {
              case "lines":
                SplitText.create(el, {
                  type: "lines",
                  mask: "lines",
                  autoSplit: true,
                  onSplit: (self) =>
                    tl.from(
                      self.lines,
                      { yPercent: 112, duration: 0.9, stagger: 0.1, ease: "expo.out" },
                      textIndex === 0 ? 0 : "-=0.6"
                    ),
                });
                textIndex++;
                break;
              case "image": {
                const img = el.querySelector("img");
                tl.from(el, { opacity: 0, y: 32, duration: 1.0 }, 0.15);
                if (img) tl.from(img, { scale: 1.1, duration: 1.5, ease: "power2.out" }, 0.15);
                break;
              }
              case "blob":
                tl.from(el, { scale: 0.85, opacity: 0, duration: 1.1, ease: "power2.out" }, 0.1);
                break;
              default:
                tl.from(
                  el,
                  { opacity: 0, y: 26, duration: 0.75 },
                  textIndex === 0 ? 0 : "-=0.6"
                );
                textIndex++;
            }
          });
        });

        // ---- timeline de entrada para o que já está visível no load ----
        // Texto entra em cascata; imagens entram em paralelo desde o início.
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        let introIndex = 0;
        const introAt = () => (introIndex === 0 ? 0 : `-=${0.6}`);

        // ---- títulos linha a linha ----
        document.querySelectorAll<HTMLElement>('[data-anim="lines"]').forEach((el) => {
          if (!claim(el)) return;
          if (belowFold(el)) {
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.lines, {
                  yPercent: 112,
                  duration: 0.9,
                  stagger: 0.08,
                  ease: "expo.out",
                  scrollTrigger: { trigger: el, start, once: true },
                }),
            });
          } else if (allowIntro) {
            const at = introAt();
            introIndex++;
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit: (self) =>
                intro.from(
                  self.lines,
                  { yPercent: 112, duration: 0.9, stagger: 0.08, ease: "expo.out" },
                  at
                ),
            });
          }
        });

        // ---- fade-up ----
        document.querySelectorAll<HTMLElement>('[data-anim="fade-up"]').forEach((el) => {
          if (!claim(el)) return;
          if (belowFold(el)) {
            gsap.from(el, {
              opacity: 0,
              y: 28,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start, once: true },
            });
          } else if (allowIntro) {
            intro.from(el, { opacity: 0, y: 28, duration: 0.75 }, introAt());
            introIndex++;
          }
        });

        // ---- cascata de filhos ----
        document.querySelectorAll<HTMLElement>('[data-anim="stagger"]').forEach((grid) => {
          if (!claim(grid)) return;
          const children = Array.from(grid.children) as HTMLElement[];
          if (!children.length) return;
          if (belowFold(grid)) {
            gsap.from(children, {
              opacity: 0,
              y: 24,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "transform", // preserva hovers CSS (.card-hover)
              scrollTrigger: { trigger: grid, start, once: true },
            });
          } else if (allowIntro) {
            intro.from(
              children,
              {
                opacity: 0,
                y: 24,
                duration: 0.75,
                stagger: 0.1,
                clearProps: "transform",
              },
              introAt()
            );
            introIndex++;
          }
        });

        // ---- reveal de imagem (fade + drift + zoom-settle na <img>) ----
        document.querySelectorAll<HTMLElement>('[data-anim="image"]').forEach((el) => {
          if (!claim(el)) return;
          const img = el.querySelector("img");
          if (belowFold(el)) {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: el, start, once: true },
            });
            tl.from(el, { opacity: 0, y: 32, duration: 1.0, ease: "power3.out" });
            if (img) tl.from(img, { scale: 1.1, duration: 1.5, ease: "power2.out" }, 0);
          } else if (allowIntro) {
            // Imagens acima da dobra entram em paralelo com o texto
            intro.from(el, { opacity: 0, y: 32, duration: 1.0 }, 0.15);
            if (img) intro.from(img, { scale: 1.1, duration: 1.5, ease: "power2.out" }, 0.15);
          }
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
          if (!belowFold(el) && !allowIntro) return;
          const to = Number(el.dataset.to ?? el.textContent?.replace(",", ".") ?? 0);
          const decimals = (el.dataset.to ?? "").includes(".") ? 2 : 0;
          const state = { v: 0 };
          const format = () => {
            el.textContent = state.v.toFixed(decimals).replace(".", ",");
          };
          gsap.to(state, {
            v: to,
            duration: 0.9,
            ease: "power2.out",
            ...(belowFold(el)
              ? { scrollTrigger: { trigger: el, start, once: true } }
              : {}),
            onStart: () => {
              state.v = 0;
              format();
            },
            onUpdate: format,
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
