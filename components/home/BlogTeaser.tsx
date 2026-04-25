import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/lib/sanity/types";

interface Props {
  posts: Post[];
}

export default function BlogTeaser({ posts }: Props) {
  return (
    <section className="w-full bg-bege-light py-20">
      <div className="max-w-site mx-auto px-[200px]">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-title-atendimentos text-verde-escuro">
            Blog
          </h2>
          <Link
            href="/blog"
            className="font-sans text-base text-laranja underline hover:text-laranja/80 transition-colors"
          >
            Ver todos →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} variant="home" />
            ))}
          </div>
        ) : (
          <p className="font-sans text-descricao text-cinza text-center py-8">
            Em breve, artigos sobre psicologia e autoconhecimento.
          </p>
        )}
      </div>
    </section>
  );
}
