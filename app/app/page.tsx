'use client';

import { useEffect } from 'react';
import { init, initData, isTMA, useSignal } from '@telegram-apps/sdk-react';

export default function MiniAppPage() {
  // Reactively read the data Telegram injected.
  // On localhost (no Telegram), this stays undefined — that's fine.
  const state = useSignal(initData.state);
  const user = state?.user;

  useEffect(() => {
    // Only boot the SDK when we're actually inside Telegram.
    // On localhost there's no Telegram, so we simply skip init —
    // no throw, no error overlay, just the fallback screen.
    if (isTMA()) {
      init();
      initData.restore();
    }
  }, []);

  const displayName =
    user?.username ?? user?.first_name ?? 'there (open me inside Telegram)';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-semibold">Hello {displayName} 👋</h1>

      <button
        onClick={() => alert('SDK is working ✅')}
        className="rounded-lg px-5 py-3 font-medium text-white"
        style={{ backgroundColor: '#007042' }}
      >
        SDK is working
      </button>
    </main>
  );
}
