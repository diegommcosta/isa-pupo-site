# Task 06 — Hero (seção da home)

## Objetivo
Reescrever o Hero com fundo bege 60%, tipografia Berliana responsiva, copy do Figma, CTAs dark/outline-dark, imagem hero.png.

## Referências
- `isa-pupo-handoff/.../app/HomePage.jsx:3-46`
- `components/home/Hero.tsx` (atual)
- Print copy: `D:\isa pupa\SITE\prints\figma\home\home.png` — **transcrever copy VERBATIM**

## Mudanças

### `components/home/Hero.tsx`
- Tornar **estático** — remover props `title`/`subtitle`/`description`. Copy fixo do `.fig`.
- Estrutura:
```tsx
<section
  data-animate
  className="relative overflow-hidden py-16 md:py-20"
  style={{ background: 'rgba(237,191,159,0.6)' }}
>
  <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
    <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[480px]">
      {/* Coluna esquerda */}
      <div>
        <Tag>Terapeuta Junguiana e Integrativa</Tag>
        <h1 className="font-display font-normal text-[44px] md:text-[64px] lg:text-[96px] leading-none text-marrom mt-5">
          Isa Pupo
        </h1>
        <div className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-marrom max-w-[440px] space-y-2.5">
          {/* 3 parágrafos do .fig — transcrever aqui */}
        </div>
        <div className="mt-8 flex gap-2.5 flex-wrap">
          <Button variant="dark" leftIcon="chat" href={buildWhatsappLink(MSG)}>Agendar Consulta</Button>
          <Button variant="outline-dark" rightIcon="arrow-right" href="/#sobre">Saiba mais</Button>
        </div>
      </div>
      {/* Coluna direita */}
      <div className="relative h-[320px] md:h-[480px] w-full justify-self-end">
        <Image src="/imgs/hero.png" alt="Isa Pupo" fill style={{ objectFit: 'contain', objectPosition: 'right center' }} />
      </div>
    </div>
  </div>
</section>
```

**Ação**: ao implementar, abrir `D:\isa pupa\SITE\prints\figma\home\home.png` e transcrever os 3 parágrafos de copy do Hero verbatim.

### `app/page.tsx`
- Remover props `title`/`subtitle` do `<Hero />`.
- Remover leitura de `page.heroTitle`/`page.heroSubtitle` do Sanity (hero virou estático).

## Verificação
- Desktop (1440): título Berliana 96px, 2-col lado-a-lado.
- Tablet (1024): texto 64px, imagem 480px.
- Mobile (375): stack vertical, texto 44px, imagem acima ou abaixo.
- Copy idêntico ao print do `.fig`.

## Deploy
```bash
git add components/home/Hero.tsx app/page.tsx
git commit -m "feat(redesign): 06-hero — Berliana responsivo, copy do Figma, CTAs dark"
git push
```
