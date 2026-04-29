# Task 11 — Blog Teaser + BlogCard

## Objetivo
Reescrever BlogTeaser com SectionTitle + grid + watermark cerebro-coracao nos cards. Atualizar BlogCard com novo visual. Mantém integração Sanity.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:222-287`
- `components/home/BlogTeaser.tsx` (atual)
- `components/blog/BlogCard.tsx` (atual)
- Prints: `figma/home/home.png`, `figma/blog/Blog.png`

## Mudanças

### `components/blog/BlogCard.tsx`
Reescrever com novo layout:
```tsx
<article
  className="blog-card bg-bege-light rounded-[30px] overflow-hidden flex flex-col w-full
             transition-transform duration-250 hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(0,0,0,.08)]"
>
  {/* Imagem de capa */}
  <div className="h-[190px] relative overflow-hidden">
    {post.cover ? (
      <Image src={urlFor(post.cover).width(600).height(400).url()} alt={post.cover.alt || post.title} fill className="object-cover" />
    ) : (
      <div className="w-full h-full bg-bege flex items-center justify-center font-display text-marrom text-2xl">Isa Pupo</div>
    )}
    {/* Tag categoria */}
    {post.category && <span className="absolute top-3 left-3 tag">{post.category.title}</span>}
  </div>
  {/* Conteúdo */}
  <div className="p-[22px] flex flex-col flex-1 relative overflow-hidden">
    {/* Watermark cerebro-coracao */}
    <div
      aria-hidden
      className="absolute right-[-30px] bottom-[-20px] w-[220px] h-[220px] pointer-events-none opacity-[0.14]"
      style={{ background: 'url(/imgs/cerebro-coracao.png) center/contain no-repeat' }}
    />
    <div className="relative flex flex-col flex-1">
      {/* Data */}
      <div className="flex items-center gap-1.5 text-[14px] text-verde-claro mb-2.5">
        <Icon name="calendar" size={14} color="var(--verde-claro)" />
        <time>{formatDate(post.publishedAt)}</time>
      </div>
      {/* Título */}
      <h3 className="font-sans font-bold text-[22px] leading-[1.2] text-verde-escuro">{post.title}</h3>
      {/* Resumo */}
      <p
        className="mt-2.5 text-[15px] leading-[1.45] text-marrom flex-1"
        style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
      >
        {post.excerpt}
      </p>
      {/* Botão */}
      <div className="mt-4">
        <Button variant="outline-orange" rightIcon="arrow-right" href={`/blog/${post.slug.current}`} as="a">
          Ler mais
        </Button>
      </div>
    </div>
  </div>
</article>
```

Manter a variante `index` (usada em blog-list e posts recentes) — diferença: a variant `index` pode ter altura de imagem diferente (220px); criar via prop `imageHeight`.

### `components/home/BlogTeaser.tsx`
```tsx
<section id="blog" data-animate className="bg-white py-16 md:py-20">
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <SectionTitle
      eyebrow="Blog"
      subtitle="Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana."
    />
    <div
      data-animate-stagger
      className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] max-w-[1080px] mx-auto"
    >
      {posts.map(p => <BlogCard key={p._id} post={p} />)}
    </div>
    {posts.length === 0 && (
      <p className="text-center text-verde-claro mt-8">Em breve, artigos sobre psicologia e autoconhecimento.</p>
    )}
    <div className="mt-10 flex justify-center">
      <Button variant="outline-dark" rightIcon="arrow-right" href="/blog">Ver todos os blogs</Button>
    </div>
  </div>
</section>
```

## Verificação
- Grid 3-col em desktop, 2-col tablet, 1-col mobile.
- Watermark aparece nos cards mas não interfere com texto.
- Botão "Ver todos os blogs" verde-escuro outline.
- Hover nos cards: sobe levemente.

## Deploy
```bash
git add components/home/BlogTeaser.tsx components/blog/BlogCard.tsx
git commit -m "feat(redesign): 11-blog-teaser — BlogCard watermark, grid responsivo, Ver todos outline-dark"
git push
```
