import { Section } from '../components/UI/Card';
import { DEMO_RESOURCES } from '../constants/content';
import { ArrowRight } from 'lucide-react';

export const DemoResources = () => {
  return (
    <Section id="resources" className="py-32 md:py-64 bg-slate-50">
      <div className="flex flex-col mb-16 md:mb-24">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-slate-900 uppercase mb-6">Ready to Deploy</h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
          Experience the ecosystem on your device or explore our vision in depth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {DEMO_RESOURCES.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-8 md:p-16 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] hover:bg-slate-50 transition-all duration-500 group outline-none"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 uppercase">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-10 md:mb-16 font-normal text-base md:text-lg max-w-md">{item.description}</p>
            <div className="mt-auto flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-900 group-hover:text-guardian transition-colors">
              {item.cta} <ArrowRight className="ml-2 md:ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
