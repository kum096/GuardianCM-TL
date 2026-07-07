import { Button } from '../components/UI/Button';
import { SITE_CONFIG } from '../constants/content';
import { Globe, Smartphone } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 overflow-hidden bg-pro">
      {/* Sophisticated Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-guardian/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-400/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-bold mb-10">
          <span className="w-2 h-2 rounded-full bg-guardian animate-pulse" />
          {SITE_CONFIG.version} Available Now
        </div>

        <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tight mb-10 text-slate-900 leading-[1.05]">
          Protecting Communities.<br />
          <span className="text-gradient">Securing the Future.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-medium">
          {SITE_CONFIG.tagline}. A premium ecosystem designed for digital patriotism and elite community safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="w-full sm:w-auto gap-3">
            <Globe className="w-6 h-6" /> Launch Web Demo
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto gap-3">
            <Smartphone className="w-6 h-6" /> Download App
          </Button>
        </div>
      </div>
    </section>
  );
};
