'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Waitlist', href: '#waitlist' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 group">
            <span className="text-2xl font-semibold tracking-tight text-slate-800">
              Kashep
            </span>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              Beta
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToWaitlist}
              className="bg-slate-900 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-slate-800 transition-all hover:shadow-md"
            >
              Join Waitlist →
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-slate-100">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 text-base font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={scrollToWaitlist}
                className="bg-slate-900 text-white text-center text-sm font-medium px-5 py-2.5 rounded-full mt-2"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
