'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import PlanCard from './PlanCard';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('waitlist');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-14 md:pt-[58px]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#007042]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#007042]/3 blur-[80px]" />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-16 py-20 md:grid-cols-2 md:gap-12 md:py-28">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-between">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#007042]/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007042] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#007042]" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-[#007042]">
                Now in Private Beta
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bricolage mb-6 text-[48px] font-extrabold leading-[1.08] tracking-tight text-gray-900 md:text-[56px]">
              Know where every{' '}
              <span className="relative inline-block">
                birr goes.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C66.5 2.5 133.5 2.5 199 5.5"
                    stroke="#007042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                  />
                </svg>
              </span>{' '}
              <span className="text-[#007042]">Before</span> you spend it.
            </h1>

            {/* Description */}
            <p className="mb-10 text-[16px] leading-relaxed text-gray-600">
              Set your salary, debts, and savings goal once. Kashep builds your
              full month plan, splits it into weekly budgets, and warns you
              before you overspend.{' '}
              <span className="font-semibold text-gray-800">
                Not a tracker. A plan that runs ahead of you.
              </span>
            </p>

            {/* Buttons */}
            <div className="mb-6 flex flex-wrap gap-4">
              <button
                onClick={scrollToWaitlist}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#007042] px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#005832] hover:shadow-lg"
              >
                Join the waitlist
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-[14px] font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50">
                <Play size={14} />
                See how it works
              </button>
            </div>

            {/* Open in Telegram button - Coming Soon */}
            <div className="mb-8">
              <div
                className="relative inline-block"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <button
                  onClick={scrollToWaitlist}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2AABEE]/30 bg-[#2AABEE]/5 px-5 py-2.5 text-[13px] font-medium text-[#2AABEE] transition-all hover:bg-[#2AABEE]/10"
                >
                  <Send size={15} />
                  Open in Telegram
                </button>

                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[10px] text-white">
                    Launching soon — join waitlist
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
                  </div>
                )}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-[12px] text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#007042]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#007042]" />
                </div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#007042]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#007042]" />
                </div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#007042]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#007042]" />
                </div>
                <span>Opens in Telegram</span>
              </div>
            </div>
          </div>

          {/* Right column - Plan Card */}
          <div className="flex justify-center md:ml-20">
            <div className="w-full transform transition-all duration-500 hover:scale-[1.02]">
              <PlanCard />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 py-12 md:grid-cols-3 md:gap-12 md:py-16">
            {/* Stat 1 */}
            <div className="group text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <div className="text-3xl font-bold text-gray-900 md:text-4xl font-mono">
                  30
                  <span className="ml-1 text-xl text-[#007042] md:text-2xl">
                    sec
                  </span>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Weekly balance update — you type the number, Kashep does the
                rest
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <div className="text-3xl font-bold text-gray-900 md:text-4xl font-mono">
                  1
                  <span className="ml-1 text-xl text-[#007042] md:text-2xl">
                    plan
                  </span>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Set up once at the start of the month — salary, debts, savings
                goal
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <div className="text-3xl font-bold text-gray-900 md:text-4xl font-mono">
                  0
                  <span className="ml-1 text-xl text-[#007042] md:text-2xl">
                    permissions
                  </span>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                No SMS access, no bank login, no app install — just Telegram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
