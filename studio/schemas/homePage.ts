import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero: título principal", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero: subtítulo", type: "text", rows: 2 }),
    defineField({
      name: "heroImage",
      title: "Hero: imagem de fundo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "carlJungQuote", title: "Citação Carl Jung", type: "text", rows: 2 }),
    defineField({
      name: "sobreMimBio",
      title: "Sobre mim: texto",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "sobreMimPhoto",
      title: "Sobre mim: foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "atendimentos",
      title: "Atendimentos (cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Ícone (nome lucide)", type: "string" }),
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({ name: "description", title: "Descrição", type: "text", rows: 2 }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "ebookTeaser",
      title: "Ebook: texto teaser",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "latestPostsCount",
      title: "Número de posts recentes na home",
      type: "number",
      initialValue: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Página Home" }),
  },
});
