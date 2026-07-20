import Image from "next/image";
import Button from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Blob from "@/components/ui/shapes/Blob";
import Sparkle from "@/components/ui/shapes/Sparkle";

const bullets = [
  "Exploração do Inconsciente",
  "Equilíbrio Bio-Psico-Espiritual",
  "O Processo de Individuação",
];

export default function EbookTeaser() {
  return (
    <section id="ebook" className="relative overflow-hidden bg-bege py-16 md:py-28 scroll-mt-[88px]">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <SectionTitle title="Ebook" color="var(--roxo-escuro)" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
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
              <div data-anim="image" className="rotate-[3deg] max-w-[340px] md:max-w-[400px]">
                <Image
                  src="/imgs/livro.webp"
                  alt="Capa do ebook O Cultivo da Verdade Interna"
                  width={400}
                  height={533}
                  className="w-full h-auto object-contain drop-shadow-[0_24px_40px_rgba(45,22,5,0.25)]"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 lg:pl-14 xl:pl-20">
            <h3
              data-anim="lines"
              className="font-display font-normal text-display-md text-roxo-escuro px-2 -mx-2 max-w-[560px]"
            >
              O Cultivo da Verdade Interna
            </h3>
            <p
              data-anim="fade-up"
              className="mt-5 text-[18px] leading-[1.5] text-verde-escuro max-w-[460px]"
            >
              Um guia para quem busca iniciar ou aprofundar sua jornada de
              autoconhecimento através da perspectiva da psicologia analítica e das
              práticas integrativas.
            </p>

            <p className="mt-7 font-bold text-[18px] text-verde-escuro">
              O que encontrará neste ebook:
            </p>
            <div className="mt-2 flex flex-col" data-anim="stagger">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 text-[18px] text-verde-escuro py-1.5"
                >
                  <Sparkle size={16} className="text-roxo-claro" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap" data-anim="fade-up">
              <Button
                variant="purple"
                size="md"
                href="/ebook"
                leftIcon="box-arrow-up-right"
              >
                Adquirir Ebook
              </Button>
              <Button
                variant="outline-purple"
                size="md"
                href="/ebook"
                rightIcon="arrow-right"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
