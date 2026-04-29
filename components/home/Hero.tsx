import Image from "next/image";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

export default function Hero() {
  const whatsapp = buildWhatsappLink(defaultMessage);

  return (
    <section
      id="hero"
      data-animate
      className="relative w-full overflow-hidden py-16 md:py-20"
      style={{ background: "rgba(237, 191, 159, 0.6)" }}
    >
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[480px]">

          {/* Texto */}
          <div className="flex flex-col gap-0">
            <Tag>Terapeuta Junguiana e Integrativa</Tag>
            <h1
              className="font-display font-normal leading-none text-marrom mt-5"
              style={{ fontSize: "clamp(44px, 6vw, 96px)" }}
            >
              Isa Pupo
            </h1>
            <div
              className="mt-6 leading-[1.45] text-marrom space-y-[10px]"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 440 }}
            >
              <p>Olá, é um prazer ter você aqui!</p>
              <p>
                Me chamo Isabella, mas você pode me chamar de Isa{" "}
                <span style={{ whiteSpace: "nowrap" }}>:)</span> Sou Terapeuta
                especialista na abordagem Junguiana além de Terapeuta Integrativa.
              </p>
              <p>Atualmente em processo de formação em psicologia.</p>
            </div>
            <div className="mt-8 flex gap-2.5 flex-wrap">
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
          <div className="relative h-[320px] md:h-[480px] w-full justify-self-end max-w-[545px]">
            <Image
              src="/imgs/hero.png"
              alt="Isabella Pupo"
              fill
              style={{ objectFit: "contain", objectPosition: "right center" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
