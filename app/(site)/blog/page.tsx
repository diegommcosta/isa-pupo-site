import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { blogIndexQuery } from "@/lib/sanity/queries";
import { SectionTitle } from "@/components/ui/SectionTitle";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";
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
      {/* Hero branco minimalista */}
      <section className="bg-white pt-[80px] pb-[30px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          <SectionTitle
            eyebrow="Blog"
            subtitle="Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana."
          />
        </div>
      </section>

      {/* Grid de posts */}
      <section className="bg-white pb-[80px] pt-[30px]">
        <div className="max-w-site mx-auto px-8 lg:px-[200px]">
          {posts.length === 0 ? (
            <p className="text-center text-verde-claro py-12 font-sans text-base">
              Em breve, artigos sobre psicologia e autoconhecimento.
            </p>
          ) : (
            <div
              data-animate-stagger
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] max-w-content mx-auto"
            >
              {posts.map((post: Parameters<typeof BlogCard>[0]["post"]) => (
                <BlogCard key={post._id} post={post} imageHeight={220} />
              ))}
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a
                  key={p}
                  href={`/blog?page=${p}`}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded font-sans text-base transition-colors",
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

      <CtaBand />
    </>
  );
}
