# Task 02 — Icon Component

## Objetivo
Criar `components/ui/Icon.tsx` e `components/ui/Logo.tsx` para renderizar os SVG icons do design com `currentColor` (herdando cor do parent).

## Referências
- `isa-pupo-handoff/.../app/primitives.jsx:1-50` (Icon com fetch + cache)
- `isa-pupo-handoff/.../app/Header.jsx:1-33` (Logo com viewBox cropado)
- `public/icons/` (SVGs copiados em task 01)

## Abordagem recomendada

Usar `@svgr/webpack` via `next.config.mjs` para importar SVGs como componentes React. Alternativa simples (sem svgr): componente que usa `<img>` — mas não suporta `currentColor`. **Usar svgr** para ícones que precisam herdar cor (botões, badges, etc).

### `next.config.mjs`
```js
import createSvgPlugin from '@svgr/webpack'
// ou via next config:
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });
  return config;
}
```

### `components/ui/Icon.tsx`
```tsx
// Mapa de name -> import dinâmico do SVG como componente
const icons = {
  'arrow-right': dynamic(() => import('@/public/icons/arrow-right.svg')),
  'chat': dynamic(() => import('@/public/icons/chat.svg')),
  // ... todos os ícones
};

export function Icon({ name, size = 16, color = 'currentColor', className }: IconProps) {
  const Svg = icons[name];
  return <Svg width={size} height={size} style={{ color }} className={cn('inline-block', className)} />;
}
```

### `components/ui/Logo.tsx`
```tsx
// Importa logo-horizontal.svg e aplica viewBox cropado + currentColor
import LogoSvg from '@/public/icons/logo-horizontal.svg';
export function Logo({ className }: { className?: string }) {
  // SVG precisa ter viewBox="20 310 1020 440" — editar o SVG diretamente ou usar attr
  return <LogoSvg className={cn('fill-current', className)} />;
}
```

**Nota**: antes de criar o componente, editar `public/icons/logo-horizontal.svg` para substituir o viewBox por `"20 310 1020 440"` (ver handoff `Header.jsx:13`) e garantir que `fill="currentColor"` no root `<svg>`.

## Dependências
- Task 01 (public/icons/ preenchido)
- Instalar pacote: `npm install --save-dev @svgr/webpack`

## Verificação
- `import { Icon } from '@/components/ui/Icon'` funciona sem erro.
- `<Icon name="chat" size={16} color="var(--bege)" />` renderiza SVG colorido.
- `<Logo className="text-bege h-[40px] w-auto" />` renderiza o logo na cor bege.

## Deploy
```bash
git add components/ui/Icon.tsx components/ui/Logo.tsx next.config.mjs public/icons/logo-horizontal.svg
git commit -m "feat(redesign): 02-icon-component — Icon e Logo com currentColor via svgr"
git push
```
