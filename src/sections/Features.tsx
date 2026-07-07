import { Section, Card } from '../components/UI/Card';
import { FEATURES } from '../constants/content';

const FeatureLogo = () => (
  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm border border-slate-100 group-hover:border-guardian/30 transition-colors duration-500">
     <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => {
       e.currentTarget.style.display = 'none';
       e.currentTarget.parentElement!.innerHTML = '<div class="w-6 h-6 bg-guardian rounded-full" />'
     }} />
  </div>
);

export const Features = () => {
  return (
    <Section id="features" className="bg-slate-50/50">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
          Powerful Features for <span className="text-guardian">Safety</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          GuardianCM merges elite AI technology with decentralized community intelligence to redefine digital and physical security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="group hover:bg-white hover:shadow-2xl hover:shadow-guardian/5">
            <div className="flex items-center gap-4 mb-8">
              <FeatureLogo />
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{feature.title}</h3>
            </div>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
