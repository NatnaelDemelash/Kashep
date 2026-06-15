// Navbar.tsx - with working fonts
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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-sm'
          : 'border-b border-gray-100 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex h-14 items-center justify-between md:h-[58px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#007042]">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
              >
                <rect x="1" y="1" width="8" height="8" rx="2" />
                <rect x="7" y="7" width="8" height="8" rx="2" opacity="0.5" />
              </svg>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[17px] font-extrabold tracking-tight text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', system-ui" }}>
                Kashep
              </span>
              <span className="text-[8px] tracking-[0.2em] text-[#007042]">
                SMART BUDGETING
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
            <button className="rounded-lg bg-[#007042] px-[18px] py-2 text-[13px] font-medium text-white transition-all hover:bg-[#005832]">
              Join Waitlist →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 md:hidden"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white py-4 pb-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-[15px] text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-3 w-full rounded-lg bg-[#007042] py-2.5 text-[13px] font-medium text-white">
              Join Waitlist →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}