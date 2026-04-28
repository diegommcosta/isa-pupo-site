import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";

interface Props {
  bio?: PortableTextBlock[] | null;
  photo?: { url?: string } | null;
}

export default function SobreMim({ bio, photo }: Props) {
  return (
    <section id="sobre" data-animate className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        {/*
          Grid mobile (1 col):  h2 → photo → text-block
          Grid desktop (2 col): photo (col1, rows 1-2) | h2 (col2, row1) + text-block (col2, row2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-x-16 lg:gap-y-6 lg:items-start">

          {/* 1. Section title */}
          <h2 className="font-sans text-sessions font-bold text-verde-escuro lg:col-start-2 lg:row-start-1">
            Sobre mim
          </h2>

          {/* 2. sobre mim.png — já inclui moldura dourada, foto e decorativos */}
          <div className="w-full max-w-[360px] mx-auto lg:max-w-none lg:mx-0 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            {photo?.url ? (
              <div className="relative h-[380px] sm:h-[440px] rounded-lg overflow-hidden">
                <Image src={photo.url} alt="Isabella Pupo" fill className="object-cover" />
              </div>
            ) : (
              <Image
                src="/imgs/sobre-mim/sobre mim.png"
                alt="Isabella Pupo"
                width={360}
                height={440}
                className="w-full h-auto object-contain"
              />
            )}
          </div>

          {/* 3. Text block */}
          <div className="lg:col-start-2 lg:row-start-2">
            <h3 className="font-sans text-titulos font-bold text-verde-escuro mb-4">
              Isa Pupo
            </h3>
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
      </div>
    </section>
  );
}
