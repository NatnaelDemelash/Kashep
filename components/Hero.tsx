import MiniAppMockup from './MiniAppMockup';

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700 mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Active Financial Planner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-6">
              Take control of your money before you spend it
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Kashep builds your full month plan automatically, tracks weekly
              progress, warns before overspending, and manages debt repayments.
              <span className="block mt-2 text-slate-500 text-base">
                Delivered via Telegram Mini App — no passwords, no OTP.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="bg-slate-900 text-white text-center px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
              >
                Join the waitlist →
              </a>
              <a
                href="#how-it-works"
                className="border border-slate-300 text-slate-700 text-center px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-all"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right - Mini App Mockup */}
          <div className="flex justify-center md:justify-end">
            <MiniAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
