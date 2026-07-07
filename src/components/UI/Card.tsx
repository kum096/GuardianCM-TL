import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ children, className = '', delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass p-8 rounded-3xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Section = ({
  children,
  id,
  className = '',
  containerClassName = ''
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) => (
  <section id={id} className={`py-24 px-6 md:px-12 ${className}`}>
    <div className={`max-w-7xl mx-auto ${containerClassName}`}>
      {children}
    </div>
  </section>
);
