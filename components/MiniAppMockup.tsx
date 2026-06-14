export default function MiniAppMockup() {
  return (
    <div className="relative w-full max-w-[320px]">
      {/* Phone frame */}
      <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Mockup header */}
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800">
                Kashep
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
            </div>
          </div>

          {/* Mockup content */}
          <div className="p-4 space-y-4">
            {/* Balance card */}
            <div className="bg-slate-800 rounded-xl p-3 text-white">
              <div className="text-xs text-slate-300">Monthly Budget</div>
              <div className="text-xl font-bold">12,450 ETB</div>
              <div className="text-xs text-slate-300 mt-1">
                Remaining: 3,200 ETB
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Spent this week</span>
                <span>68%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-slate-700 rounded-full"></div>
              </div>
            </div>

            {/* Alert pill */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">⚠️</span>
                <span className="text-xs text-amber-800 font-medium">
                  70% of June budget used
                </span>
              </div>
            </div>

            {/* Debt reminder */}
            <div className="border border-slate-100 rounded-lg p-2.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Debt due</span>
                <span className="font-medium text-slate-800">2 days</span>
              </div>
              <div className="font-semibold text-sm">3,500 ETB</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative telegram badge */}
      <div className="absolute -bottom-3 -right-3 bg-[#26A5E4] text-white text-xs px-2 py-1 rounded-full shadow-md">
        Telegram Mini App
      </div>
    </div>
  );
}
