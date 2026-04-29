import Image from "next/image";

export default function CarlJungQuote() {
  return (
    <section
      data-animate
      className="relative overflow-hidden bg-roxo-escuro py-12 md:py-16 px-6 flex items-center justify-center"
      style={{ minHeight: 350 }}
    >
      {/* Ilustração decorativa centralizada no topo */}
      <Image
        src="/imgs/cerebro-coracao-flores.png"
        alt=""
        aria-hidden
        width={240}
        height={308}
        className="absolute left-1/2 top-[21px] -translate-x-1/2 opacity-35 pointer-events-none select-none"
      />

      {/* Citação */}
      <blockquote className="relative z-10 text-center text-bege max-w-[880px] mx-auto">
        <p className="font-sans font-normal italic text-[18px] md:text-[22px] leading-[1.4]">
          &ldquo;Quem olha para fora, sonha; quem olha para dentro, desperta.&rdquo;
        </p>
        <footer className="mt-[14px] not-italic text-[16px] opacity-85">— Carl Jung</footer>
      </blockquote>
    </section>
  );
}
