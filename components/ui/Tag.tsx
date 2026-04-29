import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon?: IconName;
  iconColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Tag({ children, icon, iconColor = "var(--verde-claro)", className, style }: Props) {
  return (
    <span className={cn("tag", className)} style={style}>
      {icon && <Icon name={icon} size={16} color={iconColor} />}
      {children}
    </span>
  );
}
