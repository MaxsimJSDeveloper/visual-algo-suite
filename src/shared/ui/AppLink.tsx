import { Link, type LinkProps } from "react-router-dom";
import { type ReactNode } from "react";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "accent";
  className?: string;
  isBlock?: boolean;
  disabled?: boolean;
}

export const AppLink = ({
  children,
  variant = "primary",
  className = "",
  isBlock = false,
  disabled = false,
  ...props
}: AppLinkProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all text-center";
  const blockStyles = isBlock ? "w-full" : "";

  const variants = {
    primary:
      "px-6 py-2.5 rounded-xl bg-brand-accent hover:bg-blue-600 text-white shadow-lg shadow-brand-accent/20",
    secondary:
      "text-slate-300 hover:text-white underline decoration-transparent hover:decoration-brand-accent underline-offset-4",
    success:
      "px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20",
    accent:
      "px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/20",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "active:scale-95";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
  };

  return (
    <Link
      className={`${baseStyles} ${blockStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  );
};
