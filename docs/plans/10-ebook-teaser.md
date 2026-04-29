# Task 10 — Ebook Teaser

## Objetivo
Reescrever o teaser do ebook: livro à esquerda, título roxo-escuro, bullets book-half, botões purple. Estático.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:169-220`
- `components/home/EbookTeaser.tsx` (atual)
- Print copy: `D:\isa pupa\SITE\prints\figma\home\home.png` ou `figma/ebook-page/Ebook.png`

## Mudanças

### `components/home/EbookTeaser.tsx`
- Tornar **estático** — remover props `teaser`/`title`/`highlights` do Sanity.
- Estrutura:
```tsx
<section
  id="ebook"
  data-animate
  className="bg-bege py-16 md:py-20"
>
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <SectionTitle eyebrow="Ebook" />
    <div className="max-w-content mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
      {/* Livro */}
      <div>
        <Image src="/imgs/livro.png" alt="Capa do ebook" width={400} height={533} className="w-full h-auto object-contain" />
      </div>
      {/* Texto */}
      <div>
        <h2 className="font-sans font-bold text-[48px] leading-[1.05] text-roxo-escuro max-w-[460px]">
          {/* título do Figma */}
        </h2>
        <p className="mt-[18px] text-[18px] leading-[1.45] text-verde-escuro max-w-[460px]">
          {/* descrição do Figma */}
        </p>
        <p className="mt-[22px] font-bold text-[18px] text-verde-escuro">O que encontrará neste ebook:</p>
        <div className="mt-1.5 flex flex-col gap-0">
          {bullets.map(b => (
            <div key={b} className="flex items-center gap-2.5 text-[18px] text-verde-escuro py-1.5">
              <Icon name="book-half" size={16} color="var(--roxo-claro)" />
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-2.5 flex-wrap">
          <Button variant="purple" leftIcon="box-arrow-up-right" href="/ebook">Adquirir Ebook</Button>
          <Button variant="outline-purple" rightIcon="arrow-right" href="/ebook">Saiba mais</Button>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Ação**: ao implementar, ler print `figma/ebook-page/Ebook.png` ou `figma/home/home.png` e transcrever: título do livro, descrição e 3 bullets.

### `app/page.tsx`
- Remover prop `teaser` do `<EbookTeaser />`.

## Verificação
- Fundo bege, layout 2-col em desktop.
- Botões roxo-escuro funcionam (linkam para /ebook).
- Bullet ícones book-half em roxo-claro.

## Deploy
```bash
git add components/home/EbookTeaser.tsx app/page.tsx
git commit -m "feat(redesign): 10-ebook-teaser — livro, bullets book-half, botões purple, estático"
git push
```
