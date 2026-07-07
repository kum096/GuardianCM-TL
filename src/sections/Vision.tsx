import { Section } from '../components/UI/Card';

export const Vision = () => {
  return (
    <Section id="vision" className="py-64 bg-white border-t border-slate-50">
      <div className="max-w-5xl">
        <span className="text-guardian font-bold text-xs tracking-[0.5em] uppercase mb-16 block">Our Ethos</span>
        <h2 className="text-6xl md:text-[10rem] font-bold mb-20 tracking-tighter leading-[0.8] text-slate-900">
          Safety is a<br />
          Fundamental<br />
          Human Right.
        </h2>

        <div className="flex flex-col md:flex-row gap-20 items-start mt-32">
           <p className="text-3xl md:text-4xl text-slate-900 leading-[1.1] font-medium md:w-1/2 tracking-tight">
             GuardianCM Tech Labs was founded to bridge the gap between community alertness and advanced AI.
           </p>
           <div className="md:w-1/2 flex flex-col gap-10">
              <p className="text-xl text-slate-600 leading-relaxed font-normal">
                We empower citizens to protect themselves and their neighbors, creating a worldwide network of digital patriots. Physical and digital safety are no longer separate; they are one.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed font-normal">
                Our platform is built on transparency, privacy, and speed. We don't just report incidents; we prevent them through collaborative intelligence and real-time AI assistance.
              </p>
           </div>
        </div>
      </div>
    </Section>
  );
};
