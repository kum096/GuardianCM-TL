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
  const baseStyles = "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-guardian text-white hover:bg-guardian-dark hover:shadow-xl hover:shadow-guardian/20 active:scale-95",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 active:scale-95",
    outline: "border-2 border-slate-200 bg-transparent hover:border-guardian hover:text-guardian active:scale-95",
    ghost: "bg-transparent hover:bg-slate-50 text-slate-600 active:scale-95"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-lg"
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
