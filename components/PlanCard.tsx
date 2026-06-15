// components/PlanCard.tsx - With subtle light blue matching Open in Telegram button
export default function PlanCard() {
  return (
    <div className="w-[320px] overflow-hidden rounded-2xl bg-[#1c1c1e] font-sans shadow-lg">
      {/* Telegram-style header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#2c2c2e] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2AABEE]/10 text-[#2AABEE]">
            <span className="text-[13px] font-medium">K</span>
          </div>
          <div>
            <p className="text-[13px] font-medium text-white">Kashep</p>
            <p className="text-[11px] text-[#8e8e93]">Smart budgeting</p>
          </div>
        </div>
        <button className="text-[#8e8e93] text-lg">⋯</button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        {/* Plan header */}
        <div className="mb-1 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#8e8e93]">
            June 2026 — plan
          </p>
          <span className="rounded-full border border-[#2AABEE]/30 bg-[#2AABEE]/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#2AABEE]">
            locked in
          </span>
        </div>

        {/* Salary, Debt, Savings cards */}
        <div className="overflow-hidden rounded-xl bg-[#2c2c2e]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
            <div>
              <p className="text-[14px] font-medium text-white">Salary</p>
              <p className="mt-0.5 font-mono text-[11px] text-[#8e8e93]">paid Jun 28</p>
            </div>
            <p className="font-mono text-[15px] font-medium text-white">15,000 ETB</p>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
            <div>
              <p className="text-[14px] font-medium text-white">Debt · Dawit</p>
              <p className="mt-0.5 font-mono text-[11px] text-[#8e8e93]">due Jun 20</p>
            </div>
            <p className="font-mono text-[15px] font-medium text-[#FF453A]">− 3,000 ETB</p>
          </div>

          <div className="flex items-center justify-between px-4 py-3.5">
            <div>
              <p className="text-[14px] font-medium text-white">Savings</p>
              <p className="mt-0.5 font-mono text-[11px] text-[#8e8e93]">CBE account</p>
            </div>
            <p className="font-mono text-[15px] font-medium text-[#8e8e93]">− 2,000 ETB</p>
          </div>
        </div>

        {/* Spendable card */}
        <div className="flex items-center justify-between rounded-xl border border-[#2AABEE]/30 bg-[#2AABEE]/5 px-4 py-4">
          <p className="text-[14px] font-medium text-[#8e8e93]">Spendable</p>
          <p className="font-mono text-[28px] font-semibold tracking-tight text-[#2AABEE]">
            10,000 <span className="text-[16px] font-medium">ETB</span>
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-[#2c2c2e] p-2.5 text-center">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-[#8e8e93]">
              Weekly
            </p>
            <p className="font-mono text-[13px] font-medium text-white">2,500</p>
            <p className="text-[10px] text-[#8e8e93]">ETB</p>
          </div>
          <div className="rounded-lg bg-[#2c2c2e] p-2.5 text-center">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-[#8e8e93]">
              Daily
            </p>
            <p className="font-mono text-[13px] font-medium text-white">357</p>
            <p className="text-[10px] text-[#8e8e93]">ETB</p>
          </div>
          <div className="rounded-lg bg-[#2c2c2e] p-2.5 text-center">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-[#8e8e93]">
              Wk 2 left
            </p>
            <p className="font-mono text-[13px] font-medium text-white">1,840</p>
            <p className="text-[10px] text-[#8e8e93]">ETB</p>
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-2.5 rounded-xl border border-[#FF9500]/20 bg-[#FF9500]/10 px-3.5 py-3">
          <span className="mt-0.5 text-[#FF9500] text-base">⚠️</span>
          <div>
            <p className="text-[12px] font-medium text-[#FF9500]">Pay Dawit on salary day</p>
            <p className="text-[11px] leading-relaxed text-[#8e8e93]">
              Don't wait. Delaying past Jun 20 risks your week 3 budget.
            </p>
          </div>
        </div>

        {/* View full plan button - matching Open in Telegram style */}
        <button className="mt-1 rounded-xl border border-[#2AABEE]/30 bg-[#2AABEE]/5 py-3.5 text-center text-[14px] font-medium text-[#2AABEE] transition-all hover:bg-[#2AABEE]/10">
          View full plan
        </button>
      </div>

      {/* Bottom tab bar */}
      <div className="flex justify-around border-t border-white/10 bg-[#2c2c2e] px-4 py-3">
        <div className="flex flex-col items-center gap-1">
          <svg className="h-5 w-5 text-[#2AABEE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <p className="text-[10px] text-[#2AABEE]">Plan</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg className="h-5 w-5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <p className="text-[10px] text-[#8e8e93]">Debts</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg className="h-5 w-5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p className="text-[10px] text-[#8e8e93]">History</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg className="h-5 w-5 text-[#8e8e93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-[10px] text-[#8e8e93]">Settings</p>
        </div>
      </div>
    </div>
  );
}