"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

const INSTAGRAM_URL = "https://www.instagram.com/isapupopsicoterapia/";

function useNavItems() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const items = isHome
    ? navLinks.map((l) => ({ ...l }))
    : [{ label: "Home", href: "/" } as const, ...navLinks.map((l) => ({ ...l }))];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false; // anchor items never show as active
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (href === "/ebook") return pathname === "/ebook";
    if (pathname.startsWith("/terapia")) return href === "/#atendimentos";
    return pathname === href;
  }

  return { items, isActive };
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsapp = buildWhatsappLink(defaultMessage);
  const { items, isActive } = useNavItems();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="w-full bg-verde-escuro sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
      <div className="max-w-site mx-auto h-[60px] px-8 lg:px-[200px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 flex items-center text-bege"
          style={{ height: 48 }}
          onClick={closeMobile}
        >
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
          {items.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[16px] text-bege transition-opacity whitespace-nowrap pb-[2px]",
                  active
                    ? "opacity-100 border-b border-bege"
                    : "opacity-85 border-b border-transparent hover:opacity-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Button
            variant="primary"
            size="sm"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
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
        </nav>

        {/* Mobile hamburger */}
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

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-verde-escuro border-t border-bege/15 px-8 py-5 pb-7 flex flex-col gap-[18px]"
          aria-label="Menu mobile"
        >
          {items.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[16px] text-bege transition-opacity pb-[2px] self-start",
                  active
                    ? "opacity-100 border-b border-bege"
                    : "opacity-85 border-b border-transparent"
                )}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 mt-1">
            <Button
              variant="primary"
              size="sm"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
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
