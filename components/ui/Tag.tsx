import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import Sparkle from "@/components/ui/shapes/Sparkle";
import type { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  icon?: IconName;
  iconColor?: string;
};

export default function Tag({ children, icon, iconColor = "var(--verde-claro)", className, ...rest }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-rosa/40 bg-rosa/15 px-4 py-[7px]",
        "font-sans text-[13px] uppercase tracking-wide text-marrom",
        className
      )}
      {...rest}
    >
      {icon ? (
        <Icon name={icon} size={16} color={iconColor} />
      ) : (
        <Sparkle size={12} className="text-rosa" />
      )}
      {children}
    </span>
  );
}
