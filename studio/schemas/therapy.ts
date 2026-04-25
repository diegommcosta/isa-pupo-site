import { defineField, defineType } from "sanity";

export default defineType({
  name: "therapy",
  title: "Página de Terapia",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description: 'Use "jungiana" ou "integrativa"',
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Título principal", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tag", title: "Tag (ex: Terapia Jungiana)", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Imagem hero",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt" })],
    }),
    defineField({
      name: "intro",
      title: "Introdução",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "comoFunciona",
      title: "Como funciona (corpo do texto)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "features",
      title: "Destaques (3 itens)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Ícone (nome lucide)", type: "string" }),
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({ name: "body", title: "Descrição", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
      validation: (r) => r.max(3),
    }),
    defineField({ name: "ctaLabel", title: "Texto do botão CTA", type: "string", initialValue: "Agende sua Consulta" }),
    defineField({ name: "seoDescription", title: "Descrição SEO", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
