import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BulletRow } from "@/components/ui/BulletRow";
import CtaBand from "@/components/layout/CtaBand";
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
  return (
    <>
      {/* Hero branco */}
      <section className="bg-white pt-[104px] pb-16 md:pt-[128px] md:pb-20">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_422px] gap-x-14 gap-y-[30px] md:gap-y-0 items-start">
            <div>
              <Tag icon={data.tagIcon} iconColor="var(--verde-claro)" data-animate-tag>
                {data.tagText}
              </Tag>
              <h1 className="mt-5 font-sans font-bold text-[48px] leading-[1.05] text-verde-escuro">
                {data.title}
              </h1>
              <span className="block w-[73px] h-[3px] bg-laranja mt-[18px] mb-0 md:mb-[26px]" />
            </div>
            <div data-animate-image="right" className={cn("relative w-full rounded-[16px] overflow-hidden h-[560px] md:row-span-2", data.imageWrapperClassName)}>
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className={`object-${data.imageFit ?? "cover"} object-center`}
              />
            </div>
            <div>
              <p className="text-[18px] leading-[1.55] md:leading-[1.4] text-marrom max-w-[560px] mb-[26px]">
                {data.lead}
              </p>
              <h2 className="font-sans font-bold text-[24px] leading-[1.1] text-marrom mb-4">
                Como funciona
              </h2>
              <div className="text-[18px] leading-[1.55] md:leading-[1.4] text-marrom max-w-[560px] space-y-[14px]">
                {data.intro.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que esperar das sessões */}
      <section className="pt-11 pb-16 md:py-20" style={{ background: "rgba(237,191,159,0.6)" }}>
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <SectionTitle eyebrow="O que esperar das sessões" />
          <div
            data-animate-stagger
            className="max-w-content mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {data.sections.map((sec) => (
              <div
                key={sec.title}
                className="card-hover bg-bege-light rounded-[20px] p-6 flex flex-col gap-3.5"
              >
                <h3 className="font-sans font-bold text-[22px] leading-[1.15] text-verde-escuro">
                  {sec.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {sec.items.map((item, j) => (
                    <BulletRow
                      key={j}
                      icon={bulletIcon(sec.title)}
                      iconColor="var(--laranja)"
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

      <CtaBand message={data.whatsappMessage} />
    </>
  );
}
