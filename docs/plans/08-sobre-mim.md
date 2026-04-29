# Task 08 — Sobre Mim

## Objetivo
Reescrever a seção Sobre Mim com foto/bio estáticas (copy do Figma), grid 422/1fr, SectionTitle.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:73-102`
- `components/home/SobreMim.tsx` (atual)
- Print copy: `D:\isa pupa\SITE\prints\figma\home\home.png` — **transcrever bio VERBATIM**

## Mudanças

### `components/home/SobreMim.tsx`
- Tornar **estático** — remover props `bio`/`photo` do Sanity.
- Estrutura:
```tsx
<section
  id="sobre"
  data-animate
  className="bg-white py-16 md:py-20"
>
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <SectionTitle eyebrow="Sobre Mim" />
    <div className="max-w-content mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-[422px_1fr] gap-14 items-start">
      {/* Foto */}
      <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '422/561' }}>
        <Image
          src="/imgs/sobre-mim.png"
          alt="Isa Pupo"
          width={422}
          height={561}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Texto */}
      <div>
        <h2 className="font-sans font-bold text-[48px] leading-none text-verde-escuro">Isa Pupo</h2>
        <div className="mt-6 text-[18px] leading-[1.55] text-marrom space-y-[14px]">
          {/* 4 parágrafos do .fig — transcrever aqui */}
          {/* <strong>Psicologia Analítica (Jung)</strong> e <em>Mike</em> */}
        </div>
      </div>
    </div>
  </div>
</section>
```

**Ação**: ao implementar, abrir `D:\isa pupa\SITE\prints\figma\home\home.png` e transcrever os 4 parágrafos verbatim. Aplicar `<strong>` em "Psicologia Analítica (Jung)" e `<em>` em "Mike".

### `app/page.tsx`
- Remover props `bio`/`photo` do `<SobreMim />`.

## Verificação
- Desktop: 2-col, foto à esquerda, texto à direita.
- Mobile: stack, foto no topo, texto abaixo.
- Copy idêntico ao Figma.
- Nenhuma dependência do Sanity nesta seção.

## Deploy
```bash
git add components/home/SobreMim.tsx app/page.tsx
git commit -m "feat(redesign): 08-sobre-mim — layout grid, foto estática, bio do Figma"
git push
```
