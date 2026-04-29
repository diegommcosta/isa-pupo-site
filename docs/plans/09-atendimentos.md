# Task 09 — Atendimentos

## Objetivo
Reescrever os cards de atendimentos: cerebro-coracao.png interno, IconDisc, bullets, dois CTAs por card. Conteúdo estático do Figma.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:104-167`
- `components/home/Atendimentos.tsx` (atual)
- Print copy: `D:\isa pupa\SITE\prints\figma\home\home.png` — **transcrever copy dos cards VERBATIM**

## Mudanças

### `components/home/Atendimentos.tsx`
- Tornar **estático** — remover prop `cards` do Sanity.
- Estrutura:
```tsx
<section
  id="atendimentos"
  data-animate
  className="bg-verde-escuro py-16 md:py-20"
>
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <SectionTitle eyebrow="Atendimentos" color="var(--bege)" />
    <div
      data-animate-stagger
      className="max-w-content mx-auto mt-[50px] flex justify-center gap-8 flex-wrap"
    >
      <AtendCard
        icon="moon-stars-fill"
        title="Terapia Junguiana"
        body="..."  {/* do Figma */}
        bullets={['...', '...', '...']}  {/* do Figma */}
        whatsappMsg="Olá Isa! Gostaria de saber mais sobre Terapia Junguiana."
        href="/terapia/jungiana"
      />
      <AtendCard
        icon="stars"
        title="Terapia Integrativa"
        body="..."  {/* do Figma */}
        bullets={['...', '...', '...']}  {/* do Figma */}
        whatsappMsg="Olá Isa! Gostaria de saber mais sobre Terapia Integrativa."
        href="/terapia/integrativa"
      />
    </div>
  </div>
</section>
```

#### Componente `AtendCard`
```tsx
// Dentro do arquivo Atendimentos.tsx ou separado
function AtendCard({ icon, title, body, bullets, whatsappMsg, href }) {
  return (
    <div
      className="relative w-full max-w-[412px] min-h-[480px] bg-bege-light rounded-[30px] p-[45px] overflow-hidden flex flex-col"
    >
      {/* Watermark cerebro-coracao */}
      <div
        aria-hidden
        className="absolute left-[63px] top-[15px] w-[286px] h-[450px] pointer-events-none opacity-55"
        style={{ background: 'url(/imgs/cerebro-coracao.png) center/contain no-repeat' }}
      />
      <div className="relative flex-1">
        <IconDisc icon={icon} />
        <h3 className="mt-4 mb-[10px] font-sans font-bold text-[32px] leading-snug text-marrom">
          {title}
        </h3>
        <p className="text-[17px] leading-[1.45] text-marrom max-w-[320px]">{body}</p>
        <div className="mt-[18px] flex flex-col gap-2">
          {bullets.map((b, i) => <BulletRow key={i} icon="logo-bullet">{b}</BulletRow>)}
        </div>
      </div>
      <div className="relative mt-5 flex gap-2.5 flex-wrap">
        <Button variant="primary" leftIcon="chat" href={buildWhatsappLink(whatsappMsg)}>Agendar Consulta</Button>
        <Button variant="outline-orange" rightIcon="arrow-right" href={href}>Saiba mais</Button>
      </div>
    </div>
  );
}
```

### `app/page.tsx`
- Remover prop `cards` do `<Atendimentos />`.

**Ação**: ao implementar, abrir `D:\isa pupa\SITE\prints\figma\home\home.png`, seção "Atendimentos", e transcrever título, body e 3 bullets de cada card.

## Verificação
- Verde-escuro de fundo, 2 cards visíveis em desktop.
- Mobile: cards empilhados.
- Watermark cerebro-coracao aparece dentro de cada card, atrás do conteúdo.
- Botão "Agendar" abre WhatsApp com mensagem correta.
- "Saiba mais" navega para /terapia/{slug}.

## Deploy
```bash
git add components/home/Atendimentos.tsx app/page.tsx
git commit -m "feat(redesign): 09-atendimentos — cards com watermark, bullets, CTAs estáticos"
git push
```
