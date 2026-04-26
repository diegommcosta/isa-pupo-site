import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";

interface Props {
  bio?: PortableTextBlock[] | null;
  photo?: { url?: string } | null;
}

export default function SobreMim({ bio, photo }: Props) {
  return (
    <section id="sobre" className="w-full bg-bege-light py-20">
      <div className="max-w-site mx-auto px-[200px] flex items-center gap-16">
        {/* Photo with decorative frame */}
        <div className="relative shrink-0 w-[360px] h-[440px]">
          <Image
            src="/imgs/sobre-mim/moldura 1.png"
            alt=""
            fill
            className="object-contain"
          />
          <div className="absolute inset-6 overflow-hidden rounded-lg">
            {photo?.url ? (
              <Image src={photo.url} alt="Isabella Pupo" fill className="object-cover" />
            ) : (
              <Image
                src="/imgs/sobre-mim/sobre mim.png"
                alt="Isabella Pupo"
                fill
                className="object-cover"
              />
            )}
          </div>
          <Image
            src="/imgs/sobre-mim/star 1.png"
            alt=""
            width={55}
            height={55}
            className="absolute -bottom-6 -left-6 pointer-events-none"
          />
          <Image
            src="/imgs/sobre-mim/paper 1.png"
            alt=""
            width={80}
            height={65}
            className="absolute -top-4 -right-6 pointer-events-none"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="font-display text-title-atendimentos text-verde-escuro mb-6">
            Sobre mim
          </h2>
          {bio ? (
            <div className="font-sans text-descricao text-marrom space-y-4 leading-relaxed">
              <PortableText value={bio} />
            </div>
          ) : (
            <p className="font-sans text-descricao text-marrom leading-relaxed">
              Psicóloga com formação em Psicologia Analítica Jungiana e Terapia
              Integrativa. Acredito que cada pessoa carrega dentro de si os
              recursos necessários para sua transformação. Meu papel é acompanhar
              esse processo com escuta atenta, presença e cuidado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
