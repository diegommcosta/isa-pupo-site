# Task 16 — Página Ebook (estática)

## Objetivo
Reescrever /ebook como rota totalmente estática: hero bege, banda roxo-claro, "Para quem?", "Sobre a Autora", Investimento. Sem CtaBand final.

## Referências
- `isa-pupo-handoff/.../app/EbookPage.jsx`
- `app/(site)/ebook/page.tsx` (atual)
- Print copy: `D:\isa pupa\SITE\prints\figma\ebook-page\Ebook.png` — **transcrever VERBATIM**

## Mudanças

### `app/(site)/ebook/page.tsx`
Remover dependência do Sanity. Server component estático com `metadata` hardcoded.

Seções:

**1. Hero bege** (`bg-bege py-[80px]`):
- Grid `md:grid-cols-2` gap 60, container `max-w-content mx-auto`
- Esquerda: `/imgs/livro.png`
- Direita: `<Tag icon="book-half" iconColor="var(--roxo-escuro)">Ebook</Tag>`, h1 48px roxo-escuro, paragraph 20px verde-escuro, botão `purple` "Adquirir Ebook" `box-arrow-up-right`

**2. Banda roxo-claro** (`bg-roxo-claro py-[26px]`):
- Flex wrap justify-center gap-9
- 3 items com `star-fill` bege + texto bold bege (extrair do print)

**3. "Para quem é este ebook?"** (`bg-white py-[70px]`):
- `<SectionTitle eyebrow="Para quem é este ebook?" />`
- Intro texto centralizado max-w-[760px]
- Grid `md:grid-cols-[1fr_392px]` gap 56:
  - Esquerda: 3 bullet cards rosa-15 com `logo-bullet` laranja (extrair titulos/textos do print)
  - Direita: `/imgs/tablet.png` aspect 392/379

**4. "Sobre a Autora"** (`bg-bege-light py-[80px]`):
- `<SectionTitle eyebrow="Sobre a Autora" />`
- Grid `md:grid-cols-[422px_1fr]` gap 56 (espelha SobreMim)
- `/imgs/sobre-mim.png` + bio (extrair do print; pode reusar a bio de SobreMim task 08)

**5. Investimento** (`bg-marrom py-[70px]`):
- `<SectionTitle eyebrow="Investimento" color="var(--bege)" />`
- Centralizado: price card `bg-bege rounded-2xl w-[384px] text-center p-[30px]`
  - "de R$ 40,00" com `line-through opacity-70 text-[18px]`
  - `por R$ ` + **R$ 19,90** `text-[56px] font-bold text-roxo-escuro`
  - "em até 3x sem juros" text-[16px]
  - Ícones `book-half roxo-escuro` + `logo-bullet laranja` tamanho 28px centralizados
  - Botão `purple` "Adquirir Ebook" `box-arrow-up-right`

**Ação**: ao implementar, abrir `prints/figma/ebook-page/Ebook.png` e transcrever copy de todas as seções. Link "Adquirir Ebook" aponta para URL do produto (env var `NEXT_PUBLIC_EBOOK_URL` ou '#' se não definida).

## Verificação
- Rota estática, sem fetch Sanity.
- Desktop: hero 2-col, banda horizontal, for-whom 2-col, autora 2-col, investimento centralizado.
- Mobile: stack vertical em todas as seções.
- Price card visível com preço grande roxo.

## Deploy
```bash
git add app/(site)/ebook/page.tsx
git commit -m "feat(redesign): 16-ebook-page — estática, 5 seções, price card investimento"
git push
```
