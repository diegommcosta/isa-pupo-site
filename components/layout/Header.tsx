"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

const INSTAGRAM_URL = "https://www.instagram.com/isapupopsicoterapia/";

// Section IDs derived from anchor nav links (e.g. "/#sobre" → "sobre")
const ANCHOR_IDS = navLinks
  .filter((l) => l.href.startsWith("/#"))
  .map((l) => l.href.slice(2));

function useScrollSpy(enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          isIntersecting ? visible.add(target.id) : visible.delete(target.id);
        });
        // Pick the first anchor section (in nav order) that is currently in view
        setActiveId(ANCHOR_IDS.find((id) => visible.has(id)) ?? null);
      },
      // Section is "active" when it occupies the upper-middle band of the viewport
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    ANCHOR_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enabled]);

  return activeId;
}

function useActiveHref(): string | null {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeId = useScrollSpy(isHome);

  if (isHome) return activeId ? `/#${activeId}` : "/";
  if (pathname === "/blog" || pathname.startsWith("/blog/")) return "/blog";
  if (pathname === "/ebook") return "/ebook";
  if (pathname.startsWith("/terapia")) return "/#atendimentos";
  return null;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsapp = buildWhatsappLink(defaultMessage);
  const activeHref = useActiveHref();

  // Sliding indicator
  const linksRef = useRef<HTMLDivElement>(null);
  const linkElems = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    if (!activeHref || !linksRef.current) {
      setIndicator(null);
      return;
    }
    const link = linkElems.current.get(activeHref);
    if (!link) {
      setIndicator(null);
      return;
    }
    const containerRect = linksRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
    });
  }, [activeHref]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="w-full bg-verde-escuro sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
      <div className="max-w-site mx-auto h-[60px] px-8 lg:px-[200px] flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* Coluna 1 — Logo (esquerda) */}
        <Link
          href="/"
          className="justify-self-start flex items-center text-bege"
          style={{ height: 48 }}
          onClick={closeMobile}
        >
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Coluna 2 — Nav links (centro, só desktop) */}
        <nav className="hidden lg:flex items-center justify-center" aria-label="Navegação principal">
          {/* Relative wrapper so the sliding indicator is contained here */}
          <div ref={linksRef} className="relative flex items-center gap-6 pb-[2px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) linkElems.current.set(link.href, el);
                  else linkElems.current.delete(link.href);
                }}
                className={cn(
                  "font-sans text-[16px] text-bege transition-opacity whitespace-nowrap",
                  link.href === activeHref ? "opacity-100" : "opacity-85 hover:opacity-100"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Sliding underline — transitions between nav items on scroll */}
            <span
              aria-hidden
              className="absolute bottom-0 h-px bg-bege pointer-events-none transition-all duration-300 ease-in-out"
              style={
                indicator
                  ? { left: indicator.left, width: indicator.width, opacity: 1 }
                  : { left: 0, width: 0, opacity: 0 }
              }
            />
          </div>
        </nav>

        {/* Coluna 3 — Ações (direita) */}
        <div className="justify-self-end flex items-center gap-6">
          {/* Desktop: Agendar + Instagram */}
          <div className="hidden lg:flex items-center gap-6">
            <Button
              variant="primary"
              size="sm"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon="whatsapp"
            >
              Agendar
            </Button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Isa Pupo"
              className="text-bege hover:opacity-80 transition-opacity flex items-center"
            >
              <Icon name="instagram" size={18} color="var(--bege)" />
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden text-bege p-2 -mr-2 flex flex-col justify-center items-center gap-[5px] w-10 h-10"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-[22px] h-[2px] bg-bege transition-transform duration-200"
              style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[22px] h-[2px] bg-bege transition-opacity duration-150"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-[22px] h-[2px] bg-bege transition-transform duration-200"
              style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-verde-escuro border-t border-bege/15 px-8 py-5 pb-7 flex flex-col gap-[18px]"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[16px] text-bege transition-opacity pb-[2px] self-end",
                link.href === activeHref
                  ? "opacity-100 border-b border-bege"
                  : "opacity-85 border-b border-transparent"
              )}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}

          <div className="self-end flex items-center gap-3 mt-1">
            <Button
              variant="primary"
              size="sm"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon="whatsapp"
              onClick={closeMobile}
            >
              Agendar
            </Button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Isa Pupo"
              className="text-bege hover:opacity-80 transition-opacity flex items-center px-2"
              onClick={closeMobile}
            >
              <Icon name="instagram" size={18} color="var(--bege)" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
