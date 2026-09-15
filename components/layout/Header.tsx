"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";
import { INSTAGRAM_URL } from "@/lib/social";
import { cn } from "@/lib/utils";

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
          if (isIntersecting) visible.add(target.id); else visible.delete(target.id);
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
  if (pathname.startsWith("/terapia")) return "/#atendimentos";
  return null;
}

export type HeaderTone = "light" | "dark";

interface HeaderProps {
  /** Cor do texto no estado transparente: "light" = primeira seção clara (texto verde-escuro), "dark" = primeira seção escura (texto bege). */
  tone?: HeaderTone;
}

export default function Header({ tone: toneProp = "light" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsapp = buildWhatsappLink(defaultMessage);
  const activeHref = useActiveHref();
  const headerPathname = usePathname();
  // O layout de (site) é compartilhado entre rotas com heros claros e escuros,
  // então o tom do estado transparente é derivado da rota.
  const tone: HeaderTone = headerPathname === "/blog" ? "dark" : toneProp;

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

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

  const pathname = usePathname();
  function handleHomeClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMobile();
  }

  return (
    <header
      ref={headerRef}
      data-scrolled={scrolled || undefined}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background-color,color,box-shadow] duration-300",
        mobileOpen
          ? "bg-bege-light text-verde-escuro shadow-[0_2px_12px_rgba(45,22,5,0.12)]"
          : scrolled
            ? "bg-verde-escuro/95 backdrop-blur-md text-bege shadow-[0_2px_8px_rgba(45,22,5,0.28)]"
            : cn("bg-transparent", tone === "light" ? "text-verde-escuro" : "text-bege")
      )}
    >
      <div className="max-w-site mx-auto h-[72px] px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* Coluna 1 — Logo (esquerda) */}
        <Link
          href="/"
          className="justify-self-start flex items-center text-current"
          style={{ height: 48 }}
          onClick={handleHomeClick}
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
                  "font-sans text-[16px] text-current transition-opacity whitespace-nowrap",
                  link.href === activeHref ? "opacity-100" : "opacity-80 hover:opacity-100"
                )}
                onClick={link.href === "/" ? handleHomeClick : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Sliding underline — transitions between nav items on scroll */}
            <span
              aria-hidden
              className="absolute bottom-0 h-px bg-current pointer-events-none transition-all duration-300 ease-in-out"
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
              className="tap-target text-current hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <Icon name="instagram" size={18} color="currentColor" />
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="tap-target lg:hidden text-current p-2 -mr-2 flex flex-col justify-center items-center gap-[5px] w-10 h-10"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-[22px] h-[2px] bg-current transition-transform duration-200"
              style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[22px] h-[2px] bg-current transition-opacity duration-150"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-[22px] h-[2px] bg-current transition-transform duration-200"
              style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav
        className={cn(
          "lg:hidden bg-bege-light text-verde-escuro overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          mobileOpen ? "max-h-[480px] opacity-100 border-t border-verde-escuro/10" : "max-h-0 opacity-0"
        )}
        aria-label="Menu mobile"
      >
        <div className="px-6 md:px-10 py-7 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={mobileOpen ? undefined : -1}
              className={cn(
                "tap-target inline-flex items-center font-sans text-[22px] text-verde-escuro transition-opacity pb-[2px] self-start",
                link.href === activeHref
                  ? "opacity-100 border-b-2 border-verde-escuro"
                  : "opacity-80 border-b-2 border-transparent"
              )}
              onClick={link.href === "/" ? handleHomeClick : closeMobile}
            >
              {link.label}
            </Link>
          ))}

          <div className="self-start flex items-center gap-3 mt-1">
            <Button
              variant="primary"
              size="md"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon="whatsapp"
              onClick={closeMobile}
              tabIndex={mobileOpen ? undefined : -1}
            >
              Agendar
            </Button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Isa Pupo"
              className="tap-target text-verde-escuro hover:opacity-80 transition-opacity flex items-center justify-center px-2"
              onClick={closeMobile}
              tabIndex={mobileOpen ? undefined : -1}
            >
              <Icon name="instagram" size={20} color="currentColor" />
            </a>
          </div>

          <p className="font-display text-[32px] leading-none text-verde-escuro/60 mt-2" aria-hidden="true">
            Isa Pupo
          </p>
        </div>
      </nav>
    </header>
  );
}
