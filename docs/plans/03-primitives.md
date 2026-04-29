# Task 03 — Primitives (Button, Tag, IconDisc, SectionTitle, BulletRow)

## Objetivo
Atualizar `Button` e `Tag` com novos variants. Criar `IconDisc`, `SectionTitle`, `BulletRow`.

## Referências
- `isa-pupo-handoff/.../app/primitives.jsx:52-156`
- `components/ui/Button.tsx` (atual)
- `components/ui/Tag.tsx` (atual)

## Mudanças

### `components/ui/Button.tsx`
Adicionar variants (mantendo os atuais `filled` e `outlined`):
- `dark` → `bg-verde-escuro text-bege`
- `brown` → `bg-marrom text-bege`
- `purple` → `bg-roxo-escuro text-bege`
- `outline-dark` → borda + texto `verde-escuro`
- `outline-purple` → borda + texto `roxo-escuro`
- `outline-brown` → borda + texto `marrom`
- `outline-bege` → borda + texto `bege`

Size padrão (sm): altura 29px, padding 5×10, gap 6, radius 5, fontSize 16, lineHeight 1.

Manter sizes `md` e `lg` existentes para compatibilidade onde já usados.

Props: adicionar `leftIcon?: string` e `rightIcon?: string` que usam `<Icon name={...} />`.

### `components/ui/Tag.tsx`
- Adicionar props `icon?: string` e `iconColor?: string`.
- Renderizar `<Icon name={icon} />` à esquerda se fornecido.

### Criar `components/ui/IconDisc.tsx`
```tsx
// Círculo de 44×44 bege com ícone 24px marrom centralizado
export function IconDisc({ icon, color = 'var(--marrom)', bg = 'var(--bege)', size = 44, iconSize = 24 })
```

### Criar `components/ui/SectionTitle.tsx`
```tsx
// eyebrow (h2, 32px Amaranth bold) + regra laranja 73×3 + subtitle opcional
export function SectionTitle({ eyebrow, subtitle, color, subColor })
```
Usa `.eyebrow-rule` do globals.css (task 00).

### Criar `components/ui/BulletRow.tsx`
```tsx
// ícone à esquerda (default logo-bullet laranja) + texto, gap 10
export function BulletRow({ icon, iconColor, textColor, size, children })
```

## Verificação
- `npm run build` sem erros.
- Storybook (se existir) ou teste visual no dev server com um componente de teste.

## Deploy
```bash
git add components/ui/
git commit -m "feat(redesign): 03-primitives — novos variants Button, Tag, IconDisc, SectionTitle, BulletRow"
git push
```
