import { Section } from '../components/UI/Card';
import { TECH_STACK } from '../constants/content';

export const Technology = () => {
  return (
    <Section id="tech" className="py-32 bg-slate-50">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight uppercase">Infrastructure</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Leveraging a world-class, high-performance stack for absolute reliability and global scaling.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-start gap-4 p-6 bg-white border border-slate-100 rounded-3xl"
            >
              {tech.icon && <tech.icon className="w-6 h-6 text-slate-400" />}
              <span className="font-bold text-slate-900 text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
