import Image from "next/image";

interface Props {
  quote?: string;
}

export default function CarlJungQuote({
  quote = "Quem olha para fora, sonha; quem olha para dentro, desperta.",
}: Props) {
  return (
    <section data-animate className="w-full bg-roxo-escuro py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-8">
        <blockquote>
          <p className="font-sans text-2xl md:text-3xl lg:text-[2rem] text-bege leading-snug italic">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="font-sans text-base text-bege/70 mt-4">— Carl Jung</footer>
        </blockquote>

        <Image
          src="/imgs/cerebro_coracao_flores 1.png"
          alt=""
          width={310}
          height={220}
          className="pointer-events-none select-none w-full max-w-[310px] h-auto"
        />
      </div>
    </section>
  );
}
