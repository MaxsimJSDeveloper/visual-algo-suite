import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-40">
        {label && (
          <label className="text-xs font-bold uppercase text-slate-500 ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2.5 bg-slate-900/50 border rounded-xl 
            text-slate-200 placeholder:text-slate-600
            focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all
            ${error ? "border-red-500" : "border-slate-800 hover:border-slate-700"}
            ${className}
          `}
          {...props}
        />
        {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
