import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white border border-slate-100 p-8 rounded-[2rem] transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export const Section = ({
  children,
  id,
  className = '',
  containerClassName = ''
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) => (
  <section id={id} className={`px-6 md:px-12 ${className}`}>
    <div className={`max-w-7xl mx-auto ${containerClassName}`}>
      {children}
    </div>
  </section>
);
