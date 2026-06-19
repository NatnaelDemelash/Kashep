'use client';

import { useState } from 'react';

const TOTAL_STEPS = 4;

export default function SetupPage() {
  const [step, setStep] = useState(1);
  const [salary, setSalary] = useState('');
  const [payday, setPayday] = useState('');

  function next() {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else alert('Plan preview — coming next');
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="flex flex-1 flex-col">
      <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
        Step {step} of {TOTAL_STEPS}
      </p>

      <div className="mt-6 flex-1">
        {step === 1 && (
          <div>
            <h2 className="font-bricolage text-xl font-bold text-gray-900">
              What&apos;s your salary this month?
            </h2>
            <input
              type="number"
              inputMode="numeric"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="15000"
              className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3 font-mono text-lg outline-none focus:border-brand"
            />
            <p className="mt-2 text-sm text-gray-400">In ETB</p>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-bricolage text-xl font-bold text-gray-900">
              When do you get paid?
            </h2>
            <input
              type="number"
              inputMode="numeric"
              value={payday}
              onChange={(e) => setPayday(e.target.value)}
              placeholder="28"
              className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3 font-mono text-lg outline-none focus:border-brand"
            />
            <p className="mt-2 text-sm text-gray-400">Day of the month (1–31)</p>
          </div>
        )}

        {step > 2 && (
          <div>
            <h2 className="font-bricolage text-xl font-bold text-gray-900">
              More steps coming
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Debts and your savings goal will live here next.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <button
            onClick={back}
            className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700"
          >
            Back
          </button>
        )}
        <button
          onClick={next}
          className="flex-1 rounded-xl bg-[#333] px-5 py-3 font-medium text-white transition hover:bg-brand/90"
        >
          {step < TOTAL_STEPS ? 'Next' : 'See my plan'}
        </button>
      </div>
    </div>
  );
}