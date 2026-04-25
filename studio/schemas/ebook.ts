import { defineField, defineType } from "sanity";

export default defineType({
  name: "ebook",
  title: "Ebook",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título do ebook", type: "string" }),
    defineField({ name: "subtitle", title: "Subtítulo", type: "text", rows: 2 }),
    defineField({
      name: "cover",
      title: "Capa do ebook",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "price",
      title: "Preço atual (ex: R$97,00)",
      type: "string",
    }),
    defineField({
      name: "priceFrom",
      title: "Preço original (riscado, ex: R$197,00)",
      type: "string",
    }),
    defineField({
      name: "ctaUrl",
      title: "URL de compra",
      type: "url",
    }),
    defineField({
      name: "paraQuem",
      title: '"Para quem é este ebook" (bullets)',
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "conteudo",
      title: "O que tem no ebook (itens)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "chapter", title: "Capítulo/seção", type: "string" }),
            defineField({ name: "description", title: "Descrição", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "chapter" } },
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Autora",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
  preview: {
    select: { title: "title", media: "cover" },
  },
});
