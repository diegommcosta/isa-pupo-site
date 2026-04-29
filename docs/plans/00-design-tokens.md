# Task 00 — Design Tokens

## Objetivo
Atualizar `tailwind.config.ts` e `app/globals.css` com os tokens do redesign (type-scale px, CSS vars semânticas, utilitário `.eyebrow-rule`). Não criar `--pad-x` hardcoded — usar classes Tailwind responsivas.

## Referências
- `D:\isa pupa\SITE\isa-pupo-handoff\isa-pupo\project\design\colors_and_type.css`
- `tailwind.config.ts`, `app/globals.css`

## Mudanças

### `tailwind.config.ts`
- Confirmar cores (já existem todas). Adicionar `bege-hero` como alias se necessário.
- Adicionar font-sizes nomeados:
  - `display`: 64px / lh 1.0
  - `h1`: 48px / bold
  - `h2-section`: 32px / bold (eyebrow)
  - `h3-card`: 22px / bold (blog cards)
  - `body-lg`: 20px
  - `body-md`: 16px (atual `rodape`)
  - `body-sm`: 14px (data)
  - `price`: 56px / bold (ebook)
- Confirmar `max-w-content` = 1040px e `max-w-site` = 1440px já existem.

### `app/globals.css`
Adicionar em `:root`:
```css
--rosa-15: rgba(207, 106, 97, 0.15);
--bege-60: rgba(237, 191, 159, 0.6);
--shadow-card: 0 2px 8px rgba(45, 22, 5, 0.06);
--transition-base: 200ms cubic-bezier(0.22, 1, 0.36, 1);
--stroke-1: 1px;
--stroke-3: 3px;
```

Adicionar utilitário:
```css
.eyebrow-rule {
  width: 73px;
  height: 3px;
  background: theme('colors.laranja');
  margin-top: 14px;
  margin-bottom: 14px;
}
```

## Verificação
- `npm run build` sem erros de tipo.
- Nenhuma seção do site regrediu visualmente.

## Deploy
```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat(redesign): 00-design-tokens — CSS vars e type-scale do redesign"
git push
```
