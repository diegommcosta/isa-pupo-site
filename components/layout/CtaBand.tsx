import Image from "next/image";
import Button from "@/components/ui/Button";
import Sparkle from "@/components/ui/shapes/Sparkle";
import { buildWhatsappLink, defaultMessage } from "@/lib/whatsapp";

interface Props {
  message?: string;
}

export default function CtaBand({ message = defaultMessage }: Props) {
  const href = buildWhatsappLink(message);

  return (
    <section className="relative bg-marrom text-bege py-16 md:py-32 overflow-hidden">
      {/* Ilustração cerebro-lampada à direita, com parallax sutil */}
      <div
        className="absolute right-[4%] md:right-[8%] bottom-[12%] pointer-events-none select-none"
        data-anim="parallax"
        data-speed="0.95"
      >
        {/* Decorativa (opacity-30/70): alt vazio para leitores de tela pularem */}
        <Image
          src="/imgs/cerebro-lampada.webp"
          alt=""
          width={162}
          height={267}
          className="opacity-30 md:opacity-70 w-[120px] md:w-[162px] h-auto"
        />
      </div>

      <Sparkle
        size={20}
        className="absolute top-[14%] right-[18%] text-bege/60 animate-twinkle hidden md:block"
      />
      <Sparkle
        size={13}
        className="absolute bottom-[18%] left-[55%] text-rosa animate-twinkle [animation-delay:1.6s] hidden md:block"
      />

      <div className="relative max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[720px]">
          <h2
            className="font-display text-display-lg text-bege px-2 -mx-2"
            data-anim="lines"
          >
            Pronta para começar?
          </h2>
          <p
            className="mt-6 font-sans text-[19px] md:text-[21px] leading-[1.5] text-bege/90 max-w-[480px]"
            data-anim="fade-up"
          >
            Agende sua sessão e dê o primeiro passo na sua jornada de autoconhecimento.
          </p>
          <div className="mt-9" data-anim="fade-up">
            <Button
              variant="primary"
              size="lg"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon="whatsapp"
            >
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
