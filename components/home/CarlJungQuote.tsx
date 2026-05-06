import Image from "next/image";

export default function CarlJungQuote() {
  return (
    <section
      className="relative overflow-hidden bg-roxo-escuro pt-11 pb-12 md:py-16 px-6 flex items-center justify-center"
      style={{ minHeight: 350 }}
    >
      {/* Ilustração decorativa centralizada atras do texto */}
      <Image
        src="/imgs/cerebro-coracao-flores.webp"
        alt="Metade esquerda cerébro, metade direita coração, ambos envoltos de flores."
        width={240}
        height={308}
        className="absolute left-1/2 top-[21px] -translate-x-1/2 opacity-35 pointer-events-none select-none"
      />

      {/* Citação */}
      <blockquote data-animate-up className="relative z-10 text-center text-bege max-w-[880px] mx-auto">
        <p className="font-sans font-bold text-[22px] md:text-[30px] leading-[1.4]">
          &ldquo;Quem olha para fora sonha, quem olha para dentro, desperta.&rdquo;
        </p>
        <footer className="mt-[8px] not-italic text-[16px] opacity-85">- Carl Jung</footer>
      </blockquote>
    </section>
  );
}
