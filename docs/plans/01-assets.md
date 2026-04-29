# Task 01 — Assets

## Objetivo
Copiar PNGs do design para `public/imgs/` e SVG icons + logos para `public/icons/`. Limpar arquivos legados sem mais referências.

## Referências
- Handoff assets: `D:\isa pupa\SITE\isa-pupo-handoff\isa-pupo\project\design\assets\`

## Mudanças

### Copiar para `public/imgs/`
- `hero.png`
- `livro.png`
- `sobre-mim.png`
- `tablet.png`
- `cerebro-coracao.png`
- `cerebro-coracao-flores.png`
- `cerebro-lampada.png`
- `pag-terapia-jungiana.png`
- `pag-terapia-integrativa.png`

### Copiar para `public/icons/`
Ícones SVG (todos de `design/assets/icons/`):
- `arrow-right.svg`
- `book-half.svg`
- `box-arrow-up-right.svg`
- `calendar.svg`
- `chat.svg`
- `check2.svg`
- `instagram.svg`
- `logo-bullet.svg`
- `moon-stars-fill.svg`
- `people.svg`
- `star-fill.svg`
- `stars.svg`
- `whatsapp.svg`

Logos (de `design/assets/`):
- `logo-horizontal.svg`
- `logo-horizontal-bege.svg`
- `logo.svg`

### Limpar legados em `public/imgs/`
Remover arquivos com espaços/underscores em nomes que foram deletados (ver git status: `assets/imgs/hero/`, `assets/imgs/sobre mim/`, etc.) — esses já estão no git como deleted; confirmar que `public/` está limpa de versões antigas.

### `next.config.mjs`
Imagens locais (`public/`) não precisam de domínio em `remotePatterns`. Confirmar que a config atual não bloqueia nada local.

## Verificação
- `ls public/imgs/` lista todos os PNGs novos.
- `ls public/icons/` lista todos os SVGs.
- `npm run dev` não lança 404 para `/imgs/hero.png`.

## Deploy
```bash
git add public/
git commit -m "feat(redesign): 01-assets — PNGs e SVG icons do handoff para public/"
git push
```
