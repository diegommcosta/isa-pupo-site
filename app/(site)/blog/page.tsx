import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { blogIndexQuery } from "@/lib/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";
import Sparkle from "@/components/ui/shapes/Sparkle";
import WaveDivider from "@/components/ui/shapes/WaveDivider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Isa Pupo",
  description: "Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana.",
};

export const revalidate = 30;

const PER_PAGE = 9;

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const currentPage = Math.max(1, Number(sp?.page ?? 1));
  const from = (currentPage - 1) * PER_PAGE;
  const to = from + PER_PAGE - 1;

  const data = await client
    .fetch(blogIndexQuery, { from, to })
    .catch(() => ({ posts: [], total: 0 }));

  const posts = data?.posts ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <>
      {/* Hero escuro editorial */}
      <section className="relative overflow-hidden bg-verde-escuro pt-[128px] md:pt-[160px] pb-12 md:pb-16">
        <Sparkle
          size={20}
          className="absolute top-[30%] right-[10%] text-bege/60 animate-twinkle hidden md:block"
        />
        <Sparkle
          size={13}
          className="absolute bottom-[18%] left-[8%] text-rosa animate-twinkle [animation-delay:1.2s] hidden md:block"
        />
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <span className="inline-flex items-center gap-2 font-sans font-bold text-eyebrow uppercase text-bege">
            <Sparkle size={12} />
            Blog
          </span>
          <h1
            data-anim="lines"
            className="mt-3 font-display font-normal text-bege px-2 -mx-2 leading-[0.95]"
            style={{ fontSize: "clamp(72px, 12vw, 140px)" }}
          >
            Blog
          </h1>
          <p
            data-anim="fade-up"
            className="mt-5 font-sans text-[17px] md:text-[19px] leading-[1.5] text-bege/80 max-w-[520px]"
          >
            Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana.
          </p>
        </div>
      </section>

      <WaveDivider from="bg-verde-escuro" to="text-white" variant="organic" flip />

      {/* Grid de posts */}
      <section className="bg-white pt-8 pb-24">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          {posts.length === 0 ? (
            <p className="text-center text-verde-claro py-12 font-sans text-base">
              Em breve, artigos sobre psicologia e autoconhecimento.
            </p>
          ) : (
            <div
              data-anim="stagger"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
            >
              {posts.map((post: Parameters<typeof BlogCard>[0]["post"], i: number) => (
                <div key={post._id} className={cn(i % 3 === 1 && "md:mt-10")}>
                  <BlogCard post={post} imageHeight={220} />
                </div>
              ))}
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="mt-14 flex justify-center gap-2.5 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a
                  key={p}
                  href={`/blog?page=${p}`}
                  className={cn(
                    "w-11 h-11 flex items-center justify-center rounded-full font-sans text-base transition-colors",
                    p === currentPage
                      ? "bg-verde-escuro text-bege"
                      : "border border-verde-escuro text-verde-escuro hover:bg-verde-escuro hover:text-bege"
                  )}
                >
                  {p}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <WaveDivider from="bg-white" to="text-marrom" variant="soft" flip />
      <CtaBand />
      <WaveDivider from="bg-marrom" to="text-verde-escuro" variant="organic" />
    </>
  );
}
