import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-tight";

  const variants = {
    primary: "bg-guardian text-white hover:opacity-90 active:scale-[0.98]",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]",
    outline: "border border-slate-200 bg-transparent hover:border-slate-900 hover:text-slate-900 active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-slate-50 text-slate-600 active:scale-[0.98]"
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
