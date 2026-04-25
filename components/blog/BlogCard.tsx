import Image from "next/image";
import Link from "next/link";
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

  const isIndex = variant === "index";

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col bg-bege-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Cover image */}
      <div className={`relative ${isIndex ? "h-[220px]" : "h-[180px]"} w-full bg-verde-claro/20`}>
        {coverUrl ? (
          <Image src={coverUrl} alt={post.cover?.alt ?? post.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-verde-escuro/10 flex items-center justify-center">
            <span className="font-display text-verde-escuro/30 text-xl">Isa Pupo</span>
          </div>
        )}
        {post.category && (
          <span className="absolute top-3 left-3 bg-verde-escuro text-bege font-sans text-date px-2 py-0.5 rounded">
            {post.category.title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        {post.publishedAt && (
          <p className="font-sans text-date text-cinza">{formatDate(post.publishedAt)}</p>
        )}
        <h3 className="font-sans font-bold text-card-title text-verde-escuro leading-snug group-hover:text-laranja transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="font-sans text-base text-marrom leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
