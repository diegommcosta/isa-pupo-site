# Task 05 — Footer

## Objetivo
Reescrever o Footer: 3 colunas, brand em Berliana, ícones WhatsApp/Instagram, divider verde-claro.

## Referências
- `isa-pupo-handoff/.../app/Footer.jsx`
- `components/layout/Footer.tsx` (atual)

## Mudanças

### `components/layout/Footer.tsx`
- `bg-verde-escuro text-bege`
- Container: `max-w-site mx-auto px-4 md:px-8 lg:px-[200px]`, padding `pt-[60px] pb-[32px]`
- Grid: `grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-8 border-b-[3px] border-verde-claro`
- **Coluna 1** — Brand:
  - `font-display text-[36px] text-bege leading-tight mb-[14px]`: "Isa Pupo"
  - Parágrafo 16px bege/90: "Terapia Integrativa & Junguiana, cuidando da sua jornada interior com acolhimento e profundidade."
- **Coluna 2** — Navegação:
  - Header bold 16px bege mb-[10px]: "Navegação"
  - Links: Home, Sobre, Atendimentos, Ebook, Blog — `text-bege/90 underline underline-offset-[3px] text-base block py-1`
  - Usar `<Link>` para rotas, `/#sobre` etc. para anchors.
- **Coluna 3** — Contato:
  - Header bold 16px bege mb-[10px]: "Contato"
  - `<a href={whatsappLink}>` com `<Icon name="whatsapp" />` + "WhatsApp"
  - `<a href="https://instagram.com/isa.pupo">` com `<Icon name="instagram" />` + "Instagram"
- Rodapé: `pt-5 text-center text-[14px] text-bege/80`: `© {ano} Isa Pupo. Feito com ♥ por Diego Manoel`

## Verificação
- Desktop: 3 colunas visíveis com proporção correta.
- Mobile: stack em coluna única, gap 24.
- Ícones WhatsApp e Instagram renderizam coloridos (bege).
- Copyright dinâmico com ano atual.

## Deploy
```bash
git add components/layout/Footer.tsx
git commit -m "feat(redesign): 05-footer — 3 colunas, Berliana brand, ícones contato"
git push
```
