import { GitBranch, Briefcase, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants/content';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-16 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} />
              </div>
              <span className="font-bold text-3xl tracking-tight text-slate-900">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-slate-500 text-xl max-w-md mb-12 leading-relaxed font-medium">
              Leading the way in AI-powered safety and cybersecurity for the next generation of digital citizens.
            </p>
            <div className="flex gap-5">
              <SocialLink icon={GitBranch} href={SITE_CONFIG.links.github} />
              <SocialLink icon={Briefcase} href={SITE_CONFIG.links.linkedin} />
              <SocialLink icon={Mail} href={`mailto:${SITE_CONFIG.links.email}`} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-10 text-xl tracking-tight">Platform</h4>
            <ul className="space-y-6">
              <li><FooterLink href="#">Web Demo</FooterLink></li>
              <li><FooterLink href="#">Android App</FooterLink></li>
              <li><FooterLink href="#">Cyber Academy</FooterLink></li>
              <li><FooterLink href="#">Safety Maps</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-10 text-xl tracking-tight">Company</h4>
            <ul className="space-y-6">
              <li><FooterLink href="#">Our Vision</FooterLink></li>
              <li><FooterLink href="#">Tech Labs</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-lg font-medium">
            © {SITE_CONFIG.year} GuardianCM Tech Labs. Built for Digital Patriots.
          </p>
          <div className="flex gap-10">
             <a href="#" className="text-slate-400 hover:text-guardian transition-colors font-medium">Terms</a>
             <a href="#" className="text-slate-400 hover:text-guardian transition-colors font-medium">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: any) => (
  <a
    href={href}
    className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-guardian hover:text-guardian transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-guardian/5"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const FooterLink = ({ href, children }: any) => (
  <a
    href={href}
    className="text-slate-500 hover:text-guardian transition-colors text-lg font-medium"
  >
    {children}
  </a>
);
