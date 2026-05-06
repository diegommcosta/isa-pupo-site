import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ebook — O Cultivo da Verdade Interna | Isa Pupo",
  description:
    "Um guia para quem busca iniciar ou aprofundar sua jornada de autoconhecimento através da perspectiva da psicologia analítica e das práticas integrativas.",
};

const highlights = [
  "Exploração do Inconsciente",
  "Equilíbrio Bio-Psico-Espiritual",
  "O Processo de Individuação",
];

const forWhom = [
  {
    title: "Busca Autoconhecimento Profundo",
    desc: "Para quem não se contenta com respostas superficiais e deseja explorar as camadas do inconsciente através da lente da Psicologia Analítica (Junguiana).",
  },
  {
    title: "Deseja Equilíbrio Integral",
    desc: "Se você acredita que a saúde não é apenas física, mas um equilíbrio bio-psico-espiritual que precisa ser cultivado diariamente.",
  },
  {
    title: "Está em Processo de Individuação",
    desc: "Para quem sente que se tornar quem verdadeiramente é exige trabalho interior e uma escuta mais atenta à própria psique.",
  },
  {
    title: "Está em um Momento de Transição",
    desc: "Para quem vive mudanças importantes — de carreira, de relacionamentos, de identidade — e busca ferramentas reais de autoconhecimento.",
  },
];

const ebookUrl = process.env.NEXT_PUBLIC_EBOOK_URL ?? "#";

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section data-animate className="bg-bege py-[80px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            <div>
              <Image
                src="/imgs/livro.webp"
                alt="O Cultivo da Verdade Interna"
                width={400}
                height={533}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <Tag icon="book-half" iconColor="var(--roxo-escuro)" style={{ color: "var(--roxo-escuro)" }}>
                Ebook
              </Tag>
              <h1 className="mt-5 font-sans font-bold text-[48px] leading-[1.1] text-roxo-escuro">
                O Cultivo da Verdade Interna
              </h1>
              <p className="mt-5 text-[20px] leading-[1.45] text-verde-escuro max-w-[460px]">
                Um guia para quem busca iniciar ou aprofundar sua jornada de
                autoconhecimento através da perspectiva da psicologia analítica e das
                práticas integrativas.
              </p>
              <div className="mt-7">
                <Button
                  variant="purple"
                  size="sm"
                  href={ebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon="box-arrow-up-right"
                >
                  Adquirir Ebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banda roxo-claro */}
      <section data-animate className="bg-roxo-claro py-[26px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto flex flex-wrap justify-center gap-9 items-center">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <Icon name="star-fill" size={18} color="var(--bege)" />
                <span className="font-sans font-bold text-[18px] text-bege">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é este ebook? */}
      <section data-animate className="bg-white py-[70px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <SectionTitle eyebrow="Para quem é este ebook?" />
          <div className="mt-[30px] max-w-[600px] mx-auto text-center text-[19px] leading-[1.5] text-marrom space-y-[10px]">
            <p>
              Este guia foi cuidadosamente desenvolvido para pessoas que sentem que é
              hora de olhar para dentro com mais profundidade e autonomia.
              <br></br>
              Se você busca ferramentas reais para navegar em sua própria psique, este
              livro é para você.
            </p>
          </div>

          <div className="mt-[50px] max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_392px] gap-14 items-center">
            <div className="flex flex-col gap-5">
              {forWhom.map((it) => (
                <div key={it.title} className="flex gap-4 items-start">
                  <div
                    className="rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      background: "var(--rosa-15)",
                    }}
                  >
                    <Icon name="logo-bullet" size={18} color="var(--laranja)" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[18px] text-verde-escuro">{it.title}</p>
                    <p className="mt-1.5 font-sans text-[16px] leading-[1.5] text-marrom">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="rounded-[16px] overflow-hidden mx-auto md:mx-0 w-full max-w-[392px]"
              style={{ aspectRatio: "392/379" }}
            >
              <Image
                src="/imgs/tablet.webp"
                alt=""
                width={392}
                height={379}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Autora */}
      <section data-animate className="bg-bege-light py-[80px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <SectionTitle eyebrow="Sobre a Autora" />
          <div className="max-w-content mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-[422px_1fr] gap-14 items-start">
            <div
              className="rounded-[16px] overflow-hidden mx-auto md:mx-0 w-full max-w-[422px]"
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
            <div>
              <h2 className="font-sans font-bold text-[48px] leading-none text-verde-escuro">
                Isa Pupo
              </h2>
              <div className="mt-6 text-[17px] leading-[1.55] text-marrom space-y-[14px]">
                <p>
                  Uma mulher de alma curiosa, passos corajosos e em constante
                  movimento. Minha trajetória é feita de escolhas e reencontros.
                </p>
                <p>
                  Sou graduada em Ciências Contábeis e, entre razonetes e planilhas
                  nos dez anos que passei no mundo corporativo, percebi que aquele
                  espaço e profissão não me pertenciam mais. Recalculei as minhas
                  rotas e mergulho na clínica através da minha especialização em{" "}
                  <strong>Psicologia Analítica (Jung)</strong>.
                </p>
                <p>
                  Minha prática une o comprometimento do estudo acadêmico à sabedoria
                  que vem da terra. Amo a natureza, sou apaixonada por ervas, cristais
                  e pelo cheiro de incensos.
                </p>
                <p>
                  Acredito que o autoconhecimento só ganha vida quando paramos de
                  fugir de quem somos. Meu trabalho é caminhar ao seu lado,
                  respeitando o seu tempo e ajudando você a ouvir a si mesmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section data-animate className="bg-marrom py-[70px] pb-[90px] text-bege">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <SectionTitle eyebrow="Investimento" color="var(--bege)" />
          <div className="mt-10 flex justify-center">
            <div
              className="bg-bege rounded-[20px] text-center text-marrom w-full max-w-[384px]"
              style={{ padding: "30px 24px 28px", boxShadow: "0 8px 24px rgba(0,0,0,.15)" }}
            >
              <p className="font-sans text-[18px]" style={{ textDecoration: "line-through", opacity: 0.7 }}>
                de R$ 40,00
              </p>
              <div className="mt-[10px] flex items-baseline justify-center gap-2">
                <span className="font-sans text-[18px]">por R$</span>
                <span className="font-sans font-bold text-[56px] leading-none text-roxo-escuro">
                  19,90
                </span>
              </div>
              <p className="mt-1.5 font-sans text-[16px]">em até 3x sem juros</p>
              <div className="mt-[18px] flex justify-center gap-3">
                <Icon name="book-half" size={28} color="var(--roxo-escuro)" />
                <Icon name="logo-bullet" size={28} color="var(--laranja)" />
              </div>
              <div className="mt-[22px] flex justify-center">
                <Button
                  variant="purple"
                  size="sm"
                  href={ebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon="box-arrow-up-right"
                >
                  Adquirir Ebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
