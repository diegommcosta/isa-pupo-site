import Image from "next/image";
import Button from "@/components/ui/Button";

interface Props {
  title?: string;
  teaser?: string;
  highlights?: string[];
}

export default function EbookTeaser({
  title = "O Cultivo da Verdade Interna",
  teaser = "Um guia completo para sua jornada de autoconhecimento através da Psicologia Analítica Jungiana.",
  highlights = [
    "Fundamentos da Psicologia Jungiana",
    "Como interpretar seus sonhos",
    "O processo de individuação",
    "Integrando sombra e persona",
  ],
}: Props) {
  return (
    <section id="ebook" data-animate className="w-full bg-bege py-16 lg:py-20">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        {/*
          Grid mobile (1 col):  section-title → image → text-block
          Grid desktop (2 col): image (col1, rows 1-2) | section-title (col2 row1) + text-block (col2 row2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-x-16 lg:gap-y-4 lg:items-start">

          {/* 1. Section title */}
          <h2 className="font-sans font-bold text-sessions text-verde-escuro lg:col-start-2 lg:row-start-1">
            Ebook
          </h2>

          {/* 2. Book cover */}
          <div className="w-full max-w-[240px] mx-auto lg:max-w-none lg:mx-0 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/imgs/livro.png"
                alt="Ebook Isa Pupo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* 3. Text block */}
          <div className="flex flex-col gap-4 lg:col-start-2 lg:row-start-2">
            <h3 className="font-sans font-bold text-titulos text-roxo-escuro leading-tight">
              {title}
            </h3>
            <p className="font-sans text-descricao text-verde-escuro leading-relaxed">
              {teaser}
            </p>

            {highlights.length > 0 && (
              <ul className="space-y-2 mt-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-base text-verde-escuro">
                    <span className="text-roxo-claro mt-0.5">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              <Button
                variant="filled"
                size="md"
                href="/ebook"
                className="bg-roxo-escuro hover:bg-roxo-escuro/90"
              >
                Conhecer o ebook
              </Button>
              <Button
                variant="outlined"
                size="md"
                href="/ebook"
                className="border-roxo-escuro text-roxo-escuro hover:bg-roxo-escuro hover:text-bege"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
