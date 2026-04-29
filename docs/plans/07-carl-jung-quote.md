# Task 07 — CarlJungQuote (Divisor Citação)

## Objetivo
Atualizar o divisor roxo com ilustração cerebro-coracao-flores centralizada no topo e citação centralizada.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:48-71`
- `components/home/CarlJungQuote.tsx` (atual)

## Mudanças

### `components/home/CarlJungQuote.tsx`
- Tornar **estático** — remover prop `quote` do Sanity.
- Estrutura:
```tsx
<section
  data-animate
  className="relative overflow-hidden py-12 md:py-16 px-6 bg-roxo-escuro flex items-center justify-center"
  style={{ minHeight: 350 }}
>
  {/* Ilustração decorativa centralizada no topo */}
  <Image
    src="/imgs/cerebro-coracao-flores.png"
    alt=""
    aria-hidden
    width={240}
    height={308}
    className="absolute left-1/2 top-[21px] -translate-x-1/2 opacity-35 pointer-events-none select-none"
  />
  {/* Citação */}
  <blockquote className="relative z-10 text-center text-bege max-w-[880px] mx-auto">
    <p className="text-[18px] md:text-[22px] font-normal italic leading-[1.4] font-sans">
      "Quem olha para fora, sonha; quem olha para dentro, desperta."
    </p>
    <footer className="mt-[14px] not-italic text-[16px] opacity-85">— Carl Jung</footer>
  </blockquote>
</section>
```

### `app/page.tsx`
- Remover prop `quote` do `<CarlJungQuote />`.

## Verificação
- Fundo roxo-escuro.
- Ilustração visível, semitransparente, centralizada.
- Citação 22px em desktop, 18px em mobile.
- Texto não fica atrás da ilustração (z-index do blockquote).

## Deploy
```bash
git add components/home/CarlJungQuote.tsx app/page.tsx
git commit -m "feat(redesign): 07-carl-jung-quote — ilustração centralizada, citação estática"
git push
```
