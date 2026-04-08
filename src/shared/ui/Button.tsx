import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
}

export const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const variants = {
    primary:
      "bg-brand-accent hover:bg-blue-600 text-white shadow-lg shadow-brand-accent/20",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-300",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
