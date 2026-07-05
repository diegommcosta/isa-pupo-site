import Image from "next/image";
import Sparkle from "@/components/ui/shapes/Sparkle";

export default function CarlJungQuote() {
  return (
    <section className="relative overflow-hidden bg-roxo-escuro py-16 md:py-28">
      {/* Ilustração deslocada à direita com parallax sutil */}
      <div
        className="absolute right-[4%] md:right-[6%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        data-anim="parallax"
        data-speed="0.85"
      >
        <Image
          src="/imgs/cerebro-coracao-flores.webp"
          alt="Metade esquerda cerébro, metade direita coração, ambos envoltos de flores."
          width={240}
          height={308}
          className="w-[180px] md:w-[280px] h-auto opacity-25"
        />
      </div>

      <Sparkle
        size={16}
        className="absolute top-[18%] left-[8%] text-bege/60 animate-twinkle"
      />

      <div className="relative max-w-site mx-auto px-6 md:px-10 lg:px-16">
        <blockquote className="relative max-w-[900px] lg:ml-[10%]">
          <span
            aria-hidden="true"
            className="absolute -top-10 -left-3 md:-top-16 md:-left-6 font-display text-[110px] md:text-[180px] leading-none text-roxo-claro/60 select-none pointer-events-none"
          >
            &ldquo;
          </span>
          <p
            data-anim="lines"
            className="relative font-display text-display-lg leading-[1.12] text-bege px-2 -mx-2"
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
