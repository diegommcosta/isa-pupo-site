import { groq } from "next-sanity";

export const homePageQuery = groq`{
  "page": *[_type == "homePage"][0],
  "latestPosts": *[_type == "post"] | order(publishedAt desc)[0..2] {
    _id, title, slug, excerpt, cover, publishedAt,
    "category": category->{ title, slug }
  },
  "settings": *[_type == "siteSettings"][0]
}`;

export const therapyPageQuery = groq`
  *[_type == "therapy" && slug.current == $slug][0] {
    title, tag, heroImage, intro, comoFunciona, features, ctaLabel, seoDescription
  }
`;

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

export const ebookPageQuery = groq`{
  "ebook": *[_type == "ebook"][0] {
    title, subtitle, cover, price, priceFrom, ctaUrl, paraQuem, conteudo,
    "author": author->{ name, photo, bio, credentials }
  }
}`;

export const blogSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
export const therapySlugsQuery = groq`*[_type == "therapy" && defined(slug.current)][].slug.current`;
