'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Infinity, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started with financial planning.',
    icon: Infinity,
    features: [
      '1 income source',
      '1 debt at a time',
      'Current month plan only',
      'Weekly Monday summary',
      'Budget alerts at 70% and 90%',
      'Telegram Mini App access',
    ],
    cta: 'Start free',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Pro',
    price: 99,
    period: 'per month',
    description: 'For power users who want full control of their finances.',
    icon: Zap,
    features: [
      'Everything in Free, plus:',
      'Multiple income sources',
      'Unlimited debts',
      'Full month history and trends',
      'Scenario simulator',
      'AI spending insights',
      'Salary day checklist',
      'CSV export',
      'Priority support',
    ],
    cta: 'Join waitlist',
    highlighted: true,
    badge: 'Most popular',
  },
];

export default function Pricing() {
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
      id="pricing"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#166534]/20 bg-[#166534]/5 px-3 py-1">
            <Sparkles size={12} className="text-[#166534]" />
            <span className="text-[11px] font-medium uppercase tracking-wide text-[#166534]">
              Simple pricing
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Pay only if you{' '}
            <span className="text-[#166534]">love Kashep</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500">
            Start free. Upgrade when you need more. No hidden fees.
            Cancel anytime.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => {
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border transition-all duration-500 ${
                  plan.highlighted
                    ? 'border-[#166534]/30 bg-gradient-to-br from-white to-[#166534]/[0.02] shadow-xl'
                    : 'border-gray-200 bg-white shadow-md'
                } ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#166534] px-3 py-0.5 text-[10px] font-medium text-white whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Plan header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`rounded-lg p-2 ${
                          plan.highlighted
                            ? 'bg-[#166534] text-white'
                            : 'bg-[#166534]/10 text-[#166534]'
                        }`}
                      >
                        <plan.icon size={18} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-[13px] text-gray-500">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      {plan.price === 0 ? (
                        <span className="text-4xl font-bold text-gray-900">Free</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-gray-900">
                            {plan.price} ETB
                          </span>
                          <span className="text-[13px] text-gray-400">
                            / {plan.period}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="mt-0.5 flex-shrink-0 text-[#166534]"
                        />
                        <span
                          className={`text-[13px] leading-relaxed ${
                            feature === 'Everything in Free, plus:'
                              ? 'font-semibold text-gray-800'
                              : 'text-gray-500'
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full rounded-lg py-3 text-[14px] font-medium transition-all ${
                      plan.highlighted
                        ? 'bg-[#166534] text-white shadow-sm hover:bg-[#14532d] hover:shadow-md'
                        : 'border border-gray-300 bg-white text-gray-700 hover:border-[#166534] hover:text-[#166534]'
                    }`}
                  >
                    {plan.cta} →
                  </button>

                  {/* Extra note for free plan */}
                  {plan.name === 'Free' && (
                    <p className="mt-3 text-center text-[10px] text-gray-400">
                      No credit card required. Forever free.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust message */}
        <div className="mt-12 text-center">
          <p className="text-[12px] text-gray-400">
            🔒 No long-term contracts. Cancel anytime from Telegram.
            All prices in Ethiopian Birr (ETB).
          </p>
        </div>
      </div>
    </section>
  );
}