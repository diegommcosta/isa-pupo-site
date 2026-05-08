import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

const INSTAGRAM_URL = "https://www.instagram.com/isapupopsicoterapia/";

const footerLinks = navLinks.map((l) => ({ ...l }));

export default function Footer() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <footer className="w-full bg-verde-escuro text-bege">
      <div className="max-w-site mx-auto px-8 lg:px-[200px] pt-10 md:pt-[60px] pb-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-6 md:gap-10 pb-8 border-b-[3px] border-verde-claro">
          {/* Brand */}
          <div>
            <p className="font-display text-[36px] leading-none mb-[14px]">Isa Pupo</p>
            <p className="font-sans text-[16px] leading-[1.5] opacity-90 max-w-[380px]">
              Terapia Integrativa &amp; Junguiana, cuidando da sua jornada
              interior com acolhimento e profundidade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans font-bold text-[22px] text-bege mb-[10px]">Navegação</p>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[16px] text-bege/90 underline underline-offset-[3px] hover:text-bege transition-colors block py-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans font-bold text-[22px] text-bege mb-[10px]">Contato</p>
            <ul>
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[16px] text-bege/90 underline underline-offset-[3px] hover:text-bege transition-colors py-1"
                >
                  <Icon name="whatsapp" size={16} color="var(--bege)" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[16px] text-bege/90 underline underline-offset-[3px] hover:text-bege transition-colors py-1"
                >
                  <Icon name="instagram" size={16} color="var(--bege)" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-5 text-center font-sans text-[14px] text-bege/80">
          © {new Date().getFullYear()} Isa Pupo. Feito com ♥ por Diego Manoel
        </p>
      </div>
    </footer>
  );
}
