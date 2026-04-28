import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/lib/sanity/types";

interface Props {
  posts: Post[];
}

export default function BlogTeaser({ posts }: Props) {
  return (
    <section id="blog" data-animate className="w-full bg-white py-20">
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-sans font-bold text-sessions text-verde-escuro">
              Blog
            </h2>
            <p className="font-sans text-base text-verde-escuro mt-1">
              Artigos sobre psicologia, autoconhecimento e bem-estar
            </p>
          </div>
          <Button
            variant="outlined"
            size="sm"
            href="/blog"
            rightIcon={<ArrowRight size={16} />}
            className="border-verde-escuro text-verde-escuro hover:bg-verde-escuro hover:text-bege self-start sm:self-auto"
          >
            Ver todos
          </Button>
        </div>

        {posts.length > 0 ? (
          <div data-animate-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} variant="home" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 flex flex-col items-center gap-3">
            <p className="font-display text-xl text-verde-escuro/40">Isa Pupo</p>
            <p className="font-sans text-base text-cinza">
              Em breve, artigos sobre psicologia e autoconhecimento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
