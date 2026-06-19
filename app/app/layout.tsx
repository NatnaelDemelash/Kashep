import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-white">
      <header className="border-b border-gray-200 px-4 py-3">
        <h1 className="font-bricolage text-lg font-bold text-brand">Kashep</h1>
      </header>

      <main className="flex-1 px-4 py-5">{children}</main>
    </div>
  );
}