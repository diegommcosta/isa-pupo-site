# Task 13 — Sanity: somente Blog

## Objetivo
Reduzir o Sanity para gerenciar apenas posts de blog. Remover schemas não usados. Tornar publishedAt auto-gerado e readOnly.

## Referências
- `studio/schemas/` (todos os arquivos)
- `studio/structure.ts`
- `lib/sanity/queries.ts`
- `lib/sanity/types.ts`
- `app/api/revalidate/route.ts`

## Mudanças

### Apagar schemas não usados
Remover os arquivos:
- `studio/schemas/therapy.ts`
- `studio/schemas/ebook.ts`
- `studio/schemas/homePage.ts`
- `studio/schemas/siteSettings.ts`

### `studio/schemas/index.ts`
```ts
import post from './post';
import category from './category';
import author from './author';

export const schemaTypes = [post, category, author];
```

### `studio/schemas/post.ts`
Alterar o campo `publishedAt`:
```ts
defineField({
  name: 'publishedAt',
  title: 'Publicado em',
  type: 'datetime',
  readOnly: true,
  initialValue: () => new Date().toISOString(),
}),
```
Ao criar um novo post, a data é preenchida automaticamente e não é editável.

### `studio/structure.ts`
Verificar e atualizar para expor apenas Post, Categoria, Autora. Exemplo:
```ts
import { StructureBuilder } from 'sanity/structure';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo')
    .items([
      S.documentTypeListItem('post').title('Posts do Blog'),
      S.documentTypeListItem('category').title('Categorias'),
      S.documentTypeListItem('author').title('Autoras'),
    ]);
```

### `lib/sanity/queries.ts`
Remover:
- `homePageQuery`
- `therapyPageQuery`
- `ebookPageQuery`
- `therapySlugsQuery`

Manter:
- `blogIndexQuery`
- `blogPostQuery`
- `blogSlugsQuery`

### `lib/sanity/types.ts`
Remover interfaces/types:
- `HomePageData`
- `EbookPageData`
- `TherapyPage`
- `TherapyFeature`

Manter:
- `Post`
- `BlogCard` type (ou inline)
- `Author`
- `Category`

### `app/api/revalidate/route.ts`
Manter apenas branch para `_type === 'post'`. Remover branches para `therapy`, `ebook`, `homePage`, `siteSettings`.

### `app/page.tsx`
Simplificar o fetch: remover leitura de `page` (homePage Sanity). Manter apenas `latestPosts`. O `settings` pode ser removido se não usado.

```ts
const posts = await client.fetch(latestPostsQuery).catch(() => []);
// latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0..2] { ... }`
```

Ou atualizar `homePageQuery` para retornar apenas `latestPosts`.

## Verificação
- `/studio` lista apenas: Posts do Blog, Categorias, Autoras.
- Criar novo post: campo `publishedAt` preenchido automaticamente (não editável).
- `/` (home) ainda renderiza os 3 últimos posts no BlogTeaser.
- `npm run build` sem erros de tipos.

## Deploy
```bash
git add studio/ lib/sanity/ app/page.tsx app/api/
git commit -m "feat(redesign): 13-sanity-blog-only — remove schemas não-blog, publishedAt auto"
git push
```
