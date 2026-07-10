import Image from "next/image";
import Blob from "@/components/ui/shapes/Blob";
import Sparkle from "@/components/ui/shapes/Sparkle";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  variant?: "light" | "dark";
  id?: string;
}

/**
 * Seção biográfica compartilhada entre a home ("Sobre Mim") e a página do
 * ebook ("Sobre a Autora") — copy aprovado, idêntico nos dois lugares.
 */
export default function AboutIsa({ eyebrow, variant = "light", id }: Props) {
  const dark = variant === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-28",
        id && "scroll-mt-[88px]",
        dark ? "bg-verde-escuro" : "bg-bege-light"
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Título editorial à esquerda */}
        <div className="relative">
          {/* cor via style: tailwind-merge confunde text-eyebrow/text-display-* (font-size) com classes de cor e descarta uma delas */}
          {/* O eyebrow é o heading real da seção ("Sobre Mim"/"Sobre a Autora");
              o nome gigante é display text — evita h1 "Isa Pupo" → h2 "Isa Pupo" no outline. */}
          <h2
            className="inline-flex items-center gap-2 font-sans font-bold text-eyebrow uppercase"
            style={{ color: dark ? "var(--bege)" : "var(--laranja)" }}
          >
            <Sparkle size={12} />
            {eyebrow}
          </h2>
          <p
            data-anim="lines"
            className="relative z-10 font-display font-normal text-display-xl px-2 -mx-2 mt-3"
            style={{ color: dark ? "var(--bege)" : "var(--verde-escuro)" }}
          >
            Isa Pupo
          </p>
          <Sparkle
            size={18}
            className={cn(
              "absolute top-2 left-[min(52vw,560px)] animate-twinkle hidden md:block",
              dark ? "text-bege/70" : "text-rosa"
            )}
          />
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start">
          {/* Foto com moldura orgânica */}
          <div className="relative lg:col-span-5 lg:pr-10">
            <div
              className="absolute -left-10 -bottom-12 w-[75%] pointer-events-none"
              data-anim="parallax"
              data-speed="0.93"
            >
              <Blob
                variant={2}
                color={dark ? "text-verde-claro/30" : "text-bege"}
                className="w-full h-auto"
              />
            </div>
            <div
              data-anim="image"
              className="relative rounded-blob-1 overflow-hidden rotate-[-2deg] w-full max-w-[440px] mx-auto lg:mx-0"
              style={{ aspectRatio: "422/561" }}
            >
              <Image
                src="/imgs/sobre-mim.webp"
                alt="Quadro com elementos de colagem em volta, com a foto da Isa Pupo feliz em blusa vermelha e calça branca, num fundo marrom com elementos naturais."
                width={422}
                height={561}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 lg:pl-8 xl:pl-12">
            <div className={cn("space-y-5", dark ? "text-bege-light" : "text-marrom")}>
              <p
                data-anim="fade-up"
                className="text-[21px] md:text-[23px] leading-[1.45]"
              >
                <em>Uma mulher de alma curiosa, passos corajosos e em constante
                  movimento.</em>{" "}
                <span className={dark ? "text-bege font-bold" : "text-roxo-escuro"}>
                  Minha trajetória é feita de escolhas e reencontros.
                </span>
              </p>
              <div
                className="space-y-4 text-[17px] md:text-[18px] leading-[1.55] max-w-[600px]"
                data-anim="fade-up"
              >
                <p>
                  Sou graduada em Ciências Contábeis e, entre razonetes e planilhas
                  nos dez anos que passei no mundo corporativo, percebi que aquele
                  espaço não me pertencia mais. Recalculei minhas rotas e,
                  atualmente, mergulho na clínica através da minha especialização em{" "}
                  <strong>Psicologia Analítica (Jung)</strong> e sigo no processo de
                  graduação em Psicologia (2026).
                </p>
                <p>
                  Minha prática une comprometimento do estudo acadêmico à sabedoria que vem da terra. Amo a natureza e os mistérios da vida, sou apaixonada por ervas e confesso: um galhinho de arruda atrás da orelha e um maço de manjericão têm o meu coração. Amo o cheiro de incensos, cristais e o prazer de uma taça de vinho com o meu parceiro no fim do dia.
                </p>
                <p>
                  Divido a vida com o <em>Mike</em>, meu companheiro de quatro patas e o meu mestre mais lindo em afeto e amor. Sou viciada em aprender sobre psicologia e espiritualidade e em observar como cada detalhe do mundo toca a nossa subjetividade.
                </p>
                <p>
                  Acredito que o autoconhecimento só ganha vida quando paramos de fugir de quem somos. Meu trabalho é caminhar ao seu lado, respeitando o seu tempo e ajudando você a ouvir a si mesmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
