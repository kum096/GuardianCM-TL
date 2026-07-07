import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './UI/Button';
import { SITE_CONFIG } from '../constants/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Resources', href: '#resources' },
    { name: 'Our Vision', href: '#vision' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="GuardianCM Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-xl tracking-tight text-slate-900">{SITE_CONFIG.name}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="secondary" className="rounded-full px-8 py-3 text-xs uppercase tracking-widest font-bold">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full rounded-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
