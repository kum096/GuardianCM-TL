import { Button } from '../components/UI/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-[11rem] font-bold tracking-tighter mb-8 md:mb-12 text-slate-900 leading-[0.8] break-words">
          GUARDIANCM
        </h1>
        <p className="text-lg md:text-3xl text-slate-600 mb-12 md:mb-16 tracking-tight font-medium max-w-3xl leading-relaxed">
          Elite Community Safety. AI-Powered Security.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-20 md:mb-32 w-full sm:w-auto">
          <Button variant="secondary" className="w-full sm:w-auto px-12 md:px-16 py-4 md:py-5 text-base md:text-lg rounded-full">
            Launch Web Demo
          </Button>
          <Button variant="outline" className="w-full sm:w-auto px-12 md:px-16 py-4 md:py-5 text-base md:text-lg rounded-full">
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
