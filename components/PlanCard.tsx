// PlanCard.tsx (enhanced)
export default function PlanCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="font-bricolage text-[16px] font-semibold text-gray-800">
            June 2026 — plan
          </span>
          <span className="rounded-full bg-[#007042]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#007042]">
            locked in
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Salary */}
        <div className="mb-5 flex items-center justify-between border-b border-gray-50 pb-4">
          <div>
            <p className="text-[14px] font-medium text-gray-700">Salary</p>
            <p className="font-mono text-[11px] text-gray-400">paid Jun 28</p>
          </div>
          <p className="font-mono text-[16px] font-semibold text-gray-900">15,000 ETB</p>
        </div>

        {/* Debt */}
        <div className="mb-5 flex items-center justify-between border-b border-gray-50 pb-4">
          <div>
            <p className="text-[14px] font-medium text-gray-700">Debt · Dawit</p>
            <p className="font-mono text-[11px] text-gray-400">due Jun 20</p>
          </div>
          <p className="font-mono text-[16px] font-medium text-red-500">− 3,000 ETB</p>
        </div>

        {/* Savings */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[14px] font-medium text-gray-700">Savings</p>
            <p className="font-mono text-[11px] text-gray-400">CBE account</p>
          </div>
          <p className="font-mono text-[16px] font-medium text-gray-500">− 2,000 ETB</p>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100" />
          </div>
        </div>

        {/* Spendable */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-[#007042]/5 to-transparent p-3">
          <p className="text-[15px] font-semibold text-gray-700">Spendable</p>
          <p className="font-mono text-[32px] font-bold tracking-tight text-[#007042]">
            10,000 ETB
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Weekly
            </p>
            <p className="font-mono text-[15px] font-medium text-gray-800">2,500 ETB</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Daily
            </p>
            <p className="font-mono text-[15px] font-medium text-gray-800">357 ETB</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Week 2 left
            </p>
            <p className="font-mono text-[15px] font-medium text-gray-800">1,840 ETB</p>
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
            <span className="text-amber-600 text-sm">⚠</span>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-amber-800">Pay Dawit on salary day</p>
            <p className="text-[11px] leading-relaxed text-amber-700">
              Don't wait. Delaying past Jun 20 risks your week 3 budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}