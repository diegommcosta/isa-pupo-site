import Image from "next/image";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

export default function Hero() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-8 pb-11 md:py-20"
      style={{ background: "rgba(237, 191, 159, 0.6)" }}
    >
      <div className="max-w-site mx-auto px-8 lg:px-[200px]">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center min-h-[480px]">

          {/* Texto */}
          <div data-animate-stagger="left" className="flex flex-col gap-0">
            <Tag className="self-start">Terapeuta Junguiana e Integrativa</Tag>
            <h1
              className="font-display font-normal leading-none text-verde-escuro mt-3"
              style={{ fontSize: "clamp(56px, 6vw, 80px)" }}
            >
              Isa Pupo
            </h1>
            <div
              className="mt-4 leading-[1.45] text-marrom space-y-[10px]"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 380 }}
            >
              <p>Olá, é um prazer ter você aqui!
                <br></br>
                Me chamo Isabella Pupo, mas você pode me chamar de Isa{" "}
                <span style={{ whiteSpace: "nowrap" }}>:)</span>
                <br></br>
                Sou Terapeuta especialista na abordagem Junguiana além de Terapeuta Integrativa.
                Atualmente em processo de formação em psicologia.</p>
            </div>
            <div className="mt-6 flex gap-2.5 flex-wrap">
              <Button
                variant="dark"
                size="sm"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon="chat"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline-dark"
                size="sm"
                href="/#sobre"
                rightIcon="arrow-right"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div data-animate-image="right" className="relative h-[320px] md:h-[480px] w-full order-first md:order-none justify-self-center md:justify-self-end max-w-[545px]">
            <Image
              src="/imgs/hero.webp"
              alt="Isa Pupo em blusa vermelha e calça branca com seu companheiro de quatro patas, Mike, rodeados por elementos de seu hobbie, como cristais, ervas, vinho, natureza."
              fill
              className="object-contain object-center md:object-right"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
