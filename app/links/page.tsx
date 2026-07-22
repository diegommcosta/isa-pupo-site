import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { linksQuery } from "@/lib/sanity/queries";
import type { LinkItem, LinksPage } from "@/lib/sanity/types";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import LogoBullet from "@/components/ui/icons/LogoBullet";
import Sparkle from "@/components/ui/shapes/Sparkle";
import WaveDivider from "@/components/ui/shapes/WaveDivider";
import AnimationsProvider from "@/components/ui/AnimationsProvider";
import LinkPill from "@/components/links/LinkPill";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Links",
  description:
    "Todos os links da Isa Pupo: agendamento pelo WhatsApp, terapias, blog e Instagram.",
};

/** Fallback enquanto o singleton "links" não foi preenchido no Studio. */
const FALLBACK_ITEMS: LinkItem[] = [
  {
    label: "Agendar Consulta",
    url: buildWhatsappLink(defaultMessage),
    icon: "whatsapp",
    destaque: true,
  },
  { label: "Conheça o site", url: "/", icon: "stars" },
  { label: "Terapia Junguiana", url: "/terapia/jungiana", icon: "moon-stars-fill" },
  { label: "Terapia Integrativa", url: "/terapia/integrativa", icon: "people" },
  { label: "Blog", url: "/blog", icon: "book-half" },
  {
    label: "Instagram",
    url: "https://www.instagram.com/isapupopsicoterapia/",
    icon: "instagram",
  },
];

const FALLBACK: LinksPage = {
  title: "Isa Pupo",
  subtitle: "Psicoterapia Junguiana & Integrativa — escolha por onde começar",
  items: FALLBACK_ITEMS,
};

export default async function LinksPage() {
  const data = await client
    .fetch<LinksPage | null>(linksQuery)
    .catch(() => null);

  const title = data?.title || FALLBACK.title;
  const subtitle = data?.subtitle ?? FALLBACK.subtitle;
  const items = data?.items?.length ? data.items : FALLBACK_ITEMS;

  return (
    <>
      {/* Rubber-band verde: o body segue pintando o documento em bege;
          o verde do html só aparece no overscroll (pull-to-refresh).
          Sai do DOM ao navegar para outra rota. */}
      <style>{`html{background:#2D3322}`}</style>
      <AnimationsProvider />
      <main className="min-h-svh flex flex-col bg-bege-light">
        {/* Faixa escura de topo com a logo */}
        <header className="relative overflow-hidden bg-verde-escuro">
          <Sparkle
            size={18}
            className="absolute top-[26%] left-[10%] text-rosa/60 animate-twinkle"
          />
          <Sparkle
            size={24}
            className="absolute top-[38%] right-[9%] text-bege/50 animate-twinkle [animation-delay:1.2s]"
          />
          <Sparkle
            size={12}
            className="absolute bottom-[30%] left-[22%] text-roxo-claro/70 animate-twinkle [animation-delay:0.6s] hidden md:block"
          />
          <div className="flex justify-center px-6 pt-12 pb-6 md:pt-14 md:pb-8">
            <Link
              href="/"
              aria-label="Ir para o site — página inicial"
              className="hover:opacity-85 transition-opacity"
            >
              <Logo className="w-[190px] md:w-[220px] h-auto text-bege" />
            </Link>
          </div>
        </header>
        <WaveDivider from="bg-verde-escuro" to="text-bege-light" variant="organic" />

        {/* Conteúdo */}
        <div className="flex-1 w-full max-w-[560px] mx-auto px-6 pt-8 md:pt-10 flex flex-col items-center">
          <h1
            data-anim="lines"
            className="font-display font-normal text-display-lg text-verde-escuro text-center [text-wrap:balance]"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              data-anim="fade-up"
              className="mt-3 text-[17px] leading-[1.5] text-marrom text-center max-w-[42ch]"
            >
              {subtitle}
            </p>
          )}

          <nav aria-label="Links da Isa Pupo" className="w-full mt-9 md:mt-10">
            <ul data-anim="stagger" className="flex flex-col gap-[14px]">
              {items.map((item, i) => (
                <li key={`${item.url}-${i}`}>
                  <LinkPill {...item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Rodapé-marca: só o símbolo, laranja, com respiro simétrico
            (56px acima e abaixo, + safe area do home-indicator no iPhone).
            width explícito no svg — imune a CSS não aplicado/stale. */}
        <footer className="mt-auto flex justify-center pt-14 pb-[calc(56px+env(safe-area-inset-bottom))]">
          <LogoBullet aria-hidden="true" width={60} className="h-auto text-laranja" />
        </footer>
      </main>
    </>
  );
}
