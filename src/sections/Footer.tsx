import { ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../constants/content';

export const Footer = () => {
  return (
    <footer className="bg-white py-32 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="flex flex-col gap-8 md:w-1/3">
          <div className="flex items-center gap-3 text-slate-900">
            <ShieldCheck className="w-6 h-6 text-guardian" />
            <span className="font-bold text-xl tracking-tighter uppercase">{SITE_CONFIG.name}</span>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            AI-powered safety for the next generation of digital citizens. Built for transparency, privacy, and speed.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-16">
          <FooterColumn title="Platform" links={['Web Demo', 'Android App', 'Safety Maps', 'Cyber Academy']} />
          <FooterColumn title="Company" links={['Our Vision', 'Contact', 'Privacy', 'Terms']} />
          <FooterColumn title="Social" links={['GitHub', 'LinkedIn', 'Email', 'Twitter']} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em]">
          © {SITE_CONFIG.year} GuardianCM Tech Labs.
        </p>
        <div className="flex gap-10">
           <a href="#" className="text-slate-400 hover:text-slate-900 text-xs uppercase tracking-[0.2em] transition-colors font-bold">Privacy Policy</a>
           <a href="#" className="text-slate-400 hover:text-slate-900 text-xs uppercase tracking-[0.2em] transition-colors font-bold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div className="flex flex-col gap-8">
    <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.4em] opacity-40">{title}</h4>
    <ul className="flex flex-col gap-4">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-slate-600 hover:text-slate-900 text-lg transition-colors font-normal">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
