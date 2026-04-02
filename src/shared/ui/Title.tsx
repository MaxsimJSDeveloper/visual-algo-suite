import { type ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export const Title = ({
  children,
  as: Component = "h1",
  className,
}: TitleProps) => {
  const sizes = {
    h1: "text-4xl font-extrabold tracking-tight text-slate-100",
    h2: "text-2xl font-bold text-slate-200",
    h3: "text-lg font-semibold text-slate-300",
  };

  return (
    <Component className={`${sizes[Component]} font-sans ${className}`}>
      {children}
    </Component>
  );
};
