import { SectionTitle } from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/lib/sanity/types";

interface Props {
  posts: Post[];
}

export default function BlogTeaser({ posts }: Props) {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-16 md:py-28 scroll-mt-[88px]">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionTitle
            eyebrow="Blog"
            subtitle="Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana."
          />
          <div className="hidden lg:block pb-2">
            <Button variant="outline-dark" size="md" href="/blog" rightIcon="arrow-right">
              Ver todos os blogs
            </Button>
          </div>
        </div>

        {posts.length > 0 ? (
          <div
            data-anim="stagger"
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
          >
            {posts.map((post, i) => (
              // Respiro orgânico sutil: o card do meio desce ~24px no desktop via
              // `top` (relative) — não colide com o transform do GSAP/card-hover;
              // altura da caixa intacta; todos do mesmo tamanho/raio.
              <div key={post._id} className={i === 1 ? "h-full relative md:top-6" : "h-full"}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-verde-escuro font-sans text-base">
            Em breve, artigos sobre psicologia e autoconhecimento.
          </p>
        )}

        <div className="mt-12 flex justify-center lg:hidden">
          <Button
            variant="outline-dark"
            size="md"
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
