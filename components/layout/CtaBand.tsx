import Image from "next/image";
import { MessageCircle } from "lucide-react";
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
    <section data-animate className="relative w-full bg-marrom overflow-hidden">
      <div className="relative max-w-site mx-auto px-4 md:px-8 lg:px-[200px] py-[40px] flex flex-col items-center text-center min-h-[267px] justify-center">

        {/* Decorative image — repositioned responsively, hidden on small screens */}
        <div className="absolute right-0 top-0 h-full w-[120px] lg:w-[162px] opacity-40 pointer-events-none select-none hidden md:block">
          <Image
            src="/imgs/cerebro_lampada 2.png"
            alt=""
            fill
            className="object-contain object-right"
          />
        </div>

        <h2 className="font-sans font-bold text-sessions text-bege relative z-10">
          Pronta para começar?
        </h2>
        <p className="font-sans text-descricao text-bege mt-3 max-w-[465px] leading-relaxed relative z-10">
          Agende sua sessão e dê o primeiro passo na sua jornada de
          autoconhecimento.
        </p>
        <div className="mt-6 relative z-10">
          <Button
            variant="filled"
            size="lg"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<MessageCircle size={18} />}
          >
            Agende sua Consulta
          </Button>
        </div>
      </div>
    </section>
  );
}
