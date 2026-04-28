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

          {/* 2. Photo with decoratives */}
          <div className="relative w-full max-w-[360px] mx-auto lg:max-w-none lg:mx-0 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative h-[380px] sm:h-[440px] overflow-hidden">
              <Image
                src="/imgs/sobre-mim/moldura 1.png"
                alt=""
                fill
                className="object-contain pointer-events-none"
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
            </div>

            {/* Decorativos */}
            <Image
              src="/imgs/sobre-mim/star 1.png"
              alt=""
              width={55}
              height={55}
              className="absolute -bottom-6 -left-6 pointer-events-none select-none hidden sm:block"
            />
            <Image
              src="/imgs/sobre-mim/paper 1.png"
              alt=""
              width={80}
              height={65}
              className="absolute -top-4 -right-6 pointer-events-none select-none hidden sm:block"
            />
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
