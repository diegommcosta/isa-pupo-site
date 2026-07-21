import { Icon, type IconName } from "@/components/ui/Icon";
import type { ReactNode } from "react";

interface BulletRowProps {
  icon?: IconName;
  iconColor?: string;
  textColor?: string;
  size?: number;
  iconSize?: number;
  children: ReactNode;
}

export function BulletRow({
  icon = "logo-bullet",
  // laranja da marca nos bullets de card (pedido da cliente; exceção documentada na Regra da Faísca)
  iconColor = "var(--laranja)",
  textColor = "var(--marrom)",
  size = 16,
  iconSize = 16,
  children,
}: BulletRowProps) {
  return (
    <div
      className="flex items-start gap-[10px]"
      style={{ fontFamily: "var(--font-amaranth, sans-serif)", fontSize: size, lineHeight: 1.3, color: textColor }}
    >
      <Icon name={icon} size={iconSize} color={iconColor} style={{ marginTop: 3, flexShrink: 0 }} />
      <span>{children}</span>
    </div>
  );
}
