import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Kashep - Active Financial Planner for Ethiopians',
  description:
    'Kashep builds your full month plan automatically, tracks weekly progress, warns before overspending, and manages debt repayments. Delivered via Telegram Mini App.',
  keywords:
    'personal finance, Ethiopia, budget planner, debt management, Telegram Mini App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
