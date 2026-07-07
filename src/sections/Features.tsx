import { Section, Card } from '../components/UI/Card';
import { FEATURES } from '../constants/content';
import { motion } from 'framer-motion';

export const Features = () => {
  return (
    <Section id="features" className="bg-white/50">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Powerful Features for <span className="text-guardian">Safety</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          GuardianCM combines cutting-edge AI with community-driven intelligence to create a secure environment for everyone.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, index) => (
          <Card key={feature.title} delay={index * 0.1}>
            <div className="w-14 h-14 bg-guardian/10 rounded-2xl flex items-center justify-center mb-6 text-guardian group-hover:bg-guardian group-hover:text-white transition-colors duration-300">
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
