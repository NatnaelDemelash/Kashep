'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Waitlist() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Waitlist signup:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="relative overflow-hidden bg-linear-to-br from-[#166534] via-[#14532d] to-[#0f3d24] py-20 md:py-28"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-size-[20px_20px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
         <h2
          className={`mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Be the first to know when{' '}
          <span className="text-[#86efac]">Kashep launches</span>
        </h2>

        {/* Subheading */}
        <p
          className={`mb-8 text-[15px] leading-relaxed text-white/70 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Join the waitlist for early access.
        </p>

          {/* Waitlist form */}
          <div
            className={`mx-auto max-w-md transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#86efac]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-[#166534] transition-all hover:bg-[#86efac] hover:shadow-lg"
              >
                Join waitlist
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Success message */}
            {isSubmitted && (
              <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-green-500/20 px-3 py-2 backdrop-blur-sm">
                <CheckCircle size={14} className="text-[#86efac]" />
                <p className="text-[12px] text-white/90">
                  You&apos;re on the list!
                </p>
              </div>
            )}

            {/* Privacy note */}
            <p className="mt-4 text-[11px] text-white/40">
              No spam. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}