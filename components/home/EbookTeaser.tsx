import Image from "next/image";
import Link from "next/link";

interface Props {
  teaser?: string;
}

export default function EbookTeaser({
  teaser = "Um guia completo para sua jornada de autoconhecimento",
}: Props) {
  return (
    <section id="ebook" className="w-full bg-roxo-escuro py-20">
      <div className="max-w-site mx-auto px-[200px] flex items-center gap-16">
        {/* Book cover */}
        <div className="relative shrink-0 w-[240px] h-[320px]">
          <Image
            src="/imgs/livro.png"
            alt="Ebook Isa Pupo"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="font-sans font-bold text-mini-title text-bege uppercase tracking-wider mb-2">
            Ebook
          </p>
          <h2 className="font-display text-title-atendimentos text-bege mb-4">
            Psicologia Analítica Jungiana
          </h2>
          <p className="font-sans text-descricao text-bege/90 leading-relaxed mb-8">
            {teaser}
          </p>
          <Link
            href="/ebook"
            className="inline-flex items-center gap-2 bg-laranja text-bege font-sans text-base px-6 py-3 rounded-[5px] hover:bg-laranja/90 transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}
