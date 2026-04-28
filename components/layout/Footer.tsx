import Link from "next/link";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

const footerLinks = [{ label: "Home", href: "/" }, ...navLinks];

export default function Footer() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <footer className="w-full bg-verde-escuro text-bege">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px] pt-[42px] pb-[29px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-[160px]">
          {/* Brand */}
          <div className="flex-1">
            <p className="font-display text-[32px] leading-tight mb-3">Isa Pupo</p>
            <p className="font-sans text-base leading-snug max-w-[391px]">
              Terapia Integrativa &amp; Jungiana, cuidando da sua jornada
              interior com acolhimento e profundidade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-2xl mb-3">Navegação</p>
            <ul className="space-y-1">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-base leading-[22px] underline hover:text-bege/80 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-2xl mb-3">Contato</p>
            <ul className="space-y-1">
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base leading-[22px] underline hover:text-bege/80 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/isapupopsicoterapia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base leading-[22px] underline hover:text-bege/80 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[29px] h-[3px] bg-verde-claro rounded-full" />

        <p className="mt-[21px] text-center font-sans text-base">
          © {new Date().getFullYear()} Isa Pupo. Feito com ♥ por Diego Manoel
        </p>
      </div>
    </footer>
  );
}
