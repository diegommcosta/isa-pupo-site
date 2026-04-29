import { groq } from "next-sanity";

export const blogIndexQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc) [$from..$to] {
    _id, title, slug, excerpt, cover, publishedAt,
    "category": category->{ title, slug }
  },
  "total": count(*[_type == "post"])
}`;

export const blogPostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title, slug, cover, body, publishedAt,
    "author": author->{ name, photo },
    "category": category->{ title, slug },
    "related": *[_type == "post" && category._ref == ^.category._ref && slug.current != $slug] | order(publishedAt desc)[0..1] {
      _id, title, slug, excerpt, cover, publishedAt,
      "category": category->{ title, slug }
    }
  }
`;

export const blogSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
