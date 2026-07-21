import Image from "next/image";
import BackLink from "@/components/ui/BackLink";
import Tag from "@/components/ui/Tag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BulletRow } from "@/components/ui/BulletRow";
import CtaBand from "@/components/layout/CtaBand";
import Blob from "@/components/ui/shapes/Blob";
import Sparkle from "@/components/ui/shapes/Sparkle";
import WaveDivider from "@/components/ui/shapes/WaveDivider";
import { cn } from "@/lib/utils";
import type { TherapyData } from "@/lib/content/therapy";
import type { IconName } from "@/components/ui/Icon";

function bulletIcon(sectionTitle: string): IconName {
  if (sectionTitle === "Benefícios") return "check2";
  if (sectionTitle === "Para quem é indicado") return "people";
  return "logo-bullet";
}

interface Props {
  data: TherapyData;
}

export default function TherapyPage({ data }: Props) {
  const isContain = data.imageFit === "contain";

  return (
    <>
      {/* Hero editorial */}
      <section className="relative overflow-hidden bg-bege-light pt-[104px] md:pt-[136px] pb-8 md:pb-12">
        <Sparkle
          size={16}
          className="absolute top-[14%] right-[6%] text-roxo-claro animate-twinkle hidden md:block"
        />
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start">
            {/* Texto */}
            <div className="lg:col-span-6 lg:pr-12">
              <div className="mb-[14px]">
                <BackLink href="/#atendimentos">voltar para atendimentos</BackLink>
              </div>
              <div data-anim="fade-up">
                <Tag icon={data.tagIcon} iconColor="var(--verde-claro)">
                  {data.tagText}
                </Tag>
              </div>
              <div className="relative">
                <h1
                  data-anim="lines"
                  className="font-display font-normal text-display-xl text-verde-escuro px-2 -mx-2 mt-4"
                >
                  {data.title}
                </h1>
                <Sparkle
                  size={22}
                  className="absolute -bottom-2 right-[8%] text-laranja animate-twinkle hidden lg:block"
                />
              </div>
              <p
                data-anim="fade-up"
                className="mt-7 text-[19px] md:text-[20px] leading-[1.55] text-marrom max-w-[560px]"
              >
                {data.lead}
              </p>
              <h2 className="mt-9 mb-4 font-sans font-bold text-[24px] md:text-[26px] leading-[1.1] text-marrom">
                Como funciona
              </h2>
              <div
                data-anim="fade-up"
                className="text-[17px] md:text-[18px] leading-[1.55] text-marrom max-w-[560px] space-y-[14px]"
              >
                {data.intro.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Imagem — no modo contain (colagem com transparência) o fade é no
                bloco inteiro (blob + imagem juntos), para o blob não vazar
                através das fotos durante a entrada */}
            <div
              className="relative lg:col-span-6 lg:sticky lg:top-[104px]"
              {...(isContain ? { "data-anim": "fade-up" } : {})}
            >
              {isContain && (
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  data-anim="parallax"
                  data-speed="0.93"
                >
                  <Blob variant={2} color="text-bege" className="w-[92%] max-w-[560px]" />
                </div>
              )}
              <div
                {...(isContain ? {} : { "data-anim": "image" })}
                className={cn(
                  "relative w-full",
                  isContain
                    ? cn("h-[480px] md:h-[644px]", data.imageWrapperClassName)
                    : "rounded-blob-soft overflow-hidden h-[420px] md:h-[560px] lg:h-[640px]"
                )}
              >
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  className={`object-${data.imageFit ?? "cover"} object-center`}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="bg-bege-light" to="text-verde-escuro" variant="organic" />

      {/* O que esperar das sessões — bloco escuro */}
      <section className="relative overflow-hidden bg-verde-escuro py-10 md:py-14">
        <Sparkle
          size={14}
          className="absolute top-[12%] right-[12%] text-bege/50 animate-twinkle"
        />
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <SectionTitle title="O que esperar das sessões" color="var(--bege)" />
          <div
            data-anim="stagger"
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-7 items-start"
          >
            {data.sections.map((sec, i) => (
              // Alturas naturais (tamanhos diferentes) nas páginas de terapia:
              // sem h-full/stretch; o card do meio desce via lg:mt-12.
              <div
                key={sec.title}
                className={cn(
                  "card-hover bg-bege-light rounded-card p-7 md:p-8 flex flex-col gap-4",
                  i === 1 && "lg:mt-12"
                )}
              >
                <h3 className="font-sans font-bold text-[20px] leading-[1.15] text-verde-escuro">
                  {sec.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {sec.items.map((item, j) => (
                    <BulletRow
                      key={j}
                      icon={bulletIcon(sec.title)}
                      textColor="var(--marrom)"
                      size={15}
                    >
                      {item}
                    </BulletRow>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="bg-verde-escuro" to="text-marrom" variant="soft" flip />
      <CtaBand message={data.whatsappMessage} />
      <WaveDivider from="bg-marrom" to="text-verde-escuro" variant="organic" />
    </>
  );
}
