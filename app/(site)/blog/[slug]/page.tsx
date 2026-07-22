import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity/client";
import PortableTextComponents from "@/components/blog/PortableTextComponents";
import { blogPostQuery, blogSlugsQuery } from "@/lib/sanity/queries";
import { SectionTitle } from "@/components/ui/SectionTitle";
import BackLink from "@/components/ui/BackLink";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/layout/CtaBand";
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
      <section className="bg-white pt-[112px] pb-6">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="max-w-content mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <BackLink href="/blog">voltar para o blog</BackLink>
            </div>

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
          </div>
        </div>
      </section>

      {/* Seção 2 — capa */}
      {coverUrl && (
        <section className="bg-white pt-0 pb-[30px]">
          <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
            <div className="max-w-content mx-auto">
              <div
                data-anim="image"
                className="w-full h-[360px] md:h-[420px] rounded-card overflow-hidden relative"
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
            {/* Artigo — [&>*:first-child]:mt-0 impede que a margem do topo do
                primeiro bloco (ex.: um heading com mt-8) escape por colapso de
                margem e abra um vão bege acima da seção. */}
            <article className="max-w-none [&>*:first-child]:mt-0">
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
          <section className="bg-bege py-10 md:py-12">
            <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
              <SectionTitle title="Posts recentes" />
              <div
                data-anim="stagger"
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
              >
                {post.related.map((p) => (
                  <div key={p._id} className="h-full">
                    <BlogCard post={p} imageHeight={220} />
                  </div>
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
