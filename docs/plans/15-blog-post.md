# Task 15 — Página de Blog Post

## Objetivo
Reescrever /blog/[slug] com o novo layout simplificado: sem aside, corpo coluna toda, sem "Agendar", share pills roxo-escuro, Posts recentes simples.

## Referências
- `isa-pupo-handoff/.../app/BlogPostPage.jsx` (usar com remoções listadas abaixo)
- `app/(site)/blog/[slug]/page.tsx` (atual)
- Print: `D:\isa pupa\SITE\prints\figma\blog-post\Blogpost.png`

## Mudanças

### `app/(site)/blog/[slug]/page.tsx`
Estrutura simplificada (sem aside, sem CTA "Agendar"):

```tsx
// Seção 1 — meta + h1 + regra
<section className="bg-white pt-[80px] pb-[30px]">
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <div className="max-w-content mx-auto">
      {/* Back link */}
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-laranja text-[14px] mb-[14px]">
        <Icon name="arrow-right" size={14} className="rotate-180" />
        voltar para o blog
      </Link>
      {/* Meta */}
      <div className="flex items-center gap-2 text-[14px] text-verde-claro mb-3">
        <Icon name="calendar" size={14} />
        <time>{formatDate(post.publishedAt)}</time>
        <span className="opacity-60">·</span>
        <span>{post.author?.name || 'Isabella Pupo'}</span>
      </div>
      {/* Título */}
      <h1 className="font-sans font-bold text-[44px] leading-[1.1] text-verde-escuro max-w-[820px]">
        {post.title}
      </h1>
      {/* Regra laranja */}
      <span className="block w-[73px] h-[3px] bg-laranja mt-[22px]" />
    </div>
  </div>
</section>

// Seção 2 — capa
<section className="bg-white py-[30px]">
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <div className="max-w-content mx-auto">
      <div className="w-full h-[360px] rounded-[20px] overflow-hidden relative">
        {post.cover && <Image src={urlFor(post.cover).width(1040).height(360).url()} alt={post.cover.alt || ''} fill className="object-cover" />}
      </div>
    </div>
  </div>
</section>

// Seção 3 — corpo (single column)
<section className="bg-white pb-[70px]">
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <div className="max-w-content mx-auto">
      {/* Corpo PortableText */}
      <article className="text-[18px] leading-[1.7] text-marrom prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </article>

      {/* Share */}
      <div className="mt-9 pt-6 border-t border-bege-light border-b pb-6">
        <p className="font-bold text-[18px] text-verde-escuro">Gostou do conteúdo? Me ajude a espalhar!</p>
        <div className="mt-3 flex gap-2">
          <a
            href="https://instagram.com/isa.pupo"
            target="_blank" rel="noopener"
            aria-label="Instagram"
            className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center"
          >
            <Icon name="instagram" size={18} color="var(--bege)" />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
            target="_blank" rel="noopener"
            aria-label="WhatsApp"
            className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center"
          >
            <Icon name="whatsapp" size={18} color="var(--bege)" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

// Seção 4 — Posts recentes (se houver)
{post.related?.length > 0 && (
  <section className="bg-bege/60 py-[70px]">
    <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
      <SectionTitle eyebrow="Posts recentes" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-content mx-auto">
        {post.related.map(p => <BlogCard key={p._id} post={p} />)}
      </div>
    </div>
  </section>
)}

<CtaBand />
```

**REMOVER**:
- aside flutuante com bio "Isa Pupo - terapeuta jungiana..."
- botão "Agendar uma conversa" dentro do artigo

## Verificação
- Desktop: corpo texto ocupa a coluna toda (sem aside).
- Capa 360px com radius 20.
- Back-link funcional.
- Share pills roxo-escuro com ícones bege.
- Posts recentes com grid 2-col.
- Sem botão "Agendar" dentro do post.
- Print `figma/blog-post/Blogpost.png` como referência visual.

## Deploy
```bash
git add app/(site)/blog/[slug]/page.tsx
git commit -m "feat(redesign): 15-blog-post — single-column, sem aside, share pills, Posts recentes"
git push
```
