import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({
      name: "whatsapp",
      title: "Número WhatsApp (só dígitos, ex: 11999998888)",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "URL Instagram",
      type: "url",
    }),
    defineField({
      name: "copyrightName",
      title: "Nome no copyright do rodapé",
      type: "string",
      initialValue: "Isa Pupo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configurações do Site" }),
  },
});
