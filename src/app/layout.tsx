import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brunovncs - portfolio',
  description: 'Brunovcs portfolio - React developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`const theme = localStorage.getItem('theme') || 'dark';
          document.documentElement.classList.toggle('dark', theme === 'dark');`}
        </Script>
      </head>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-1000`}>
        <Navbar />
        <main className="min-h-screen pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-4">
            {children}
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}