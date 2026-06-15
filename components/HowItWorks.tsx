// HowItWorks.tsx - fixed version
'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, CalendarCheck, Bell, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Kashep your situation',
    description: 'Open Kashep in Telegram, enter your salary, debts, and savings goal. Takes 2 minutes — once a month.',
    telegramMockup: true,
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Get your month plan instantly',
    description: 'Kashep calculates your spendable amount, weekly budget, daily budget, and debt due dates automatically.',
    telegramMockup: false,
  },
  {
    number: '03',
    icon: Bell,
    title: 'Stay on track all month',
    description: 'Weekly summaries every Monday. Budget alerts at 70% and 90%. Debt reminders 2 days before due date.',
    telegramMockup: false,
  },
];

// Feature data for each step
const featureData = [
  // Step 1 - Telegram mockup (no feature card)
  null,
  // Step 2 - Monthly plan breakdown
  {
    title: 'Your June Plan',
    items: [
      { label: 'Spendable', value: '10,000 ETB', highlight: true },
      { label: 'Weekly budget', value: '2,500 ETB' },
      { label: 'Daily budget', value: '357 ETB' },
      { label: 'Debt due', value: 'Jun 20 (Dawit)' },
    ],
  },
  // Step 3 - Alerts
  {
    title: 'Stay on track',
    items: [
      { label: 'Weekly summary', value: 'Every Monday' },
      { label: 'Budget alert', value: '70% used → warning' },
      { label: 'Budget alert', value: '90% used → critical' },
      { label: 'Debt reminder', value: '2 days before due' },
    ],
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#166534]/20 bg-[#166534]/5 px-3 py-1">
            <TrendingUp size={12} className="text-[#166534]" />
            <span className="text-[11px] font-medium uppercase tracking-wide text-[#166534]">
              Simple workflow
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            How Kashep works
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500">
            Set it up once. Get reminders and alerts all month. No spreadsheets.
            No stress.
          </p>
        </div>

        {/* Steps container */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on desktop */}
          <div className="absolute left-1/2 top-[120px] hidden h-[calc(100%-240px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#166534]/30 via-[#166534]/60 to-[#166534]/30 md:block" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                  {/* Step number & icon - left side for odd, right side for even */}
                  <div
                    className={`flex flex-1 flex-col items-center text-center md:items-start md:text-left ${
                      index % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    {/* Step number */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534]/10 text-xl font-bold text-[#166534]">
                      {step.number}
                    </div>

                    {/* Icon and title */}
                    <div className="mb-3 flex items-center gap-2">
                      <step.icon size={20} className="text-[#166534]" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="max-w-md text-[14px] leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual / Telegram mockup - right side for odd, left side for even */}
                  <div
                    className={`flex flex-1 justify-center ${
                      index % 2 === 1 ? 'md:order-1 md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    {step.telegramMockup ? (
                      <TelegramMockup />
                    ) : (
                      <FeatureHighlight stepIndex={index} />
                    )}
                  </div>
                </div>

                {/* Arrow connector between steps - visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 hidden -translate-x-1/2 transform md:block">
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-px bg-gradient-to-b from-[#166534]/40 to-[#166534]/10" />
                      <ArrowRight
                        size={16}
                        className="mt-1 rotate-90 text-[#166534]/40 md:rotate-0"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center md:mt-28">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50/50 px-8 py-8 md:flex-row md:px-10">
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">
                Ready to take control of your money?
              </p>
              <p className="text-[13px] text-gray-500">
                Be the first to experience Kashep.
              </p>
            </div>
            <button className="rounded-lg bg-[#166534] px-6 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#14532d] hover:shadow-md">
              Join the waitlist →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Telegram mockup component
function TelegramMockup() {
  return (
    <div className="w-full max-w-[320px] rounded-2xl border border-gray-200 bg-white shadow-lg">
      {/* Mockup header */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26A5E4]">
          <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.02 1.28-2.85 1.81-.27.18-.51.27-.73.27-.24 0-.63-.12-.93-.23-.36-.13-.78-.28-1.13-.46-.28-.15-.53-.32-.54-.55-.01-.24.2-.36.46-.48.85-.37 3.74-1.6 5.06-2.12 2.41-.95 2.91-1.11 3.24-1.12.07 0 .23.02.33.12.08.09.11.2.11.34-.01.07 0 .15-.01.23z"/>
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-gray-900">Kashep Bot</p>
          <p className="text-[9px] text-gray-400">online</p>
        </div>
      </div>

      {/* Mockup content */}
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-gray-100 p-3">
          <p className="text-[11px] font-medium text-gray-700">Kashep</p>
          <p className="text-[12px] text-gray-600 mt-0.5">
            Welcome! Let's set up your plan for June.
          </p>
        </div>
        <div className="rounded-lg bg-[#166534]/10 p-3 border border-[#166534]/20">
          <p className="text-[11px] font-medium text-[#166534]">You</p>
          <p className="text-[12px] text-gray-700 mt-0.5">
            Salary: 15,000 ETB<br />
            Debt: 3,000 ETB (Dawit)<br />
            Savings: 2,000 ETB
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 p-3">
          <p className="text-[11px] font-medium text-gray-700">Kashep</p>
          <p className="text-[12px] text-gray-600 mt-0.5">
            ✅ Plan created! You have 10,000 ETB to spend this month.
          </p>
        </div>
      </div>
    </div>
  );
}

// Feature highlight mockup for steps 2 & 3
function FeatureHighlight({ stepIndex }: { stepIndex: number }) {
  const feature = featureData[stepIndex];
  
  // Safety check - if no feature data, don't render
  if (!feature) {
    return null;
  }

  return (
    <div className="w-full max-w-[280px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-[12px] font-semibold text-gray-700">{feature.title}</p>
      <div className="space-y-2">
        {feature.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-gray-50 pb-1.5 last:border-0">
            <span className="text-[11px] text-gray-500">{item.label}</span>
            <span
              className={`text-[11px] font-medium ${
                item.highlight ? 'text-[#166534]' : 'text-gray-700'
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}