import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  icon?: IconName;
  iconColor?: string;
};

export default function Tag({ children, icon, iconColor = "var(--verde-claro)", className, ...rest }: Props) {
  return (
    <span className={cn("tag", className)} {...rest}>
      {icon && <Icon name={icon} size={19} color={iconColor} />}
      {children}
    </span>
  );
}
