import { Section } from '../components/UI/Card';
import { FEATURES } from '../constants/content';

export const Features = () => {
  return (
    <Section id="features" className="py-48 bg-white border-t border-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {FEATURES.slice(0, 4).map((feature, index) => (
          <div key={feature.title} className="flex flex-col">
            <span className="text-slate-900 font-bold text-[11px] tracking-[0.4em] uppercase mb-8 opacity-20">
               0{index + 1}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight uppercase">{feature.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
