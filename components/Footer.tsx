// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#166534]">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
              >
                <rect x="1" y="1" width="8" height="8" rx="2" />
                <rect x="7" y="7" width="8" height="8" rx="2" opacity="0.5" />
              </svg>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-extrabold tracking-tight text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', system-ui" }}>
                Kashep
              </span>
              <span className="text-[7px] tracking-[0.2em] text-[#166534]">
                SMART BUDGETING
              </span>
            </div>
          </a>

          {/* Copyright */}
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Kashep. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}