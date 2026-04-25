import type { StructureBuilder } from "sanity/structure";

const singletons = ["homePage", "siteSettings", "ebook"];

const singletonNames: Record<string, string> = {
  homePage: "Página Home",
  siteSettings: "Configurações do Site",
  ebook: "Ebook",
};

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Conteúdo")
    .items([
      ...singletons.map((type) =>
        S.listItem()
          .title(singletonNames[type])
          .id(type)
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      S.documentTypeListItem("post").title("Posts do Blog"),
      S.documentTypeListItem("therapy").title("Páginas de Terapia"),
      S.documentTypeListItem("author").title("Autoras"),
      S.documentTypeListItem("category").title("Categorias"),
    ]);
