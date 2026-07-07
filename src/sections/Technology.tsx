import { Section } from '../components/UI/Card';
import { TECH_STACK } from '../constants/content';
import { motion } from 'framer-motion';

export const Technology = () => {
  return (
    <Section id="tech" className="py-32 md:py-48">
      <div className="glass rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center bg-white/40">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Built with Modern Open Technologies</h2>
        <p className="text-slate-600 max-w-2xl mb-12">
          GuardianCM leverages a high-performance stack to ensure reliability, security, and global scalability.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default group"
            >
              {tech.icon && <tech.icon className="w-5 h-5 text-guardian group-hover:scale-110 transition-transform" />}
              <span className="font-semibold text-slate-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
