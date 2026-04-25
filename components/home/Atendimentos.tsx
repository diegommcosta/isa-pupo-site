import Link from "next/link";
import Image from "next/image";

interface ServiceCard {
  icon?: string;
  title: string;
  description: string;
  href?: string;
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
  },
  {
    title: "Terapia Integrativa",
    description:
      "Integração de diferentes abordagens psicoterapêuticas para um cuidado personalizado e holístico, respeitando a singularidade de cada pessoa.",
    href: "/terapia/integrativa",
  },
  {
    title: "Psicoterapia Online",
    description:
      "Atendimento remoto com a mesma qualidade e presença do presencial, para que você possa cuidar de sua saúde mental de onde estiver.",
    href: "/#atendimentos",
  },
];

export default function Atendimentos({ cards = defaultCards }: Props) {
  return (
    <section id="atendimentos" className="w-full bg-bege py-20">
      <div className="max-w-site mx-auto px-[200px]">
        <h2 className="font-display text-title-atendimentos text-verde-escuro text-center mb-12">
          Atendimentos
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-bege-light rounded-lg p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-verde-escuro rounded-full flex items-center justify-center shrink-0">
                <Image
                  src="/imgs/cerebro_coracao 1.png"
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="font-sans font-bold text-card-title text-verde-escuro">
                {card.title}
              </h3>
              <p className="font-sans text-base text-marrom leading-relaxed flex-1">
                {card.description}
              </p>
              {card.href && (
                <Link
                  href={card.href}
                  className="font-sans text-base text-laranja underline hover:text-laranja/80 transition-colors self-start"
                >
                  Saiba mais →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
