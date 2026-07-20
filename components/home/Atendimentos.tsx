import { SectionTitle } from "@/components/ui/SectionTitle";
import { IconDisc } from "@/components/ui/IconDisc";
import { BulletRow } from "@/components/ui/BulletRow";
import Button from "@/components/ui/Button";
import { buildWhatsappLink } from "@/lib/whatsapp";
import type { IconName } from "@/components/ui/Icon";

interface CardData {
  icon: IconName;
  title: string;
  body: string;
  bullets: string[];
  whatsappMsg: string;
  href: string;
}

const cards: CardData[] = [
  {
    icon: "moon-stars-fill",
    title: "Terapia Junguiana",
    body: "Um mergulho profundo no autoconhecimento para integrar o que foi vivido e sustentar uma relação mais consciente a vida.",
    bullets: [
      "Análise de sonhos e símbolos",
      "Integração de corpo, mente e alma",
      "Processo de individuação",
    ],
    whatsappMsg: "Olá Isa! Gostaria de saber mais sobre a Terapia Junguiana.",
    href: "/terapia/jungiana",
  },
  {
    icon: "stars",
    title: "Terapia Integrativa",
    body: "Uma abordagem que unifica corpo, mente e espiritualidade com muita responsabilidade, trazendo presença e sensibilidade para auxiliar no seu processo de cura.",
    bullets: [
      "Foco no bem estar e conexão",
      "Harmonização corpo e mente",
      "Atendimento personalizado",
    ],
    whatsappMsg: "Olá Isa! Gostaria de saber mais sobre a Terapia Integrativa.",
    href: "/terapia/integrativa",
  },
];

export default function Atendimentos() {
  return (
    <section id="atendimentos" className="relative overflow-hidden bg-verde-escuro py-8 md:py-14 scroll-mt-[88px]">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <SectionTitle title="Atendimentos" color="var(--bege)" />

        <div
          data-anim="stagger"
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[960px] mx-auto items-stretch"
        >
          {cards.map((card, i) => (
            // Respiro orgânico sutil: o 2º card desce ~24px no desktop via `top`
            // (relative). Não muda a altura da caixa nem colide com o transform do
            // GSAP (stagger anima y) ou do card-hover; cards seguem do mesmo tamanho.
            <div
              key={card.title}
              className={i === 1 ? "h-full relative md:top-6" : "h-full"}
            >
            <div
              className="card-hover relative w-full max-w-[460px] mx-auto h-full bg-bege-light rounded-card overflow-hidden flex flex-col p-8 md:p-10"
              style={{ minHeight: 480 }}
            >
              {/* Watermark decorativa cerebro-coracao */}
              <div
                aria-hidden
                className="absolute pointer-events-none opacity-55"
                style={{
                  left: 63,
                  top: 15,
                  width: 286,
                  height: 450,
                  background: "url(/imgs/cerebro-coracao.webp) center/contain no-repeat",
                }}
              />

              <div className="relative flex-1">
                <IconDisc icon={card.icon} />
                <h3 className="mt-4 mb-[10px] font-sans font-bold text-[26px] leading-snug text-marrom tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[17px] leading-[1.45] text-marrom max-w-[320px]">
                  {card.body}
                </p>
                <div className="mt-[18px] flex flex-col gap-2">
                  {card.bullets.map((b) => (
                    <BulletRow key={b} icon="logo-bullet" iconColor="var(--verde-claro)" textColor="var(--marrom)">
                      {b}
                    </BulletRow>
                  ))}
                </div>
              </div>

              <div className="relative mt-5 flex gap-2.5 flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  href={buildWhatsappLink(card.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon="whatsapp"
                >
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline-dark"
                  size="md"
                  href={card.href}
                  rightIcon="arrow-right"
                >
                  Saiba mais
                </Button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
