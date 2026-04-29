# Task 12 — CTA Band

## Objetivo
Reescrever CtaBand: cerebro-lampada centralizada no topo (opacidade 90%), texto centralizado, botão primary.

## Referências
- `isa-pupo-handoff/.../app/CtaFinal.jsx`
- `components/layout/CtaBand.tsx` (atual)

## Mudanças

### `components/layout/CtaBand.tsx`
```tsx
<section
  data-animate
  className="relative bg-marrom text-bege py-12 md:py-16 text-center overflow-hidden"
>
  {/* Ilustração decorativa centralizada no topo */}
  <Image
    src="/imgs/cerebro-lampada.png"
    alt=""
    aria-hidden
    width={162}
    height={267}
    className="absolute top-0 left-1/2 -translate-x-1/2 opacity-90 pointer-events-none select-none"
  />
  {/* Conteúdo */}
  <div className="relative max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <h2 className="font-sans font-bold text-[32px] leading-none text-bege">
      Pronta para começar?
    </h2>
    <p className="mt-[14px] text-[20px] leading-[1.35] text-bege/95 max-w-[520px] mx-auto">
      Agende sua sessão e dê o primeiro passo na sua jornada de autoconhecimento.
    </p>
    <div className="mt-[22px] flex justify-center">
      <Button variant="primary" leftIcon="chat" href={buildWhatsappLink(message)}>
        Agende sua Consulta
      </Button>
    </div>
  </div>
</section>
```

Props: `message?: string` (default "Olá Isa! Gostaria de agendar uma consulta.").

## Verificação
- Fundo marrom, texto centralizado.
- Ilustração `cerebro-lampada.png` visível no topo, centralizada.
- Botão laranja, link para WhatsApp.
- Em mobile: ilustração não corta o texto (o texto tem `relative z-10`).

## Deploy
```bash
git add components/layout/CtaBand.tsx
git commit -m "feat(redesign): 12-cta-band — lampada centralizada topo, texto centralizado"
git push
```
