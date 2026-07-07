import React from 'react';
import { Shield, GitBranch, Briefcase, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants/content';

export const Footer = () => {
  return (
    <footer className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="GuardianCM Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-2xl tracking-tight text-slate-900">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Leading the way in AI-powered safety and cybersecurity for the next generation of digital citizens.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={GitBranch} href={SITE_CONFIG.links.github} title="GitHub" />
              <SocialLink icon={Briefcase} href={SITE_CONFIG.links.linkedin} title="LinkedIn" />
              <SocialLink icon={Mail} href={`mailto:${SITE_CONFIG.links.email}`} title="Email" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Platform</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Web Demo</FooterLink></li>
              <li><FooterLink href="#">Android App</FooterLink></li>
              <li><FooterLink href="#">Cyber Academy</FooterLink></li>
              <li><FooterLink href="#">Safety Maps</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Vision</FooterLink></li>
              <li><FooterLink href="#">Tech Labs</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {SITE_CONFIG.year} GuardianCM Tech Labs. Built with ❤️ for Digital Patriots.
          </p>
          <p className="text-slate-400 text-sm">
            Designed for the future of community safety.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href, title }: any) => (
  <a
    href={href}
    title={title}
    className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:bg-guardian hover:text-white transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }: any) => (
  <a
    href={href}
    className="text-slate-500 hover:text-guardian transition-colors text-sm"
  >
    {children}
  </a>
);
