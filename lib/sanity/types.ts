import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
  alt?: string;
}

export interface Category {
  title: string;
  slug: { current: string };
}

export interface Author {
  name: string;
  photo?: SanityImage;
}

export interface LinkItem {
  label: string;
  url: string;
  icon?: string;
  destaque?: boolean;
}

export interface LinksPage {
  title?: string;
  subtitle?: string;
  items?: LinkItem[];
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category?: Category;
  author?: Author;
  cover?: SanityImage;
  excerpt?: string;
  body?: PortableTextBlock[];
  publishedAt?: string;
  related?: Post[];
}
