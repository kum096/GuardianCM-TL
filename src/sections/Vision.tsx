import { Section } from '../components/UI/Card';

export const Vision = () => {
  return (
    <Section id="vision" className="text-center py-40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-[6rem] font-black mb-16 tracking-tight leading-[1.1] text-slate-900">
          Protecting People.<br />
          Securing Cyberspace.<br />
          <span className="text-gradient">Digital Patriotism.</span>
        </h2>

        <div className="w-24 h-1.5 bg-guardian/20 mx-auto rounded-full mb-16" />

        <p className="text-2xl md:text-3xl text-slate-500 leading-relaxed max-w-4xl mx-auto font-medium">
          GuardianCM Tech Labs was founded on a simple principle: safety is a fundamental human right in both the physical and digital worlds.
          By bridging the gap between community alertness and advanced AI, we empower citizens to protect themselves and their neighbors.
        </p>
      </div>
    </Section>
  );
};
