import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity/client";
import PortableTextComponents from "@/components/blog/PortableTextComponents";
import { blogPostQuery, blogSlugsQuery } from "@/lib/sanity/queries";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";
import Sparkle from "@/components/ui/shapes/Sparkle";
import WaveDivider from "@/components/ui/shapes/WaveDivider";
import type { Post } from "@/lib/sanity/types";

export const revalidate = 30;
export const dynamicParams = true;

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
      <section className="bg-white pt-[128px] pb-[30px]">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
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
            {post.author?.name && (
              <p className="text-[14px] text-verde-claro font-sans mb-3">
                {post.author.name}
              </p>
            )}

            {/* Título */}
            <h1
              className="font-sans font-bold leading-[1.12] text-verde-escuro"
              style={{ maxWidth: 820, fontSize: "clamp(30px, 4vw, 46px)" }}
            >
              {post.title}
            </h1>

            <Sparkle size={20} className="block mt-5 text-laranja" />
          </div>
        </div>
      </section>

      {/* Seção 2 — capa */}
      {coverUrl && (
        <section className="bg-white py-[30px]">
          <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
            <div className="max-w-content mx-auto">
              <div
                data-anim="image"
                className="w-full h-[360px] md:h-[420px] rounded-organic overflow-hidden relative"
              >
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
      <section className="bg-white pb-[70px]">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="max-w-content mx-auto">
            {/* Artigo */}
            <article className="max-w-none">
              {post.body ? (
                <PortableText value={post.body} components={PortableTextComponents} />
              ) : (
                <p className="text-cinza">Conteúdo em breve.</p>
              )}
            </article>

            {/* Share */}
            <div className="mt-9 pt-6 border-t border-bege-light pb-6 border-b">
              <p className="font-sans font-bold text-[18px] text-verde-escuro mb-3">
                Gostou do conteúdo? Me ajude a espalhar!
              </p>
              <ShareButtons title={post.title} url={shareUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* Posts recentes */}
      {post.related && post.related.length > 0 && (
        <>
          <WaveDivider from="bg-white" to="text-bege" variant="organic" />
          <section className="bg-bege py-20 md:py-24">
            <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
              <SectionTitle eyebrow="Posts recentes" />
              <div
                data-anim="stagger"
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7 max-w-content"
              >
                {post.related.map((p) => (
                  <BlogCard key={p._id} post={p} />
                ))}
              </div>
            </div>
          </section>
          <WaveDivider from="bg-bege" to="text-marrom" variant="soft" flip />
        </>
      )}
      {(!post.related || post.related.length === 0) && (
        <WaveDivider from="bg-white" to="text-marrom" variant="soft" flip />
      )}

      <CtaBand />
      <WaveDivider from="bg-marrom" to="text-verde-escuro" variant="organic" />
    </>
  );
}
