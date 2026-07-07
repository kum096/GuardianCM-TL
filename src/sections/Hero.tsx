import { motion } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { SITE_CONFIG } from '../constants/content';
import { Smartphone, Globe, Lock } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, className, color }: any) => (
  <div className={`absolute p-4 glass rounded-2xl ${className}`}>
    <Icon className={`w-8 h-8 ${color}`} />
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-guardian/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-emerald-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-guardian/10 text-guardian text-sm font-semibold mb-6 border border-guardian/20">
            {SITE_CONFIG.version} Available Now
          </span>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
            Protecting Communities <br />
            <span className="text-gradient">Securing the Future.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            {SITE_CONFIG.tagline}. A modern ecosystem built for digital patriotism and community safety.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Globe className="w-5 h-5" /> Launch Live Web Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Smartphone className="w-5 h-5" /> Download Android APK
            </Button>
          </div>
        </motion.div>

        {/* Floating Icons for Visual Interest */}
        <div className="hidden lg:block">
          <FloatingIcon icon={Lock} color="text-emerald-500" className="bottom-20 -left-10" />
          <FloatingIcon icon={Smartphone} color="text-slate-400" className="top-40 -right-20" />
          <FloatingIcon icon={Globe} color="text-guardian" className="bottom-40 -right-10" />
        </div>
      </div>
    </section>
  );
};
