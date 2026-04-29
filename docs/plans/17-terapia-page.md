# Task 17 — Páginas de Terapia (estáticas)

## Objetivo
Reescrever TherapyPage com novo layout: hero branco grid, "Como funciona", "O que esperar das sessões" 3 cards. Estático via constantes em lib/content/therapy.ts.

## Referências
- `isa-pupo-handoff/.../app/TerapiaPage.jsx`
- `components/therapy/TherapyPage.tsx` (atual)
- `app/(site)/terapia/jungiana/page.tsx`
- `app/(site)/terapia/integrativa/page.tsx`
- Prints:
  - `D:\isa pupa\SITE\prints\figma\terapia-jungiana\Terapia Jungiana.png`
  - `D:\isa pupa\SITE\prints\figma\terapia-integrativa\Terapia Integrativa.png`

## Mudanças

### Criar `lib/content/therapy.ts`
```ts
export type TherapySection = { title: string; items: string[] };
export type TherapyData = {
  slug: string;
  tagText: string;
  tagIcon: string;
  title: string;
  intro: string; // multi-parágrafo separado por \n
  image: string;
  imageFit?: 'cover' | 'contain';
  sections: TherapySection[];
  whatsappMessage: string;
};

export const TERAPIA_JUNGIANA: TherapyData = {
  slug: 'jungiana',
  tagText: 'Psicologia analítica de Carl Jung',
  tagIcon: 'moon-stars-fill',
  title: 'Terapia Junguiana',
  image: '/imgs/pag-terapia-jungiana.png',
  intro: '...', // transcrever do print
  sections: [
    { title: 'O que trabalhamos', items: [...] },  // do print
    { title: 'Benefícios', items: [...] },
    { title: 'Para quem é indicado', items: [...] },
  ],
  whatsappMessage: 'Olá Isa! Gostaria de saber mais sobre Terapia Junguiana.',
};

export const TERAPIA_INTEGRATIVA: TherapyData = {
  // ... do print terapia-integrativa
  imageFit: 'contain',
};
```

**Ação**: ao implementar, abrir os dois PNGs e transcrever copy de cada seção verbatim.

### `components/therapy/TherapyPage.tsx`
```tsx
export function TherapyPage({ data }: { data: TherapyData }) {
  const bulletIcon = (title: string) =>
    title === 'Benefícios' ? 'check2' :
    title === 'Para quem é indicado' ? 'people' : 'logo-bullet';

  return (
    <>
      {/* Hero branco */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_422px] gap-14 items-start">
            <div>
              <Tag icon={data.tagIcon} iconColor="var(--verde-claro)">{data.tagText}</Tag>
              <h1 className="mt-5 font-sans font-bold text-[48px] leading-[1.05] text-verde-escuro">
                {data.title}
              </h1>
              <span className="block w-[73px] h-[3px] bg-laranja mt-[18px] mb-[26px]" />
              <h2 className="font-sans font-bold text-[24px] leading-[1.1] text-marrom mb-4">
                Como funciona
              </h2>
              <div className="text-[18px] leading-[1.55] text-marrom max-w-[560px] space-y-[14px]">
                {data.intro.split('\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div
              className="w-full h-[560px] rounded-[16px] overflow-hidden"
              style={{ background: `url(${data.image}) center/${data.imageFit || 'cover'} no-repeat` }}
            />
          </div>
        </div>
      </section>

      {/* O que esperar das sessões */}
      <section className="bg-bege/60 py-16 md:py-20">
        <div className="max-w-site mx-auto px-4 md:px-8 lg:px-[200px]">
          <SectionTitle eyebrow="O que esperar das sessões" />
          <div className="max-w-content mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.sections.map(sec => (
              <div key={sec.title} className="bg-bege-light rounded-[20px] p-6 flex flex-col gap-3.5">
                <h3 className="font-sans font-bold text-[22px] leading-[1.15] text-verde-escuro">
                  {sec.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {sec.items.map((item, i) => (
                    <BulletRow key={i} icon={bulletIcon(sec.title)} iconColor="var(--laranja)" textColor="var(--marrom)" size={15}>
                      {item}
                    </BulletRow>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand message={data.whatsappMessage} />
    </>
  );
}
```

### `app/(site)/terapia/jungiana/page.tsx`
```tsx
import { TERAPIA_JUNGIANA } from '@/lib/content/therapy';
import { TherapyPage } from '@/components/therapy/TherapyPage';

export default function Page() {
  return <TherapyPage data={TERAPIA_JUNGIANA} />;
}

export const metadata = { title: 'Terapia Junguiana — Isa Pupo', description: '...' };
```

Igual para `integrativa` com `TERAPIA_INTEGRATIVA`.

## Verificação
- Desktop: hero 2-col (texto/imagem), 3 cards na seção "O que esperar das sessões".
- Mobile: stack vertical, cards 1-col.
- Copy idêntico ao print.
- Ícones corretos por seção: logo-bullet (O que trabalhamos), check2 (Benefícios), people (Para quem).
- imageFit 'contain' aplicado para integrativa.

## Deploy
```bash
git add lib/content/therapy.ts components/therapy/TherapyPage.tsx app/(site)/terapia/
git commit -m "feat(redesign): 17-terapia-page — layout estático, 3 cards sessões, copy do Figma"
git push
```
