import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Atendimentos", href: "/#atendimentos" },
  { label: "Ebook", href: "/ebook" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-verde-escuro text-bege">
      <div className="max-w-site mx-auto px-[200px] pt-[42px] pb-[29px]">
        <div className="flex gap-[160px]">
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
            <ul className="space-y-0">
              {navLinks.map((l) => (
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
            <ul className="space-y-0">
              <li>
                <a
                  href={`https://wa.me/55${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "11999998888"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base leading-[22px] underline hover:text-bege/80 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
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

        {/* Divider */}
        <div className="mt-[29px] h-[3px] bg-verde-claro rounded-full" />

        {/* Copyright */}
        <p className="mt-[21px] text-center font-sans text-base">
          © {new Date().getFullYear()} Isa Pupo. Feito com ♥ por Diego Manoel
        </p>
      </div>
    </footer>
  );
}
