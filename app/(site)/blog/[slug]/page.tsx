import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity/client";
import { blogPostQuery, blogSlugsQuery } from "@/lib/sanity/queries";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client
    .fetch(blogPostQuery, { slug })
    .catch(() => null);
  if (!post) return {};
  return {
    title: `${post.title} — Isa Pupo`,
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post | null = await client
    .fetch(blogPostQuery, { slug })
    .catch(() => null);

  if (!post) notFound();

  const coverUrl = post.cover
    ? urlFor(post.cover).width(1040).height(360).url()
    : null;

  const shareUrl = `https://isapupo.com.br/blog/${slug}`;

  return (
    <>
      {/* Seção 1 — meta + título */}
      <section data-animate className="bg-white pt-[80px] pb-[30px]">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-laranja font-sans text-[14px] mb-[14px] hover:opacity-80 transition-opacity"
            >
              <Icon
                name="arrow-right"
                size={14}
                color="var(--laranja)"
                style={{ transform: "rotate(180deg)" }}
              />
              voltar para o blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-2 text-[14px] text-verde-claro font-sans mb-3 flex-wrap">
              <Icon name="calendar" size={14} color="var(--verde-claro)" />
              {post.publishedAt && <time>{formatDate(post.publishedAt)}</time>}
              {post.author?.name && (
                <>
                  <span className="opacity-60">·</span>
                  <span>{post.author.name}</span>
                </>
              )}
            </div>

            {/* Título */}
            <h1
              className="font-sans font-bold text-[44px] leading-[1.1] text-verde-escuro"
              style={{ maxWidth: 820 }}
            >
              {post.title}
            </h1>

            {/* Regra laranja */}
            <span className="block w-[73px] h-[3px] bg-laranja mt-[22px]" />
          </div>
        </div>
      </section>

      {/* Seção 2 — capa */}
      {coverUrl && (
        <section data-animate className="bg-white py-[30px]">
          <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
            <div className="max-w-content mx-auto">
              <div className="w-full h-[360px] rounded-[20px] overflow-hidden relative">
                <Image
                  src={coverUrl}
                  alt={post.cover?.alt ?? post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção 3 — corpo (single column) */}
      <section data-animate className="bg-white pb-[70px]">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto">
            {/* Artigo */}
            <article className="text-[18px] leading-[1.7] text-marrom font-sans prose prose-lg max-w-none">
              {post.body ? (
                <PortableText value={post.body} />
              ) : (
                <p className="text-cinza">Conteúdo em breve.</p>
              )}
            </article>

            {/* Share */}
            <div className="mt-9 pt-6 border-t border-bege-light pb-6 border-b">
              <p className="font-sans font-bold text-[18px] text-verde-escuro mb-3">
                Gostou do conteúdo? Me ajude a espalhar!
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/isapupopsicoterapia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no Instagram"
                  className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Icon name="instagram" size={18} color="var(--bege)" />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " — " + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no WhatsApp"
                  className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Icon name="whatsapp" size={18} color="var(--bege)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts recentes */}
      {post.related && post.related.length > 0 && (
        <section
          data-animate
          className="py-[70px]"
          style={{ background: "rgba(237,191,159,0.6)" }}
        >
          <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
            <SectionTitle eyebrow="Posts recentes" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-content mx-auto">
              {post.related.map((p) => (
                <BlogCard key={p._id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
