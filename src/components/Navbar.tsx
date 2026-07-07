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
    { name: 'Technology', href: '#tech' },
    { name: 'Resources', href: '#resources' },
    { name: 'Our Vision', href: '#vision' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-[2rem] px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'glass shadow-xl' : 'bg-transparent'
        }`}>
          <a href="#" className="flex items-center gap-3">
            <div className="p-1 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.png" alt="GuardianCM Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">{SITE_CONFIG.name}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-slate-500 hover:text-guardian transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="secondary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-4 md:hidden">
          <div className="glass rounded-[2rem] p-8 flex flex-col gap-6 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
