# Task 04 — Header

## Objetivo
Reescrever o Header: altura 60–70px, logo colorível, item "Home" condicional nas rotas internas, underline no item ativo, drawer mobile com hambúrguer animado.

## Referências
- `isa-pupo-handoff/.../app/Header.jsx`
- `components/layout/Header.tsx` (atual)
- `lib/nav.ts`
- Print: `D:\isa pupa\SITE\prints\figma\home\home.png` (versão sem Home) e prints internos (versão com Home)

## Mudanças

### `components/layout/Header.tsx`
- `"use client"` (mantém, usa `useState`, `usePathname`)
- Altura: `h-[60px]` ou `h-[70px]` — escolher o que fica melhor com o logo. Default 60px, aumentar para 70 se o logo precisar.
- `bg-verde-escuro sticky top-0 z-50`
- Container interno: `max-w-site mx-auto px-4 md:px-8 lg:px-[200px] flex items-center justify-between`
- **Logo**: `<Link href="/"><Logo className="text-bege h-10 w-auto" /></Link>` — Logo do task 02.
- **Nav desktop** (`hidden lg:flex items-center gap-6`):
  - Lista de itens: computar via `usePathname()`. Se `pathname === '/'`: `[sobre, atendimentos, ebook, blog]`. Se não: `[home, sobre, atendimentos, ebook, blog]`.
  - `sobre`/`atendimentos`/`ebook`/`blog` são anchors na home (`/#sobre`, `/#atendimentos`, etc.) — quando estiver em rota interna, vão para `/` primeiro.
  - Underline no item ativo: comparar `pathname` com a href do item. Usar `border-b border-bege` no ativo vs `border-b border-transparent`.
  - Botão "Agendar": `<Button variant="primary" size="sm" href={whatsappLink} leftIcon="chat">Agendar</Button>` — usando `buildWhatsappLink` de `lib/whatsapp.ts`.
  - Ícone Instagram: `<a href="https://instagram.com/isa.pupo" target="_blank"><Icon name="instagram" size={18} color="var(--bege)" /></a>` — usar link real ou env var `NEXT_PUBLIC_INSTAGRAM_URL`.
- **Hambúrguer mobile** (`flex lg:hidden`): 3 barras animadas (mesmos `useState mobileOpen`). Drawer: `absolute left-0 right-0 top-[60px] bg-verde-escuro px-4 py-6 flex flex-col gap-4 border-t border-bege/15`.

### `lib/nav.ts`
Verificar se já exporta os 4 links. Não precisa incluir "Home" — o Header computa condicionalmente.

## Verificação
- Na home (`/`): 4 itens (Sobre, Atendimentos, Ebook, Blog), sem "Home".
- Em `/blog`: 5 itens (Home, Sobre, Atendimentos, Ebook, Blog), "Blog" sublinhado.
- Em `/terapia/jungiana`: 5 itens, "Atendimentos" sublinhado.
- Mobile 375px: hambúrguer visível, drawer abre/fecha, itens corretos.
- Header sticky ao scrollar.

## Deploy
```bash
git add components/layout/Header.tsx lib/nav.ts
git commit -m "feat(redesign): 04-header — altura 60-70px, logo, Home condicional, underline ativo"
git push
```
