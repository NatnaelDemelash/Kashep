'use client';

import { useEffect } from 'react';
import { init, initData, isTMA, useSignal } from '@telegram-apps/sdk-react';
import Link from 'next/link';

export default function HomePage() {
  const state = useSignal(initData.state);
  const user = state?.user;

  useEffect(() => {
    if (isTMA()) {
      init();
      initData.restore();
    }
  }, []);

  const firstName = user?.first_name ?? 'there';
  const monthLabel = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
          {monthLabel}
        </p>
        <h2 className="font-bricolage text-2xl font-bold text-gray-900">
          Hello {firstName} 👋
        </h2>
      </div>

      <div className="rounded-2xl border border-gray-200 p-6 text-center">
        <h3 className="font-bricolage text-lg font-semibold text-gray-900">
          No plan yet
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          Tell Kashep your salary, debts, and savings goal. We&apos;ll build
          your full month plan and track it with you.
        </p>
        <Link
          href="/app/setup"
          className="mt-5 block w-full rounded-xl bg-[#333] px-5 py-3 text-center font-medium text-white transition hover:bg-brand/90"
        >
          Set up your month
        </Link>

      </div>
    </div>
  );
}