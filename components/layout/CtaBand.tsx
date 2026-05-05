import Image from "next/image";
import Button from "@/components/ui/Button";
import { buildWhatsappLink } from "@/lib/whatsapp";

interface Props {
  message?: string;
}

export default function CtaBand({
  message = "Olá Isa! Gostaria de agendar uma consulta.",
}: Props) {
  const href = buildWhatsappLink(message);

  return (
    <section
      data-animate
      className="relative bg-marrom text-bege py-12 md:py-16 text-center overflow-hidden"
    >
      {/* Ilustração cerebro-lampada centralizada no topo */}
      <Image
        src="/imgs/cerebro-lampada.png"
        alt=""
        aria-hidden
        width={162}
        height={267}
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-90 pointer-events-none select-none"
      />

      <div className="relative max-w-site mx-auto px-8 lg:px-[200px]">
        <h2 className="font-sans font-bold text-[32px] leading-none text-bege">
          Pronta para começar?
        </h2>
        <p
          className="mt-[14px] text-[20px] leading-[1.35] text-bege mx-auto"
          style={{ opacity: 0.95, maxWidth: 440 }}
        >
          Agende sua sessão e dê o primeiro passo na sua jornada de autoconhecimento.
        </p>
        <div className="mt-[22px] flex justify-center">
          <Button
            variant="primary"
            size="sm"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon="chat"
          >
            Agende sua Consulta
          </Button>
        </div>
      </div>
    </section>
  );
}
