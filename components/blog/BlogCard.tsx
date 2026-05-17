import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import type { Post } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface Props {
  post: Post;
  imageHeight?: number;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BlogCard({ post, imageHeight = 190 }: Props) {
  const coverUrl = post.cover
    ? urlFor(post.cover).width(600).height(400).url()
    : null;

  const imgH = imageHeight;
  const postHref = post.slug?.current ? `/blog/${post.slug.current}` : "#";

  return (
    <article
      className="blog-card card-hover bg-bege-light rounded-[30px] overflow-hidden flex flex-col w-full"
    >
      {/* Imagem de capa */}
      <div className={`relative overflow-hidden`} style={{ height: imgH, flexShrink: 0 }}>
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={post.cover?.alt ?? post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-bege flex items-center justify-center">
            <span className="font-display text-marrom/30 text-xl">Isa Pupo</span>
          </div>
        )}
        {post.category && (
          <span className="tag absolute top-3 left-3" data-animate-tag>{post.category.title}</span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-[22px] flex flex-col flex-1 relative overflow-hidden">
        {/* Watermark cerebro-coracao */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            right: -30,
            bottom: -20,
            width: 220,
            height: 220,
            background: "url(/imgs/cerebro-coracao.webp) center/contain no-repeat",
            opacity: 0.14,
          }}
        />

        <div className="relative flex flex-col flex-1">
          {/* Data */}
          {post.publishedAt && (
            <div className="flex items-center gap-1.5 text-[14px] text-verde-claro mb-[10px]">
              <Icon name="calendar" size={14} color="var(--verde-claro)" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
          )}

          {/* Título */}
          <h3 className="font-sans font-bold text-[22px] leading-[1.2] text-verde-escuro">
            <a href={postHref} className="hover:text-laranja transition-colors">
              {post.title}
            </a>
          </h3>

          {/* Resumo */}
          {post.excerpt && (
            <p
              className="mt-[10px] text-[15px] leading-[1.45] text-marrom flex-1"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Botão */}
          <div className="mt-4">
            <Button
              variant="outline-orange"
              size="sm"
              href={postHref}
              rightIcon="arrow-right"
            >
              Ler mais
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
