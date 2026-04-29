import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function SobreMim() {
  return (
    <section id="sobre" data-animate className="bg-white py-16 md:py-20">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        <SectionTitle eyebrow="Sobre Mim" />

        <div className="max-w-content mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-[422px_1fr] gap-14 items-start">
          {/* Foto */}
          <div
            className="rounded-xl overflow-hidden mx-auto md:mx-0 w-full max-w-[422px]"
            style={{ aspectRatio: "422/561" }}
          >
            <Image
              src="/imgs/sobre-mim.png"
              alt="Isa Pupo"
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
            <div className="mt-6 text-[18px] leading-[1.55] text-marrom space-y-[14px]">
              <p>
                Uma mulher de alma curiosa, passos corajosos e em constante
                movimento. Minha trajetória é feita de escolhas e reencontros.
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
                Minha prática une o comprometimento do estudo acadêmico à sabedoria
                que vem da terra. Amo a natureza, sou apaixonada por ervas, cristais
                e pelo cheiro de incensos. Divido a vida com o <em>Mike</em>, meu
                companheiro de quatro patas — meu mestre mais lindo em afeto.
              </p>
              <p>
                Acredito que o autoconhecimento só ganha vida quando paramos de
                fugir de quem somos. Meu trabalho é caminhar ao seu lado,
                respeitando o seu tempo e ajudando você a ouvir a si mesmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
