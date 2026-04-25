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
  bio?: string;
  credentials?: string;
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
}

export interface TherapyFeature {
  icon?: string;
  title: string;
  body: string;
}

export interface TherapyPage {
  title: string;
  tag?: string;
  heroImage?: SanityImage;
  intro?: PortableTextBlock[];
  comoFunciona?: PortableTextBlock[];
  features?: TherapyFeature[];
  ctaLabel?: string;
  seoDescription?: string;
}

export interface EbookConteudo {
  chapter: string;
  description: string;
}

export interface EbookPage {
  title?: string;
  subtitle?: string;
  cover?: SanityImage;
  price?: string;
  priceFrom?: string;
  ctaUrl?: string;
  paraQuem?: string[];
  conteudo?: EbookConteudo[];
  author?: Author;
}

export interface HomePageData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: SanityImage;
  carlJungQuote?: string;
  sobreMimBio?: PortableTextBlock[];
  sobreMimPhoto?: SanityImage;
  atendimentos?: Array<{
    icon?: string;
    title: string;
    description: string;
    href?: string;
  }>;
  ebookTeaser?: string;
  latestPostsCount?: number;
}

export interface SiteSettings {
  whatsapp?: string;
  instagram?: string;
  copyrightName?: string;
}
