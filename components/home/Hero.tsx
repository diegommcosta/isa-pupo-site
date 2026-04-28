import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({
  title = "Isa Pupo",
  subtitle = "Psicoterapia Jungiana & Integrativa",
  description = "Um espaço de acolhimento e profundidade para cuidar da sua jornada interior.",
}: Props) {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <section
      id="hero"
      data-animate
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "rgba(237, 191, 159, 0.6)" }}
    >
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px] py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* Text block */}
          <div className="flex-1 z-10 flex flex-col gap-4 order-1">
            <Tag>{subtitle}</Tag>
            <h1 className="font-display text-title-hero text-verde-escuro leading-tight">
              {title}
            </h1>
            <p className="font-sans text-descricao text-marrom max-w-md">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button
                variant="filled"
                size="md"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Agendar consulta
              </Button>
              <Button
                variant="outlined"
                size="md"
                href="/#sobre"
                rightIcon={<ArrowRight size={18} />}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Photo composition */}
          <div className="relative w-full h-[300px] sm:h-[420px] lg:w-[480px] lg:h-[580px] shrink-0 order-2">

            {/* Céu (fundo) */}
            <Image
              src="/imgs/hero/ceu_hero 1.png"
              alt=""
              width={480}
              height={280}
              className="absolute top-0 left-0 w-full pointer-events-none select-none"
            />

            {/* Foto da Isa */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/imgs/hero/isa_hero 1.png"
                alt="Isabella Pupo"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Decorativos — visíveis apenas em telas maiores */}
            <Image
              src="/imgs/hero/cristal_rosa_hero 1.png"
              alt=""
              width={85}
              height={130}
              className="absolute top-14 left-4 z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/cristal_roxo_hero 1.png"
              alt=""
              width={100}
              height={82}
              className="absolute top-8 right-6 z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/vinho_hero 1.png"
              alt=""
              width={72}
              height={108}
              className="absolute top-[200px] -right-2 z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/arruda 2.png"
              alt=""
              width={80}
              height={140}
              className="absolute bottom-[150px] left-2 z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/borboleta_hero 1.png"
              alt=""
              width={48}
              height={48}
              className="absolute top-[95px] right-[110px] z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/star_hero 1.png"
              alt=""
              width={28}
              height={28}
              className="absolute top-[185px] left-[105px] z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/paper_hero 1.png"
              alt=""
              width={200}
              height={55}
              className="absolute bottom-[85px] left-2 z-20 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/hero/manjericao 1.png"
              alt=""
              width={165}
              height={185}
              className="absolute -bottom-4 left-[38%] -translate-x-1/2 z-30 pointer-events-none select-none hidden sm:block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
