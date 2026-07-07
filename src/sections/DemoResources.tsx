import { Section, Card } from '../components/UI/Card';
import { DEMO_RESOURCES } from '../constants/content';
import { Button } from '../components/UI/Button';
import { ArrowRight } from 'lucide-react';

const Logo = () => (
  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-inner">
     <img src="/logo.png" alt="GuardianCM Logo" className="w-full h-full object-contain" onError={(e) => {
       // Fallback if logo.png doesn't exist yet
       e.currentTarget.style.display = 'none';
       e.currentTarget.parentElement!.innerHTML = '<div class="w-8 h-8 bg-guardian rounded-full" />'
     }} />
  </div>
);

export const DemoResources = () => {
  return (
    <Section id="resources" className="bg-white">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Experience GuardianCM</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          The ecosystem is ready. Dive into the future of community protection today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {DEMO_RESOURCES.map((item) => (
          <Card
            key={item.title}
            className="flex flex-col p-12 bg-slate-50/50 border-none group hover:bg-white"
          >
            <div className="mb-10">
              <Logo />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">{item.title}</h3>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">{item.description}</p>

            <div className="mt-auto">
              <Button variant="secondary" className="w-full py-5 text-lg group/btn">
                {item.cta} <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
