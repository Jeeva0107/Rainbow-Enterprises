import type { Metadata } from 'next';
import { Outfit, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastContainer } from '@/components/ui/toast-container';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Rainbow Enterprises | Premium Organic & Cold-Pressed Store',
  description:
    'Sustainably sourced, 100% natural organic products, traditional cold-pressed oils, rich desi cow ghee, rare honey, ancient millets, and healthy snacks.',
  keywords: 'organic store, cold pressed oil, cow ghee, mountain honey, millets, health foods, rootsveyr',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${playfair.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans bg-background text-foreground flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
