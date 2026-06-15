'use client';

import { useEffect, useRef, useState } from 'react';
import {
  CalendarClock,
  Smartphone,
  TrendingUp,
  BellRing,
  Shield,
  Users,
} from 'lucide-react';

const features = [
  {
    id: 'smart-planning',
    icon: CalendarClock,
    title: 'Smart Month Planning',
    description:
      'Tell Kashep your salary, debts, and savings goal once. It instantly calculates your spendable amount, weekly budget, and daily budget for the whole month. No spreadsheets. No manual math.',
    highlighted: true,
  },
  {
    id: 'debt-tracker',
    icon: TrendingUp,
    title: 'Debt Tracker',
    description:
      'Add who you owe, how much, and when it\'s due. Kashep reminds you 2 days before the due date and puts debt payments first on salary day so you never forget or delay.',
    highlighted: false,
  },
  {
    id: 'budget-alerts',
    icon: BellRing,
    title: 'Budget Alerts',
    description:
      'Get warned at 70% and 90% of your monthly budget automatically via Telegram. Know before you overspend — not after.',
    highlighted: false,
  },
  {
    id: 'weekly-summaries',
    icon: Smartphone,
    title: 'Weekly Summaries',
    description:
      'Every Monday morning Kashep sends your spending summary for last week and remaining budget for the week ahead. Always know where you stand without opening anything.',
    highlighted: false,
  },
];

// Optional additional features for bottom row
const additionalFeatures = [
  {
    icon: Shield,
    title: 'No bank access',
    description: 'We never see your money. Just your plan.',
  },
  {
    icon: Users,
    title: 'Built for Ethiopia',
    description: 'Birr, local banks, and debt culture — designed for you.',
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-gradient-to-b from-white to-gray-50/80 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#166534]/20 bg-[#166534]/5 px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#166534] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#166534]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-[#166534]">
              Powerful features
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Everything you need to{' '}
            <span className="text-[#166534]">master your money</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500">
            Kashep lives inside Telegram. No app install. No bank access.
            Just a plan that works for Ethiopians.
          </p>
        </div>

        {/* Features grid - 2x2 */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative rounded-2xl border transition-all duration-500 ${
                feature.highlighted
                  ? 'border-[#166534]/30 bg-gradient-to-br from-white to-[#166534]/[0.02] shadow-lg hover:shadow-xl'
                  : 'border-gray-200 bg-white hover:border-[#166534]/20 hover:shadow-md'
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Highlighted badge */}
              {feature.highlighted && (
                <div className="absolute -top-3 left-6 rounded-full bg-[#166534] px-3 py-0.5 text-[10px] font-medium text-white">
                  Most powerful
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
                    feature.highlighted
                      ? 'bg-[#166534] text-white'
                      : 'bg-[#166534]/10 text-[#166534]'
                  }`}
                >
                  <feature.icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>

                {/* Decorative line on hover */}
                <div
                  className={`mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-16 ${
                    feature.highlighted ? 'bg-[#166534]' : 'bg-[#166534]/40'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust features - optional row */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {additionalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-center gap-4 rounded-xl border border-gray-100 bg-white/50 p-4 transition-all duration-500 hover:border-[#166534]/20 hover:bg-white ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(features.length + index) * 100}ms` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#166534]/10">
                <feature.icon size={18} className="text-[#166534]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-gray-800">
                  {feature.title}
                </p>
                <p className="text-[11px] text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}