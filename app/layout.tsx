import type { Metadata } from 'next';
import { Exo_2, Space_Mono } from 'next/font/google';
import './globals.css';
import ClientEntryReset from './client-entry-reset';

const exo = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Dubai Space Travel - The Ultimate Space Experience',
  description: 'Book your journey from Dubai to the stars with the world\'s premier space travel service.',
  keywords: 'space travel, Dubai, space tourism, orbital hotels, lunar vacation, space station',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${spaceMono.variable}`}>
      <body className="bg-space-dark text-space-white min-h-screen">
        <ClientEntryReset />
        {children}
      </body>
    </html>
  );
} 