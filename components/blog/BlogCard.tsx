import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Post } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface Props {
  post: Post;
  variant?: "home" | "index";
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post, variant = "home" }: Props) {
  const coverUrl = post.cover
    ? urlFor(post.cover).width(600).height(400).url()
    : null;

  const imageHeight = variant === "index" ? "h-[220px]" : "h-[190px]";
  const postHref = `/blog/${post.slug.current}`;

  return (
    <article className="bg-bege-light rounded-[30px] overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Cover image */}
      <div className={`relative ${imageHeight} w-full overflow-hidden bg-verde-claro/20 rounded-t-[30px]`}>
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={post.cover?.alt ?? post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-verde-escuro/10 flex items-center justify-center">
            <span className="font-display text-verde-escuro/30 text-xl">Isa Pupo</span>
          </div>
        )}
        {post.category && (
          <span className="tag absolute top-3 left-3">{post.category.title}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-[30px] flex-1">
        {post.publishedAt && (
          <div className="flex items-center gap-1.5 text-verde-claro font-sans text-date">
            <Calendar size={16} />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        )}

        <h3 className="font-sans font-bold text-card-title text-verde-escuro leading-snug">
          <a href={postHref} className="hover:text-laranja transition-colors">
            {post.title}
          </a>
        </h3>

        {post.excerpt && (
          <p className="font-sans text-base text-marrom leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}

        <Button
          variant="outlined"
          size="sm"
          href={postHref}
          rightIcon={<ArrowRight size={16} />}
          className="self-start mt-auto"
        >
          Ler mais
        </Button>
      </div>
    </article>
  );
}
