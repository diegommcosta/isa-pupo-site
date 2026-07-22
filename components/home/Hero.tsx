import Image from "next/image";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Sparkle from "@/components/ui/shapes/Sparkle";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

export default function Hero() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-bege-light">
      <div
        data-anim-group="hero"
        className="relative max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24 pt-[104px] md:pt-[136px] pb-14 lg:pb-8 lg:min-h-svh flex items-center"
      >
        {/* Sparkles decorativos */}
        <Sparkle
          size={22}
          className="absolute top-[16%] right-[8%] text-roxo-claro animate-twinkle hidden md:block"
        />
        <Sparkle
          size={14}
          className="absolute bottom-[14%] left-[6%] text-rosa animate-twinkle [animation-delay:1.2s] hidden md:block"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center w-full gap-6 lg:gap-0">
          {/* Imagem (colunas 6–13, sobreposta pelo título) */}
          <div className="relative order-first lg:order-none lg:col-start-6 lg:col-end-13 lg:row-start-1">
            <div
              data-hero="image"
              data-hero-order="4"
              className="relative h-[340px] md:h-[480px] lg:h-[640px] w-full"
            >
              <Image
                src="/imgs/hero.webp"
                alt="Isa Pupo em blusa vermelha e calça branca com seu companheiro de quatro patas, Mike, rodeados por elementos de seus hobbies, como cristais, ervas, vinho, natureza."
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain object-center lg:object-right"
                priority
              />
            </div>
          </div>

          {/* Texto (colunas 1–8; título cruza a borda da imagem) */}
          <div className="relative z-10 lg:col-start-1 lg:col-end-8 lg:row-start-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div data-hero="fade" data-hero-order="2">
              <Tag>Terapeuta Junguiana e Integrativa</Tag>
            </div>
            <div className="relative">
              <h1
                data-hero="lines"
                data-hero-order="1"
                className="font-display font-normal text-display-hero text-verde-escuro px-2 -mx-2 mt-4"
              >
                Isa Pupo
              </h1>
              <Sparkle
                size={20}
                className="absolute -top-1 right-0 md:-right-8 text-roxo-claro animate-twinkle [animation-delay:0.6s]"
              />
            </div>
            <div
              data-hero="fade"
              data-hero-order="3"
              className="mt-6 leading-[1.5] text-marrom space-y-[10px] text-[17px] md:text-[19px] max-w-[420px]"
            >
              <p>Olá, é um prazer ter você aqui!
                <br />
                Me chamo Isabella Pupo, mas você pode me chamar de Isa{" "}
                <span style={{ whiteSpace: "nowrap" }}>:)</span>
                <br />
                Sou Terapeuta especialista na abordagem Junguiana além de Terapeuta Integrativa.
                Atualmente em processo de formação em psicologia.</p>
            </div>
            <div data-hero="fade" data-hero-order="3" className="mt-8 flex gap-3 flex-wrap">
              <Button
                variant="primary"
                size="md"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon="whatsapp"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
