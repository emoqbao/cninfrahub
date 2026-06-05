import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition-colors rounded-lg";
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-2.5 text-base", lg: "px-8 py-3 text-lg" };
  const variants = {
    primary: "bg-ink text-white hover:bg-ink-hover disabled:opacity-50",
    secondary: "border border-border hover:border-brand text-ink hover:bg-surface",
    ghost: "text-ink hover:bg-surface",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} className={cls} disabled={disabled}>{children}</button>;
}
