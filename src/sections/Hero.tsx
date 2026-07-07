import { Button } from '../components/UI/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-7xl md:text-[11rem] font-bold tracking-tighter mb-12 text-slate-900 leading-[0.8]">
          GUARDIANCM
        </h1>
        <p className="text-xl md:text-3xl text-slate-600 mb-16 tracking-tight font-medium max-w-3xl leading-relaxed">
          Elite Community Safety. AI-Powered Security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <Button variant="secondary" className="px-16 py-5 text-lg rounded-full">
            Launch Web Demo
          </Button>
          <Button variant="outline" className="px-16 py-5 text-lg rounded-full">
            Download App
          </Button>
        </div>
      </div>

      {/* Minimal Visual Line - Better Spacing */}
      <div className="w-full max-w-5xl px-6 mt-auto">
        <div className="h-[1px] w-full bg-slate-100 relative">
           <div className="absolute top-0 left-0 -translate-y-1/2 bg-white pr-4 text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">
             Shield Protocol Active
           </div>
        </div>
      </div>
    </section>
  );
};
