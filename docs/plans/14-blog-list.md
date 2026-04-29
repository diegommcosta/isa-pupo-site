# Task 14 — Página de Lista do Blog

## Objetivo
Atualizar /blog com hero branco minimalista (SectionTitle) e grid responsivo. Sem h1 grande, sem padding fixo 200px.

## Referências
- `isa-pupo-handoff/.../app/BlogPage.jsx`
- `app/(site)/blog/page.tsx` (atual)
- Print: `D:\isa pupa\SITE\prints\figma\blog\Blog.png`

## Mudanças

### `app/(site)/blog/page.tsx`
```tsx
export default async function BlogPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const from = (page - 1) * PER_PAGE;
  const to = from + PER_PAGE - 1;

  const { posts, total } = await client.fetch(blogIndexQuery, { from, to }).catch(() => ({ posts: [], total: 0 }));

  return (
    <>
      {/* Hero branco minimalista */}
      <section className="bg-white pt-[80px] pb-[30px]">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          <SectionTitle
            eyebrow="Blog"
            subtitle="Reflexões, artigos e conteúdos sobre psicologia integrativa e jungiana."
          />
        </div>
      </section>

      {/* Grid de posts */}
      <section className="bg-white pb-[80px] pt-[30px]">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          {posts.length === 0 ? (
            <p className="text-center text-verde-claro py-12">Em breve, artigos sobre psicologia e autoconhecimento.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] max-w-content mx-auto">
              {posts.map(p => <BlogCard key={p._id} post={p} imageHeight={220} />)}
            </div>
          )}

          {/* Paginação */}
          {total > PER_PAGE && (
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(total / PER_PAGE) }, (_, i) => i + 1).map(n => (
                <a
                  key={n}
                  href={`/blog?page=${n}`}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded font-sans text-base',
                    n === page
                      ? 'bg-verde-escuro text-bege'
                      : 'border border-verde-escuro text-verde-escuro hover:bg-verde-escuro/10'
                  )}
                >
                  {n}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
```

## Verificação
- Desktop: 3 colunas, sem `px-[200px]` hardcoded.
- Mobile: 1 coluna, margens corretas.
- Paginação funcional (> 9 posts).
- Hero apenas SectionTitle branco — sem h1 estilizado extra.

## Deploy
```bash
git add app/(site)/blog/page.tsx
git commit -m "feat(redesign): 14-blog-list — hero branco SectionTitle, grid responsivo"
git push
```
