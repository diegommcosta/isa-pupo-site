import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

const bullets = [
  "Exploração do Inconsciente",
  "Equilíbrio Bio-Psico-Espiritual",
  "O Processo de Individuação",
];

export default function EbookTeaser() {
  return (
    <section id="ebook" className="bg-bege pt-11 pb-16 md:py-20 scroll-mt-[55px] md:scroll-mt-0">
      <div className="max-w-site mx-auto px-8 lg:px-[200px]">
        <SectionTitle eyebrow="Ebook" />

        <div className="max-w-content mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          {/* Livro */}
          <div data-animate-image="left">
            <Image
              src="/imgs/livro.webp"
              alt="Capa do ebook O Cultivo da Verdade Interna"
              width={400}
              height={533}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Texto */}
          <div>
            <h2
              className="font-sans font-bold text-[48px] leading-[1.05] text-roxo-escuro"
              style={{ maxWidth: 420 }}
            >
              O Cultivo da Verdade Interna
            </h2>
            <p
              className="mt-[18px] text-[18px] leading-[1.45] text-verde-escuro"
              style={{ maxWidth: 420 }}
            >
              Um guia para quem busca iniciar ou aprofundar sua jornada de
              autoconhecimento através da perspectiva da psicologia analítica e das
              práticas integrativas.
            </p>

            <p className="mt-[22px] font-bold text-[18px] text-verde-escuro">
              O que encontrará neste ebook:
            </p>
            <div className="mt-1.5 flex flex-col">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 text-[18px] text-verde-escuro py-1.5"
                >
                  <Icon name="star-fill" size={16} color="var(--roxo-claro)" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-2.5 flex-wrap">
              <Button
                variant="purple"
                size="sm"
                href="/ebook"
                leftIcon="box-arrow-up-right"
              >
                Adquirir Ebook
              </Button>
              <Button
                variant="outline-purple"
                size="sm"
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
