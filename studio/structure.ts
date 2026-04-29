import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.documentTypeListItem("post").title("Posts do Blog"),
      S.documentTypeListItem("category").title("Categorias"),
      S.documentTypeListItem("author").title("Autoras"),
    ]);
