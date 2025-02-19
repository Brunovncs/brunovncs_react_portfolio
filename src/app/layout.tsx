import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/react"

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
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen pt-32 pb-20"> {/* Espaço para a navbar e padding */}
          <div className="max-w-5xl mx-auto px-4"> {/* Container centralizado */}
            {children}
          </div>
        </main>

      <Analytics />
      </body>
    </html>
  );
}