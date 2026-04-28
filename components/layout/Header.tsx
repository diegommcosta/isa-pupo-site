"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <header className="w-full bg-verde-escuro sticky top-0 z-50">
      <div className="max-w-site mx-auto h-[60px] px-4 md:px-8 lg:px-[200px] flex items-center justify-between">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logo-herizontal-terapeuta.svg"
            alt="Isa Pupo Terapeuta"
            style={{ height: "35px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-base text-bege hover:text-bege/80 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <Button
            variant="filled"
            size="sm"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </Button>

          <a
            href="https://www.instagram.com/isapupopsicoterapia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Isa Pupo"
            className="text-bege hover:text-bege/80 transition-colors"
          >
            <InstagramIcon />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-bege p-2 -mr-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-verde-escuro border-t border-bege/20 px-4 py-5 flex flex-col gap-5"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-base text-bege hover:text-bege/80 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-1">
            <Button
              variant="filled"
              size="sm"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Agendar
            </Button>

            <a
              href="https://www.instagram.com/isapupopsicoterapia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Isa Pupo"
              className="text-bege hover:text-bege/80 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <InstagramIcon />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
