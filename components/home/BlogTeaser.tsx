import { SectionTitle } from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/lib/sanity/types";

interface Props {
  posts: Post[];
}

export default function BlogTeaser({ posts }: Props) {
  return (
    <section id="blog" data-animate className="bg-white py-16 md:py-20">
      <div className="max-w-site mx-auto px-8 lg:px-[200px]">
        <SectionTitle
          eyebrow="Blog"
          subtitle="Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana."
        />

        {posts.length > 0 ? (
          <div
            data-animate-stagger
            className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] max-w-[1080px] mx-auto"
          >
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} variant="home" />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-verde-claro font-sans text-base">
            Em breve, artigos sobre psicologia e autoconhecimento.
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline-dark"
            size="sm"
            href="/blog"
            rightIcon="arrow-right"
          >
            Ver todos os blogs
          </Button>
        </div>
      </div>
    </section>
  );
}
