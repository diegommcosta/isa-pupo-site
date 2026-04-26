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
    <section className="relative w-full bg-bege-hero overflow-hidden min-h-[620px]">
      <div className="relative max-w-site mx-auto px-[200px] py-16 flex items-center gap-12">

        {/* Text side */}
        <div className="flex-1 z-10">
          <p className="font-sans text-base text-verde-escuro uppercase tracking-widest mb-3">
            {subtitle}
          </p>
          <h1 className="font-display text-title-hero text-verde-escuro leading-tight">
            {title}
          </h1>
          <a
            href={buildWhatsappLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-laranja text-bege font-sans text-base px-6 py-3 rounded-[5px] hover:bg-laranja/90 transition-colors"
          >
            Agende sua Consulta
          </a>
        </div>

        {/* Photo composition */}
        <div className="relative w-[480px] h-[580px] shrink-0">

          {/* Camada 1 — céu (fundo) */}
          <Image
            src="/imgs/hero/ceu_hero 1.png"
            alt=""
            width={480}
            height={280}
            className="absolute top-0 left-0 w-full pointer-events-none select-none"
          />

          {/* Camada 2 — foto da Isa */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/imgs/hero/isa_hero 1.png"
              alt="Isabella Pupo"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Camada 3 — elementos decorativos */}
          <Image
            src="/imgs/hero/cristal_rosa_hero 1.png"
            alt=""
            width={85}
            height={130}
            className="absolute top-14 left-4 z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/cristal_roxo_hero 1.png"
            alt=""
            width={100}
            height={82}
            className="absolute top-8 right-6 z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/vinho_hero 1.png"
            alt=""
            width={72}
            height={108}
            className="absolute top-[200px] -right-2 z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/arruda 2.png"
            alt=""
            width={80}
            height={140}
            className="absolute bottom-[150px] left-2 z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/borboleta_hero 1.png"
            alt=""
            width={48}
            height={48}
            className="absolute top-[95px] right-[110px] z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/star_hero 1.png"
            alt=""
            width={28}
            height={28}
            className="absolute top-[185px] left-[105px] z-20 pointer-events-none select-none"
          />
          <Image
            src="/imgs/hero/paper_hero 1.png"
            alt=""
            width={200}
            height={55}
            className="absolute bottom-[85px] left-2 z-20 pointer-events-none select-none"
          />

          {/* Camada 4 — manjericão na frente de tudo */}
          <Image
            src="/imgs/hero/manjericao 1.png"
            alt=""
            width={165}
            height={185}
            className="absolute -bottom-4 left-[38%] -translate-x-1/2 z-30 pointer-events-none select-none"
          />
        </div>

      </div>
    </section>
  );
}
