import Image from "next/image";
import { MoonStar, Stars } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsappLink } from "@/lib/whatsapp";

interface ServiceCard {
  title: string;
  description: string;
  href?: string;
  whatsappMessage?: string;
  icon: "jungiana" | "integrativa";
}

interface Props {
  cards?: ServiceCard[];
}

const defaultCards: ServiceCard[] = [
  {
    title: "Terapia Jungiana",
    description:
      "Abordagem profunda baseada na Psicologia Analítica de Carl Gustav Jung, explorando o inconsciente, sonhos e a jornada de individuação.",
    href: "/terapia/jungiana",
    whatsappMessage: "Olá Isa! Gostaria de agendar uma consulta de Terapia Jungiana.",
    icon: "jungiana",
  },
  {
    title: "Terapia Integrativa",
    description:
      "Integração de diferentes abordagens psicoterapêuticas para um cuidado personalizado e holístico, respeitando a singularidade de cada pessoa.",
    href: "/terapia/integrativa",
    whatsappMessage: "Olá Isa! Gostaria de agendar uma consulta de Terapia Integrativa.",
    icon: "integrativa",
  },
];

function CardIcon({ type }: { type: ServiceCard["icon"] }) {
  const Icon = type === "jungiana" ? MoonStar : Stars;
  return (
    <div className="w-11 h-11 bg-bege rounded-full flex items-center justify-center shrink-0">
      <Icon size={24} className="text-marrom" />
    </div>
  );
}

export default function Atendimentos({ cards = defaultCards }: Props) {
  return (
    <section id="atendimentos" data-animate className="w-full bg-verde-escuro py-20">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        <h2 className="font-sans font-bold text-sessions text-bege text-center mb-2">
          Atendimentos
        </h2>
        <div className="w-16 h-1 bg-laranja mx-auto mb-12 rounded-full" />

        <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="card-40 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              {/* cerebro_coracao 1.png como fundo decorativo do card */}
              <Image
                src="/imgs/cerebro_coracao 1.png"
                alt=""
                width={180}
                height={180}
                className="absolute bottom-0 right-0 opacity-10 pointer-events-none select-none"
              />
              <CardIcon type={card.icon} />

              <h3 className="font-sans font-bold text-[2rem] text-marrom leading-tight">
                {card.title}
              </h3>

              <p className="font-sans text-descricao text-marrom leading-relaxed flex-1">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {card.whatsappMessage && (
                  <Button
                    variant="filled"
                    size="sm"
                    href={buildWhatsappLink(card.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar
                  </Button>
                )}
                {card.href && (
                  <Button variant="outlined" size="sm" href={card.href}>
                    Saiba mais
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
