import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// The `variable` name here becomes the CSS custom property on <body>
// e.g. variable: '--font-inter' → body gets --font-inter: "Inter"
// globals.css then picks it up via var(--font-inter)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque', // matches globals.css
  weight: ['600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono', // matches globals.css
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Kashep — Active Financial Planner for Ethiopians',
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
        className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}