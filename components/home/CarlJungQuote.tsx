interface Props {
  quote?: string;
}

export default function CarlJungQuote({
  quote = "Quem olha para fora, sonha; quem olha para dentro, desperta.",
}: Props) {
  return (
    <section className="w-full bg-verde-escuro py-12">
      <div className="max-w-content mx-auto px-8 text-center">
        <p className="font-display text-[2rem] text-bege leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="font-sans text-base text-bege/70 mt-4">— Carl Jung</p>
      </div>
    </section>
  );
}
