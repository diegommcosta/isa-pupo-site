import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CtaBand from "@/components/layout/CtaBand";
import type { TherapyPage as TherapyPageType } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

const defaultFeatures = [
  {
    title: "Autoconhecimento",
    body: "Processo de exploração do inconsciente e suas manifestações na vida cotidiana.",
  },
  {
    title: "Integração",
    body: "Integração das partes da psique para uma vida mais plena e autêntica.",
  },
  {
    title: "Transformação",
    body: "Acompanhamento cuidadoso nos momentos de crise e transição.",
  },
];

interface Props {
  therapy: TherapyPageType | null;
  slug: string;
}

export default function TherapyPage({ therapy, slug }: Props) {
  const heroUrl = therapy?.heroImage
    ? urlFor(therapy.heroImage).width(1440).height(500).url()
    : `/imgs/pag_terapia_${slug === "jungiana" ? "jungiana" : "integrativa"}.png`;

  const features = therapy?.features ?? defaultFeatures;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[360px] bg-verde-escuro overflow-hidden">
        <Image src={heroUrl} alt={therapy?.title ?? "Terapia"} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          {therapy?.tag && (
            <span className="font-sans text-bege text-base bg-laranja px-3 py-1 rounded mb-4">
              {therapy.tag}
            </span>
          )}
          <h1 className="font-display text-title-hero text-bege">
            {therapy?.title ?? (slug === "jungiana" ? "Terapia Jungiana" : "Terapia Integrativa")}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-bege-light py-16">
        <div className="max-w-content mx-auto px-8">
          {therapy?.intro ? (
            <div className="font-sans text-descricao text-marrom leading-relaxed prose max-w-none">
              <PortableText value={therapy.intro} />
            </div>
          ) : (
            <p className="font-sans text-descricao text-marrom leading-relaxed text-center max-w-2xl mx-auto">
              {slug === "jungiana"
                ? "A Psicologia Analítica, desenvolvida por Carl Gustav Jung, explora as profundezas do inconsciente para promover autoconhecimento e transformação."
                : "A Terapia Integrativa combina diferentes abordagens psicoterapêuticas para oferecer um cuidado completo e personalizado."}
            </p>
          )}
        </div>
      </section>

      {/* Como funciona */}
      <section className="w-full bg-bege py-16">
        <div className="max-w-content mx-auto px-8">
          <h2 className="font-sans font-bold text-sessions text-verde-escuro mb-8">
            Como funciona
          </h2>
          {therapy?.comoFunciona ? (
            <div className="font-sans text-descricao text-marrom leading-relaxed prose max-w-none">
              <PortableText value={therapy.comoFunciona} />
            </div>
          ) : (
            <p className="font-sans text-descricao text-marrom leading-relaxed">
              As sessões são individuais, com frequência semanal ou quinzenal, e
              duram aproximadamente 50 minutos. O processo terapêutico é
              construído de forma colaborativa, respeitando o ritmo e as
              necessidades de cada pessoa.
            </p>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-bege-light py-16">
        <div className="max-w-site mx-auto px-[200px]">
          <div className="grid grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-bege rounded-lg p-8 flex flex-col gap-3">
                <h3 className="font-sans font-bold text-card-title text-verde-escuro">
                  {f.title}
                </h3>
                <p className="font-sans text-base text-marrom leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand message={`Olá Isa! Gostaria de saber mais sobre ${therapy?.title ?? "terapia"}.`} />
    </>
  );
}
