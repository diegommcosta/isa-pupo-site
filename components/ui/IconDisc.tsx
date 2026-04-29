import { Icon, type IconName } from "@/components/ui/Icon";

interface IconDiscProps {
  icon: IconName;
  color?: string;
  bg?: string;
  size?: number;
  iconSize?: number;
}

export function IconDisc({
  icon,
  color = "var(--marrom)",
  bg = "var(--bege)",
  size = 44,
  iconSize = 24,
}: IconDiscProps) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon name={icon} size={iconSize} color={color} />
    </span>
  );
}
