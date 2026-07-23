import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  icon?: IconName;
  iconColor?: string;
};

/**
 * Chip acima do título do hero: retângulo arredondado bege sólido, texto
 * marrom em caixa normal (design aprovado pela cliente). Ícone opcional
 * nas páginas internas (terapia); sem ícone, só texto.
 */
export default function Tag({ children, icon, iconColor = "var(--verde-claro)", className, ...rest }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-bege px-4 py-[7px]",
        "font-sans text-[16px] text-marrom",
        className
      )}
      {...rest}
    >
      {icon && <Icon name={icon} size={16} color={iconColor} />}
      {children}
    </span>
  );
}
