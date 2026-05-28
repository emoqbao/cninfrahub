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
    primary: "bg-[#0d0d0d] text-white hover:bg-[#1a1a1a] disabled:opacity-50",
    secondary: "border border-[#e8eaed] hover:border-[#a48e7a] text-[#0d0d0d] hover:bg-[#f3f4f6]",
    ghost: "text-[#0d0d0d] hover:bg-[#f3f4f6]",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} className={cls} disabled={disabled}>{children}</button>;
}
