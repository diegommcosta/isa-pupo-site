import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.documentTypeListItem("post").title("Posts do Blog"),
      S.documentTypeListItem("category").title("Categorias"),
      S.documentTypeListItem("author").title("Autoras"),
      S.divider(),
      // Singleton: documento único fixo (id "links") — sem lista de coleção
      S.listItem()
        .title("Página de Links")
        .id("links")
        .child(
          S.document().schemaType("links").documentId("links").title("Página de Links")
        ),
    ]);
