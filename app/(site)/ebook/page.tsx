import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/shapes/Blob";
import Sparkle from "@/components/ui/shapes/Sparkle";
import WaveDivider from "@/components/ui/shapes/WaveDivider";
import AboutIsa from "@/components/shared/AboutIsa";

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
      <section className="relative overflow-hidden bg-bege pt-[104px] md:pt-[136px] pb-16 md:pb-24">
        <Sparkle
          size={18}
          className="absolute top-[14%] right-[8%] text-roxo-escuro animate-twinkle hidden md:block"
        />
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Livro flutuante com blob */}
            <div className="relative lg:col-span-5 flex justify-center lg:justify-start">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                data-anim="parallax"
                data-speed="0.92"
              >
                <Blob variant={3} color="text-roxo-claro/25" className="w-[110%] max-w-[520px]" />
              </div>
              <div className="relative animate-float motion-reduce:animate-none">
                <div data-anim="image" className="rotate-[3deg] max-w-[320px] md:max-w-[400px]">
                  <Image
                    src="/imgs/livro.webp"
                    alt="O Cultivo da Verdade Interna"
                    width={400}
                    height={533}
                    className="w-full h-auto object-contain drop-shadow-[0_24px_40px_rgba(45,22,5,0.28)]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-7 lg:pl-14 xl:pl-20">
              <div data-anim="fade-up">
                <Tag icon="book-half" iconColor="var(--roxo-escuro)" style={{ color: "var(--roxo-escuro)" }}>
                  Ebook
                </Tag>
              </div>
              <h1
                data-anim="lines"
                className="mt-4 font-display font-normal text-display-lg text-roxo-escuro px-2 -mx-2 max-w-[640px]"
              >
                O Cultivo da Verdade Interna
              </h1>
              <p
                data-anim="fade-up"
                className="mt-6 text-[19px] md:text-[20px] leading-[1.5] text-verde-escuro max-w-[460px]"
              >
                Um guia para quem busca iniciar ou aprofundar sua jornada de
                autoconhecimento através da perspectiva da psicologia analítica e das
                práticas integrativas.
              </p>
              <div className="mt-8" data-anim="fade-up">
                <Button
                  variant="purple"
                  size="md"
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

      {/* Banda roxo-claro — marquee em todos os breakpoints */}
      <section className="bg-roxo-claro py-6 overflow-hidden" aria-label="Destaques do ebook">
        <div className="flex w-max animate-marquee [animation-duration:28s] motion-reduce:animate-none">
          {[...highlights, ...highlights].map((h, i) => (
            <div key={`${h}-${i}`} className="flex items-center gap-3 shrink-0 px-8 md:px-10">
              <Sparkle size={16} className="text-bege" />
              <span className="font-sans font-bold text-[18px] md:text-[20px] text-bege whitespace-nowrap">
                {h}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem é este ebook? */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <SectionTitle title="Para quem é este ebook?" />
          <div
            data-anim="fade-up"
            className="mt-6 max-w-[620px] mx-auto text-left md:text-center text-[18px] md:text-[19px] leading-[1.55] text-marrom"
          >
            <p>
              Este guia foi cuidadosamente desenvolvido para pessoas que sentem que é
              hora de olhar para dentro com mais profundidade e autonomia.
              <br></br>
              Se você busca ferramentas reais para navegar em sua própria psique, este
              livro é para você.
            </p>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8" data-anim="stagger">
              {forWhom.map((it, i) => (
                <div key={it.title} className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start">
                  <span
                    aria-hidden="true"
                    className="font-display text-[38px] md:text-[48px] leading-none text-rosa/70 sm:w-[68px] md:w-[84px] shrink-0 select-none"
                  >
                    0{i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[19px] text-verde-escuro">{it.title}</p>
                    <p className="mt-2 font-sans text-[16px] leading-[1.55] text-marrom max-w-[520px]">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative lg:col-span-5">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                data-anim="parallax"
                data-speed="0.93"
              >
                <Blob variant={1} color="text-bege" className="w-[105%] max-w-[480px]" />
              </div>
              <div
                data-anim="image"
                className="relative overflow-hidden mx-auto w-full max-w-[392px]"
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
        </div>
      </section>

      <WaveDivider from="bg-white" to="text-verde-escuro" variant="organic" />

      {/* Sobre a Autora — bloco escuro */}
      <AboutIsa title="Sobre a Autora" variant="dark" />

      <WaveDivider from="bg-verde-escuro" to="text-marrom" variant="soft" flip />

      {/* Investimento */}
      <section className="relative overflow-hidden bg-marrom py-20 md:py-28 text-bege">
        <Sparkle
          size={20}
          className="absolute top-[16%] left-[12%] text-bege/60 animate-twinkle hidden md:block"
        />
        <Sparkle
          size={13}
          className="absolute bottom-[18%] right-[14%] text-rosa animate-twinkle [animation-delay:1.4s]"
        />
        <Sparkle
          size={15}
          className="absolute top-[30%] right-[26%] text-bege/40 animate-twinkle [animation-delay:0.7s]"
        />
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <SectionTitle title="Investimento" color="var(--bege)" />
          <div className="mt-12 flex justify-center">
            <div
              className="card-hover bg-bege rounded-card text-center text-marrom w-full max-w-[420px] px-8 pt-10 pb-9"
              style={{ boxShadow: "0 16px 40px rgba(0,0,0,.3)" }}
            >
              <p className="font-sans text-[18px] line-through opacity-70">
                de R$ 40,00
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-3">
                <span className="font-sans text-[20px]">por R$</span>
                <span
                  className="font-display text-[52px] md:text-[68px] leading-none text-roxo-escuro"
                  data-anim="counter"
                  data-to="19.90"
                >
                  19,90
                </span>
              </div>
              <p className="mt-3 font-sans text-[16px]">em até 3x sem juros</p>
              <div className="mt-6 flex justify-center gap-3">
                <Icon name="book-half" size={28} color="var(--roxo-escuro)" />
                <Icon name="logo-bullet" size={28} color="var(--laranja)" />
              </div>
              <div className="mt-7 flex justify-center">
                <Button
                  variant="purple"
                  size="md"
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
      <WaveDivider from="bg-marrom" to="text-verde-escuro" variant="organic" />
    </>
  );
}
