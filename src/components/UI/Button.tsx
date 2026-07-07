import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-guardian/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-guardian text-white hover:bg-guardian-dark shadow-lg shadow-guardian/20",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 shadow-md",
    outline: "border-2 border-slate-200 bg-transparent hover:border-guardian hover:text-guardian",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
