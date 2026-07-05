import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import Sparkle from "@/components/ui/shapes/Sparkle";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/nav";

const INSTAGRAM_URL = "https://www.instagram.com/isapupopsicoterapia/";

const footerLinks = navLinks.map((l) => ({ ...l }));

export default function Footer() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <footer className="w-full bg-verde-escuro text-bege overflow-hidden">
      <div className="max-w-site mx-auto px-8 lg:px-[200px] pt-14 md:pt-20 pb-8">
        {/* Assinatura */}
        <div className="relative pb-10 md:pb-14" data-anim="fade-up">
          <p className="font-display text-display-xl leading-none px-2 -mx-2">Isa Pupo</p>
          <Sparkle size={22} className="absolute top-0 right-[4%] text-rosa animate-twinkle" />
          <Sparkle
            size={14}
            className="absolute bottom-6 right-[16%] text-bege/70 animate-twinkle [animation-delay:1.4s]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-10 pb-10 border-t border-verde-claro/50 pt-10">
          {/* Brand */}
          <div>
            <p className="font-sans text-[16px] leading-[1.6] opacity-90 max-w-[380px]">
              Terapia Integrativa &amp; Junguiana, cuidando da sua jornada
              interior com acolhimento e profundidade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="inline-flex items-center gap-2 font-sans font-bold text-eyebrow uppercase text-bege mb-4">
              <Sparkle size={11} className="text-rosa" />
              Navegação
            </p>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[16px] text-bege/85 hover:text-bege hover:underline underline-offset-[4px] transition-colors block py-1.5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="inline-flex items-center gap-2 font-sans font-bold text-eyebrow uppercase text-bege mb-4">
              <Sparkle size={11} className="text-rosa" />
              Contato
            </p>
            <ul>
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[16px] text-bege/85 hover:text-bege hover:underline underline-offset-[4px] transition-colors py-1.5"
                >
                  <Icon name="whatsapp" size={16} color="currentColor" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[16px] text-bege/85 hover:text-bege hover:underline underline-offset-[4px] transition-colors py-1.5"
                >
                  <Icon name="instagram" size={16} color="currentColor" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-5 border-t border-verde-claro/30 text-center font-sans text-[14px] text-bege/70">
          © {new Date().getFullYear()} Isa Pupo. Feito com ♥ por Diego Manoel
        </p>
      </div>
    </footer>
  );
}
