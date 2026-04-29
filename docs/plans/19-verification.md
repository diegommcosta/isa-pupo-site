# Task 19 — Verificação E2E

## Objetivo
Validar o redesign completo em todas as rotas, breakpoints e funcionalidades críticas.

## Pré-requisito
Todas as tasks 00–18 concluídas e commitadas. `npm run build` sem erros.

## Checklist por rota

### `/` (Home)
- [ ] Header: 4 itens (sem Home), logo bege, altura 60-70px, sticky.
- [ ] Hero: fundo bege 60%, h1 Berliana responsivo, copy Figma, botões dark/outline-dark.
- [ ] Quote: fundo roxo-escuro, ilustração no topo, citação centralizada.
- [ ] Sobre Mim: 2-col desktop, foto à esquerda, bio Figma.
- [ ] Atendimentos: 2 cards verde-escuro, watermark cerebro-coracao, bullets, 2 CTAs.
- [ ] Ebook Teaser: 2-col bege, livro, título roxo, bullets book-half, botões purple.
- [ ] Blog Teaser: 3-col branco, cards com watermark, botão outline-dark.
- [ ] CTA Band: marrom, lampada no topo centralizada, botão laranja.
- [ ] Footer: 3-col, Berliana 36px, ícones contato, divider verde-claro.
- [ ] Animações: todas as seções fazem fade-in ao scroll.

### `/blog`
- [ ] Header: 5 itens (com Home), "Blog" sublinhado.
- [ ] Hero branco: SectionTitle "Blog" + subtitle, sem h1 grande.
- [ ] Grid: 3-col desktop, 2-col tablet, 1-col mobile.
- [ ] Paginação: aparece se > 9 posts.

### `/blog/[slug]`
- [ ] Back-link laranja funcional.
- [ ] Meta: data + autora.
- [ ] H1 44px verde-escuro.
- [ ] Regra laranja 73×3.
- [ ] Capa 360px rounded-[20px].
- [ ] Corpo ocupa coluna toda (SEM aside flutuante).
- [ ] Share: Instagram + WhatsApp pill 34×34 roxo-escuro.
- [ ] SEM botão "Agendar uma conversa".
- [ ] Posts recentes: grid 2-col bege-60.
- [ ] CtaBand ao final.

### `/ebook`
- [ ] Hero bege: livro + tag + h1 roxo + botão purple.
- [ ] Banda roxo-claro: 3 highlights star-fill.
- [ ] Para quem: grid 1fr/392 com tablet.png.
- [ ] Sobre a Autora: grid 422/1fr bege-light.
- [ ] Investimento: price card bege em fundo marrom, preço 56px.
- [ ] SEM CtaBand final.

### `/terapia/jungiana`
- [ ] Header: 5 itens, "Atendimentos" sublinhado.
- [ ] Hero branco 2-col: texto/imagem.
- [ ] Tag moon-stars-fill verde-claro.
- [ ] Regra laranja.
- [ ] 3 cards "O que esperar das sessões" em bege-60.
- [ ] Ícones corretos por card.
- [ ] CtaBand.

### `/terapia/integrativa`
- [ ] Igual jungiana mas com tag "stars", imageFit=contain.

### `/studio`
- [ ] Apenas 3 itens: Posts do Blog, Categorias, Autoras.
- [ ] Criar post de teste: `publishedAt` auto-preenchido, não editável.
- [ ] Editar post existente funciona.

## Breakpoints
Para cada rota acima:
- [ ] Desktop 1440px: layout 2–3 colunas, padding lateral correto.
- [ ] Tablet 1024px: grids adaptados.
- [ ] Tablet pequeno 720px: hambúrguer visível, drawer funciona.
- [ ] Mobile 375px: stack vertical, texto legível, sem overflow horizontal.

## Build final
```bash
npm run lint
npm run build
```
- [ ] Zero erros de lint.
- [ ] Zero erros de build/TypeScript.
- [ ] `git push` → Vercel build OK.
- [ ] Validar URL de produção Vercel.
