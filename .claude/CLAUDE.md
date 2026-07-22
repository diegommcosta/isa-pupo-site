# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

No test suite configured.

## Workflow de deploy

**Sempre que concluir uma tarefa ou conjunto de mudanças, faça commit e push para o GitHub.** O projeto está conectado à Vercel com deploy automático no branch `main` — o push já dispara o build e permite conferir o resultado em produção sem nenhuma etapa extra.

```bash
git add <arquivos-modificados>
git commit -m "descrição da mudança"
git push
```

Não acumule mudanças sem subir — o usuário usa a URL da Vercel para validar visualmente cada iteração.

## Stack

- **Next.js 16** App Router, React 19, TypeScript
- **Sanity CMS** (project `pu8pdio8`, dataset `production`) embedded at `/studio`
- **Tailwind CSS 3** with custom design tokens (see below)
- **next-sanity v12** for data fetching and Studio embedding

## Environment Variables

Required in `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `pu8pdio8` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | Sanity Viewer token for server-side reads |
| `SANITY_REVALIDATE_SECRET` | Webhook secret for on-demand ISR |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `11999998888` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) — opcional; sem ela o GA não renderiza |

## Architecture

### Content flow

All content comes from Sanity. Pages fetch via GROQ queries in `lib/sanity/queries.ts`. The Sanity client at `lib/sanity/client.ts` uses the read token for server-side fetches.

### Rendering strategy

- Home page: ISR, `revalidate = 3600`
- Blog posts and therapy pages: SSG (`generateStaticParams`) + ISR 3600s
- On-demand revalidation via `POST /api/revalidate?secret=...` (Sanity webhook)

### Routing

```
/                         → app/page.tsx (homepage, all sections)
/blog                     → paginated blog index
/blog/[slug]              → blog post (SSG)
/ebook                    → ebook landing
/terapia/jungiana         → Jungian therapy page
/terapia/integrativa      → Integrative therapy page
/studio/[[...tool]]       → Sanity Studio (force-static)
/api/revalidate           → ISR webhook
```

### Sanity schema (active — in `studio/schemas/`)

Collections: `post`, `author`, `category`

The root `sanity.config.ts` (used by the `/studio` embed) imports schemas from `studio/schemas/`. The CLI config at `sanity.cli.ts` reads from env vars.

### Component structure

```
components/
  layout/   Header, Footer, SiteLayout, CtaBand
  home/     Hero, CarlJungQuote, SobreMim, Atendimentos, EbookTeaser, BlogTeaser
  therapy/  TherapyPage (shared template for jungiana/integrativa)
  blog/     BlogCard
  ui/       Button
```

Homepage sections use `id` anchors (`#sobre`, `#atendimentos`, `#ebook`, `#blog`) for nav scroll links.

### Design tokens (Tailwind)

**Colors** (Brazilian Portuguese names):
`bege` #EDBF9F · `bege-light` #EFDDD1 · `laranja` #BC2F0A (CTA) · `verde-escuro` #2D3322 (header/footer/atendimentos) · `verde-claro` #6E7C59 · `roxo-escuro` #53346B · `roxo-claro` #725093 · `rosa` #CF6A61 · `marrom` #2D1605 · `cinza` #9E9E9E

**Fonts:** `font-sans` → Amaranth (body), `font-display` → Berliana (headings/display)

**Max widths:** `max-w-site` 1440px · `max-w-content` 1040px

**Utilities:** `cn()` in `lib/utils.ts` (clsx + tailwind-merge). WhatsApp links via `lib/whatsapp.ts`. Nav links compartilhados via `lib/nav.ts`.

**UI Components:** `Button` (variants: primary/dark/purple/outline-orange/outline-dark/outline-purple, size: sm, slots leftIcon/rightIcon) · `Tag` (opacidade 15% rosa) · `AnimationsProvider` (GSAP ScrollTrigger global — adicionar `data-animate` em seções e `data-animate-stagger` em grids).

**CSS utilities:** `.tag` · `.eyebrow-rule` · `.card-hover` (definidas em `app/globals.css`).

### Images

Remote images must come from `cdn.sanity.io` (configured in `next.config.mjs`). Use `urlFor()` from `lib/sanity/client.ts` to build Sanity image URLs.
