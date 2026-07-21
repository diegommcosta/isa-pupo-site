import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

/** Link de retorno padrão (seta + texto laranja), usado no blog e nas terapias. */
export default function BackLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-laranja font-sans text-[14px] hover:opacity-80 transition-opacity"
    >
      <Icon
        name="arrow-right"
        size={14}
        color="var(--laranja)"
        style={{ transform: "rotate(180deg)" }}
      />
      {children}
    </Link>
  );
}
