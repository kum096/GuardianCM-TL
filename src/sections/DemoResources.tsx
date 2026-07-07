import { Section, Card } from '../components/UI/Card';
import { DEMO_RESOURCES } from '../constants/content';
import { Button } from '../components/UI/Button';
import { ArrowRight } from 'lucide-react';

export const DemoResources = () => {
  return (
    <Section id="resources" className="bg-slate-900 text-white overflow-hidden relative py-32 md:py-48">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-guardian/5 blur-[120px] rounded-full" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience GuardianCM</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Ready to dive in? Explore our live demo, download the application, or view our open-source vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {DEMO_RESOURCES.map((item, index) => (
          <Card
            key={item.title}
            delay={index * 0.1}
            className="bg-white/5 border-white/5 hover:bg-white/10"
          >
            <div className="flex flex-col h-full">
              <div className="bg-guardian/20 p-4 rounded-2xl w-fit mb-6">
                <item.icon className="w-8 h-8 text-guardian" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 mb-8 text-lg">{item.description}</p>

              <div className="mt-auto">
                <Button className="w-full gap-2 group">
                  {item.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
