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

          {/* hero.png — composição completa já com todos os elementos visuais */}
          <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:w-[480px] lg:h-[520px] shrink-0 order-2">
            <Image
              src="/imgs/hero/hero.png"
              alt="Isabella Pupo"
              width={480}
              height={520}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
