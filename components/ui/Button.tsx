import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "filled" | "outlined" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const base =
  "inline-flex items-center gap-2 font-sans font-normal rounded-[5px] transition-colors whitespace-nowrap";

const variants: Record<Variant, string> = {
  filled:
    "bg-laranja text-bege hover:bg-laranja/90",
  outlined:
    "border border-laranja text-laranja bg-transparent hover:bg-laranja hover:text-bege",
  ghost:
    "text-bege underline hover:text-bege/80",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "filled",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonProps)}>
      {content}
    </button>
  );
}
