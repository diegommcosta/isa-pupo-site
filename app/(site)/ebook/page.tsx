import type { Metadata } from "next";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity/client";
import { ebookPageQuery } from "@/lib/sanity/queries";
import CtaBand from "@/components/layout/CtaBand";
import type { EbookPage } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Ebook",
  description: "O Ebook de Psicologia Jungiana por Isabella Pupo.",
};

export const revalidate = 3600;

export default async function EbookPageView() {
  const data = await client.fetch(ebookPageQuery).catch(() => null);
  const ebook: EbookPage | null = data?.ebook ?? null;

  const coverUrl = ebook?.cover
    ? urlFor(ebook.cover).width(400).height(540).url()
    : null;
  const authorPhotoUrl = ebook?.author?.photo
    ? urlFor(ebook.author.photo).width(300).height(300).url()
    : null;

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-bege py-20">
        <div className="max-w-site mx-auto px-[200px] flex items-center gap-16">
          <div className="relative shrink-0 w-[260px] h-[360px]">
            {coverUrl ? (
              <Image src={coverUrl} alt={ebook?.title ?? "Ebook"} fill className="object-contain drop-shadow-2xl" />
            ) : (
              <Image src="/imgs/livro.png" alt="Ebook" fill className="object-contain drop-shadow-2xl" />
            )}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-title-hero text-verde-escuro leading-tight mb-4">
              {ebook?.title ?? "Psicologia Analítica Jungiana"}
            </h1>
            <p className="font-sans text-descricao text-marrom leading-relaxed mb-8">
              {ebook?.subtitle ?? "Um guia completo para a jornada de autoconhecimento"}
            </p>
            {ebook?.ctaUrl ? (
              <a
                href={ebook.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-laranja text-bege font-sans text-base px-8 py-4 rounded-[5px] hover:bg-laranja/90 transition-colors"
              >
                Quero o Ebook
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Para quem */}
      {ebook?.paraQuem && ebook.paraQuem.length > 0 && (
        <section className="w-full bg-bege-light py-16">
          <div className="max-w-content mx-auto px-8">
            <h2 className="font-sans font-bold text-sessions text-verde-escuro mb-8">
              Para quem é este ebook?
            </h2>
            <ul className="space-y-4">
              {ebook.paraQuem.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-descricao text-marrom">
                  <span className="text-laranja font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Conteúdo */}
      {ebook?.conteudo && ebook.conteudo.length > 0 && (
        <section className="w-full bg-bege py-16">
          <div className="max-w-content mx-auto px-8">
            <h2 className="font-sans font-bold text-sessions text-verde-escuro mb-8">
              O que tem no ebook
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {ebook.conteudo.map((item, i) => (
                <div key={i} className="bg-bege-light rounded-lg p-6">
                  <h3 className="font-sans font-bold text-card-title text-verde-escuro mb-2">
                    {item.chapter}
                  </h3>
                  <p className="font-sans text-base text-marrom leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sobre a autora */}
      {ebook?.author && (
        <section className="w-full bg-bege-light py-16">
          <div className="max-w-content mx-auto px-8 flex items-center gap-12">
            {authorPhotoUrl && (
              <div className="relative shrink-0 w-[200px] h-[200px] rounded-full overflow-hidden">
                <Image src={authorPhotoUrl} alt={ebook.author.name} fill className="object-cover" />
              </div>
            )}
            <div>
              <p className="font-sans font-bold text-mini-title text-verde-escuro uppercase mb-2">
                Sobre a autora
              </p>
              <h2 className="font-display text-title-atendimentos text-verde-escuro mb-4">
                {ebook.author.name}
              </h2>
              {ebook.author.bio && (
                <p className="font-sans text-descricao text-marrom leading-relaxed">
                  {ebook.author.bio}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Investimento */}
      <section className="w-full bg-roxo-escuro py-16">
        <div className="max-w-content mx-auto px-8 text-center">
          <h2 className="font-sans font-bold text-invest-titulo text-bege mb-6">
            Investimento
          </h2>
          {ebook?.priceFrom && (
            <p className="font-sans text-descricao text-bege/70 line-through mb-2">
              {ebook.priceFrom}
            </p>
          )}
          <p className="font-sans font-bold text-preco text-bege leading-none">
            {ebook?.price ?? "R$97,00"}
          </p>
          {ebook?.ctaUrl && (
            <a
              href={ebook.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-laranja text-bege font-sans text-base px-8 py-4 rounded-[5px] hover:bg-laranja/90 transition-colors"
            >
              Quero o Ebook
            </a>
          )}
        </div>
      </section>

      <CtaBand message="Olá Isa! Tenho interesse no ebook e gostaria de mais informações." />
    </>
  );
}
