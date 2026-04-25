import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity/client";
import { blogPostQuery, blogSlugsQuery } from "@/lib/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";
import type { Post } from "@/lib/sanity/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(blogSlugsQuery).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: Post | null = await client
    .fetch(blogPostQuery, { slug: params.slug })
    .catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [urlFor(post.cover).width(1200).height(630).url()] : [],
    },
  };
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post: (Post & { related?: Post[] }) | null = await client
    .fetch(blogPostQuery, { slug: params.slug })
    .catch(() => null);

  if (!post) notFound();

  const coverUrl = post.cover
    ? urlFor(post.cover).width(1440).height(500).url()
    : null;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[400px] bg-verde-escuro overflow-hidden">
        {coverUrl && (
          <Image src={coverUrl} alt={post.cover?.alt ?? post.title} fill className="object-cover opacity-60" />
        )}
        <div className="absolute inset-0 flex flex-col items-end justify-end px-[200px] pb-12 max-w-site mx-auto w-full left-1/2 -translate-x-1/2">
          {post.category && (
            <span className="font-sans text-date text-bege bg-laranja px-2 py-0.5 rounded mb-3 self-start">
              {post.category.title}
            </span>
          )}
          <h1 className="font-display text-[2.25rem] text-bege leading-snug max-w-[700px] self-start">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 self-start">
            {post.author && (
              <p className="font-display text-xl text-bege">{post.author.name}</p>
            )}
            {post.publishedAt && (
              <p className="font-sans text-date text-bege/70">{formatDate(post.publishedAt)}</p>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="w-full bg-bege-light py-16">
        <div className="max-w-content mx-auto px-8">
          {post.body ? (
            <div className="prose prose-lg max-w-none font-sans text-marrom">
              <PortableText value={post.body} />
            </div>
          ) : (
            <p className="font-sans text-descricao text-cinza">Conteúdo em breve.</p>
          )}

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-verde-claro flex items-center gap-4">
            <p className="font-sans text-base text-marrom font-bold">Compartilhar:</p>
            <a
              href={`https://instagram.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-base text-laranja underline hover:text-laranja/80"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-base text-laranja underline hover:text-laranja/80"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {post.related && post.related.length > 0 && (
        <section className="w-full bg-bege py-16">
          <div className="max-w-site mx-auto px-[200px]">
            <h2 className="font-display text-title-atendimentos text-verde-escuro mb-8">
              Posts recentes
            </h2>
            <div className="grid grid-cols-2 gap-8 max-w-[700px]">
              {post.related.map((p) => (
                <BlogCard key={p._id} post={p} variant="index" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
