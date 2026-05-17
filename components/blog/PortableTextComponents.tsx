import type { PortableTextComponents } from "@portabletext/react";

const base = "text-[18px] leading-[1.7] text-marrom font-sans";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={`${base} mb-5`}>{children}</p>,
    h2: ({ children }) => (
      <h2 className="font-sans font-bold text-[28px] leading-[1.2] text-verde-escuro mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans font-bold text-[22px] leading-[1.2] text-verde-escuro mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-sans font-bold text-[18px] text-verde-escuro mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-laranja pl-5 my-6 italic text-marrom/70 text-[18px] leading-[1.7]">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className={`${base}`}>{children}</li>
    ),
    number: ({ children }) => (
      <li className={`${base}`}>{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-verde-escuro">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-bege px-1.5 py-0.5 rounded text-[16px] font-mono text-marrom">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-laranja underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

export default components;
