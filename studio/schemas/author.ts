import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Autora",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    defineField({ name: "bio", title: "Biografia", type: "text", rows: 4 }),
    defineField({ name: "credentials", title: "Credenciais (CRP, formação...)", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "name", media: "photo" },
  },
});
