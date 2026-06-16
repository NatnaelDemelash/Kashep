'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Waitlist', href: '#waitlist' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('waitlist');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-sm'
          : 'border-b border-gray-100 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex h-14 items-center justify-between md:h-14.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-[#166534]">
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
              <span className="text-[8px] tracking-[0.2em] text-[#166534]">
                SMART BUDGETING
              </span>
            </div>
          </Link>

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
            
            {/* Join Waitlist button */}
            <button
              onClick={scrollToWaitlist}
              className="rounded-lg bg-[#166534] px-4.5 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#14532d] hover:shadow-md"
            >
              Join Waitlist →
            </button>

            {/* Open in Telegram button - Desktop only */}
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 rounded-lg border border-[#2AABEE]/30 bg-[#2AABEE]/5 px-4.5 py-2 text-[13px] font-medium text-[#2AABEE] transition-all hover:bg-[#2AABEE]/10"
              >
                <Send size={14} />
                Open in Telegram
              </button>
              
              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[10px] text-white">
                  Launching soon
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu - Telegram button NOT shown here */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white py-4 pb-6 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-[15px] text-gray-500 hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={scrollToWaitlist}
                className="mt-3 rounded-lg bg-[#166534] py-2.5 text-[13px] font-medium text-white"
              >
                Join Waitlist →
              </button>
              {/* Telegram button hidden on mobile - only in hero */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}