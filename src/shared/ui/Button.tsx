import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "success" | "danger";
}

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2.5 rounded-xl font-bold transition-all w-full active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-brand-accent hover:bg-blue-600 text-white shadow-lg shadow-brand-accent/20",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-300",
    success:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20",
    danger:
      "border border-red-500/50 hover:bg-red-500/10 hover:text-red-400 text-red-400",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
