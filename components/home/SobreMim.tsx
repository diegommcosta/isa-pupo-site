import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function SobreMim() {
  return (
    <section id="sobre" className="bg-white pt-11 pb-16 md:py-20 scroll-mt-[88px]">
      <div className="max-w-site mx-auto px-8 lg:px-[200px]">
        <SectionTitle eyebrow="Sobre Mim" />

        <div className="max-w-content mx-auto mt-[25px] md:mt-[50px] grid grid-cols-1 md:grid-cols-[422px_1fr] gap-7 md:gap-14 items-start">
          {/* Foto */}
          <div
            data-animate-image="left"
            className="rounded-xl overflow-hidden mx-auto md:mx-0 w-full max-w-[422px]"
            style={{ aspectRatio: "422/561" }}
          >
            <Image
              src="/imgs/sobre-mim.webp"
              alt="Quadro com elementos de colagem em volta, com a foto da Isa Pupo feliz em blusa vermelha e calça branca, num fundo marrom com elementos naturais."
              width={422}
              height={561}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="font-sans font-bold text-[48px] leading-none text-verde-escuro">
              Isa Pupo
            </h2>
            <div className="mt-4 text-[18px] leading-[1.30] text-marrom space-y-[14px]">
              <p>
                <em>Uma mulher de alma curiosa, passos corajosos e em constante
                  movimento.</em> <span className="text-laranja">Minha trajetória é feita de escolhas e reencontros.</span>
              </p>
              <p>
                Sou graduada em Ciências Contábeis e, entre razonetes e planilhas
                nos dez anos que passei no mundo corporativo, percebi que aquele
                espaço não me pertencia mais. Recalculei minhas rotas e,
                atualmente, mergulho na clínica através da minha especialização em{" "}
                <strong>Psicologia Analítica (Jung)</strong> e sigo no processo de
                graduação em Psicologia (2026).
              </p>
              <p>
                Minha prática une comprometimento do estudo acadêmico à sabedoria que vem da terra. Amo a natureza e os mistérios da vida, sou apaixonada por ervas e confesso: um galhinho de arruda atrás da orelha e um maço de manjericão têm o meu coração. Amo o cheiro de incensos, cristais e o prazer de uma taça de vinho com o meu parceiro no fim do dia.
              </p>

              <p>
                Divido a vida com o <em>Mike</em>, meu companheiro de quatro patas e o meu mestre mais lindo em afeto e amor. Sou viciada em aprender sobre psicologia e espiritualidade e em observar como cada detalhe do mundo toca a nossa subjetividade.
              </p>

              <p>
                Acredito que o autoconhecimento só ganha vida quando paramos de fugir de quem somos. Meu trabalho é caminhar ao seu lado, respeitando o seu tempo e ajudando você a ouvir a si mesmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}