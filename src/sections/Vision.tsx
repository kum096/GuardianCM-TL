import React from 'react';
import { Section } from '../components/UI/Card';
import { motion } from 'framer-motion';

export const Vision = () => {
  return (
    <Section id="vision" className="text-center py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tight">
          Protecting People.<br />
          Securing Cyberspace.<br />
          <span className="text-gradient">Digital Patriotism.</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
          GuardianCM Tech Labs was founded on a simple principle: safety is a fundamental human right in both the physical and digital worlds.
          By bridging the gap between community alertness and advanced AI, we empower citizens to protect themselves and their neighbors.
        </p>

        <div className="w-24 h-1 bg-guardian/20 mx-auto rounded-full" />
      </motion.div>
    </Section>
  );
};
