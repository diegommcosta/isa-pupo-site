import Image from "next/image";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function Hero({
  title = "Isa Pupo",
  subtitle = "Psicoterapia Jungiana & Integrativa",
}: Props) {
  return (
    <section className="relative w-full bg-bege-hero overflow-hidden min-h-[600px]">
      <div className="relative max-w-site mx-auto px-[200px] py-16 flex items-center gap-12">
        {/* Text side */}
        <div className="flex-1 z-10">
          <h1 className="font-display text-title-hero text-verde-escuro leading-tight">
            {title}
          </h1>
          <p className="font-sans text-descricao text-marrom mt-4 max-w-[480px]">
            {subtitle}
          </p>
          <a
            href={buildWhatsappLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-laranja text-bege font-sans text-base px-6 py-3 rounded-[5px] hover:bg-laranja/90 transition-colors"
          >
            Agende sua Consulta
          </a>
        </div>

        {/* Hero image */}
        <div className="relative w-[420px] h-[560px] shrink-0">
          <Image
            src="/imgs/hero/isa_hero 1.png"
            alt="Isabella Pupo"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Decorative elements */}
        <Image
          src="/imgs/hero/cristal_rosa_hero 1.png"
          alt=""
          width={80}
          height={120}
          className="absolute top-8 right-[240px] pointer-events-none select-none"
        />
        <Image
          src="/imgs/hero/cristal_roxo_hero 1.png"
          alt=""
          width={60}
          height={100}
          className="absolute bottom-12 right-[280px] pointer-events-none select-none"
        />
        <Image
          src="/imgs/hero/borboleta_hero 1.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-20 left-[180px] pointer-events-none select-none"
        />
        <Image
          src="/imgs/hero/star_hero 1.png"
          alt=""
          width={30}
          height={30}
          className="absolute top-32 right-[320px] pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
