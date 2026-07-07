import { Section } from '../components/UI/Card';
import { TECH_STACK } from '../constants/content';

export const Technology = () => {
  return (
    <Section id="tech">
      <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-guardian/5 blur-[120px] pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-black mb-10 text-white tracking-tight relative z-10">Built with Global Open Tech</h2>
        <p className="text-slate-400 max-w-2xl mb-20 text-xl leading-relaxed relative z-10">
          Leveraging a world-class, high-performance stack for absolute reliability and global scaling.
        </p>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 hover:border-guardian/50 transition-all duration-300 group cursor-default"
            >
              {tech.icon && <tech.icon className="w-6 h-6 text-guardian group-hover:scale-110 transition-transform" />}
              <span className="font-bold text-white text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
