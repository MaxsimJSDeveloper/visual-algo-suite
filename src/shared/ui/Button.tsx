import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      className={`
        px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none bg-brand-accent hover:bg-blue-600 text-white shadow-lg shadow-brand-accent/20 cursor-pointer
      `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
