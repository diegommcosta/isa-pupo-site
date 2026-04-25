import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { blogIndexQuery } from "@/lib/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre psicologia, autoconhecimento e saúde mental por Isabella Pupo.",
};

export const revalidate = 3600;

const PER_PAGE = 9;

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Math.max(1, Number(searchParams?.page ?? 1));
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
      <section className="w-full bg-bege py-20">
        <div className="max-w-site mx-auto px-[200px]">
          <h1 className="font-display text-title-hero text-verde-escuro mb-4">Blog</h1>
          <p className="font-sans text-descricao text-marrom mb-12">
            Artigos sobre psicologia, autoconhecimento e saúde mental.
          </p>

          {posts.length > 0 ? (
            <div className="grid grid-cols-3 gap-8">
              {posts.map((post: Parameters<typeof BlogCard>[0]["post"]) => (
                <BlogCard key={post._id} post={post} variant="index" />
              ))}
            </div>
          ) : (
            <p className="font-sans text-descricao text-cinza text-center py-16">
              Em breve, artigos sobre psicologia e autoconhecimento.
            </p>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a
                  key={p}
                  href={`/blog?page=${p}`}
                  className={`w-10 h-10 flex items-center justify-center rounded font-sans text-base transition-colors ${
                    p === currentPage
                      ? "bg-verde-escuro text-bege"
                      : "bg-bege-light text-marrom hover:bg-verde-escuro hover:text-bege"
                  }`}
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
