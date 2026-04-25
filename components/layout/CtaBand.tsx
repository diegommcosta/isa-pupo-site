import Image from "next/image";
import { buildWhatsappLink } from "@/lib/whatsapp";

interface Props {
  message?: string;
}

export default function CtaBand({
  message = "Olá Isa! Gostaria de agendar uma consulta.",
}: Props) {
  const href = buildWhatsappLink(message);

  return (
    <section className="relative w-full bg-marrom overflow-hidden">
      <div className="relative max-w-site mx-auto px-[200px] py-[40px] flex flex-col items-center text-center min-h-[267px] justify-center">
        {/* Decorative image */}
        <div className="absolute left-[calc(41.67%+28px)] top-0 h-full w-[162px] opacity-40 pointer-events-none select-none">
          <Image
            src="/imgs/cerebro_lampada 2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <h2 className="font-sans font-bold text-sessions text-bege relative z-10 whitespace-nowrap">
          Pronta para começar?
        </h2>
        <p className="font-sans text-descricao text-bege line-through mt-3 max-w-[465px] leading-[22px] relative z-10">
          Agende sua sessão e dê o primeiro passo na sua jornada de
          autoconhecimento
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-laranja text-bege text-base px-3 py-1.5 rounded-[5px] hover:bg-laranja/90 transition-colors relative z-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          Agende sua Consulta
        </a>
      </div>
    </section>
  );
}
