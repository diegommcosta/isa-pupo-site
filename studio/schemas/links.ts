import { defineField, defineType } from "sanity";

/** Ícones disponíveis nos botões — devem existir no MAP de components/ui/Icon.tsx */
const ICON_OPTIONS = [
  { title: "Nenhum", value: "" },
  { title: "WhatsApp", value: "whatsapp" },
  { title: "Instagram", value: "instagram" },
  { title: "Livro (ebook/blog)", value: "book-half" },
  { title: "Lua e estrelas (terapia)", value: "moon-stars-fill" },
  { title: "Estrelas", value: "stars" },
  { title: "Calendário", value: "calendar" },
  { title: "Pessoas", value: "people" },
  { title: "Enviar", value: "send" },
  { title: "Link externo", value: "box-arrow-up-right" },
];

export default defineType({
  name: "links",
  title: "Página de Links",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Título curto no topo da página (ex.: Isa Pupo).",
      initialValue: "Isa Pupo",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 2,
      description: "Frase de apoio abaixo do título.",
      initialValue:
        "Psicoterapia Junguiana & Integrativa — escolha por onde começar",
    }),
    defineField({
      name: "items",
      title: "Botões",
      type: "array",
      description:
        "Arraste para reordenar. Cada botão tem um texto e um destino (link).",
      of: [
        {
          type: "object",
          name: "linkItem",
          title: "Botão",
          fields: [
            defineField({
              name: "label",
              title: "Texto do botão",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              title: "Link (destino)",
              type: "string",
              description:
                "Página do site (ex.: /blog) ou endereço completo (ex.: https://instagram.com/...).",
              validation: (r) =>
                r.required().custom((value) => {
                  if (!value) return true;
                  if (value.startsWith("/")) return true;
                  if (/^https?:\/\//.test(value)) return true;
                  return "Use uma rota interna começando com / ou um endereço completo começando com https://";
                }),
            }),
            defineField({
              name: "icon",
              title: "Ícone (opcional)",
              type: "string",
              options: { list: ICON_OPTIONS, layout: "dropdown" },
            }),
            defineField({
              name: "destaque",
              title: "Destaque (botão laranja)",
              type: "boolean",
              description:
                "Pinta o botão de laranja — reserve para o mais importante (ex.: WhatsApp).",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "url", destaque: "destaque" },
            prepare({ title, subtitle, destaque }) {
              return {
                title: destaque ? `★ ${title}` : title,
                subtitle,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Página de Links" };
    },
  },
});
