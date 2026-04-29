# Task 18 — Animações GSAP

## Objetivo
Garantir que todas as seções (home + páginas internas) têm `data-animate` e que os grids têm `data-animate-stagger`. Ajustar trigger para mobile.

## Referências
- `components/ui/AnimationsProvider.tsx` (atual)
- `isa-pupo-handoff/.../app/styles.css:30-39` (IntersectionObserver como referência de comportamento)
- `isa-pupo-handoff/.../app.jsx:9-27`

## Mudanças

### Adicionar `data-animate` nas seções novas
Verificar que cada `<section>` ou `<div>` de bloco principal tem `data-animate`:

- ✅ `Hero` — já tem
- ✅ `CarlJungQuote` — já tem
- ✅ `SobreMim` — já tem
- ✅ `Atendimentos` — já tem
- ✅ `EbookTeaser` — já tem
- ✅ `BlogTeaser` — já tem
- ✅ `CtaBand` — já tem
- ❌ `BlogPage` (`/blog`) — adicionar nas seções hero + grid
- ❌ `BlogPostPage` (`/blog/[slug]`) — adicionar nas seções meta, capa, corpo, posts recentes
- ❌ `EbookPage` (`/ebook`) — adicionar em cada seção
- ❌ `TherapyPage` — adicionar nas seções hero e cards

### Adicionar `data-animate-stagger` nos grids
- `Atendimentos`: container dos 2 cards `.atend-grid`
- `BlogTeaser`: container do grid `.blog-grid`
- `BlogPage` grid de posts
- `TherapyPage` grid de cards `.terapia-cards`

### `components/ui/AnimationsProvider.tsx`
Ajustar o trigger para funcionar bem em mobile:
```ts
// Trocar "top 85%" por "top 95%" em viewports pequenos
const start = window.innerWidth < 768 ? 'top 95%' : 'top 85%';

ScrollTrigger.create({
  trigger: el,
  start,
  once: true,
  onEnter: () => gsap.to(el, { ... }),
});
```

Ou usar `rootMargin` ajustado dinamicamente.

Manter:
- `opacity: 0 → 1`
- `y: 40 → 0`
- `duration: 0.7`
- `ease: "power2.out"`
- `once: true`

## Verificação
- Abrir o site em mobile 375px, rolar a página: todas as seções fazem fade-in ao entrar na tela.
- Em desktop 1440px: mesmo comportamento.
- Grids com `data-animate-stagger` fazem os filhos aparecerem em sequência.
- `AnimationsProvider` não causa erros de hydration (é `"use client"` com `useEffect`).

## Deploy
```bash
git add components/ui/AnimationsProvider.tsx components/
git commit -m "feat(redesign): 18-animations — data-animate em páginas internas, stagger nos grids"
git push
```
