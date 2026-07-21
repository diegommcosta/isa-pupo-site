import Image from "next/image";
import Sparkle from "@/components/ui/shapes/Sparkle";

export default function CarlJungQuote() {
  return (
    <section className="relative overflow-hidden bg-roxo-escuro py-10 md:py-20">
      {/* Ilustração à direita, dimensionada pela altura da seção (inset-y dá a
          folga do parallax ±12px) — nunca é cortada pelo overflow-hidden.
          O max() trava o right na borda do container max-w-site (1440px +
          px-24) em monitores largos, mantendo o desenho alinhado à página. */}
      <div
        className="absolute inset-y-3 md:inset-y-4 right-[4%] md:right-[max(6%,calc((100%-1440px)/2+96px))] flex items-center pointer-events-none select-none"
        data-anim="parallax"
        data-speed="0.97"
      >
        {/* Decorativa (opacity-25): alt vazio para leitores de tela pularem */}
        <Image
          src="/imgs/cerebro-coracao-flores.webp"
          alt=""
          width={240}
          height={308}
          className="h-full w-auto opacity-25"
        />
      </div>

      <Sparkle
        size={16}
        className="absolute top-[18%] left-[8%] text-bege/60 animate-twinkle"
      />

      <div className="relative max-w-site mx-auto px-6 md:px-10 lg:px-16">
        <blockquote className="relative max-w-[900px] lg:ml-[10%]">
          {/* Frase longa: Amaranth Bold (Regra da Berliana Curta), não Berliana */}
          <p
            data-anim="lines"
            className="relative font-sans font-bold text-[clamp(24px,3.2vw,34px)] leading-[1.3] text-bege px-2 -mx-2"
          >
            &ldquo;Quem olha para fora sonha, quem olha para dentro, desperta.&rdquo;
          </p>
          <footer
            data-anim="fade-up"
            className="mt-7 not-italic font-sans text-[18px] text-bege/80"
          >
            - Carl Jung
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
