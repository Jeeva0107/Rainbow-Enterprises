import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastContainer } from '@/components/ui/toast-container';

// Static variables to support offline builds, fonts will load via standard browser link tags
const outfit = { variable: 'font-outfit' };
const inter = { variable: 'font-inter' };
const playfair = { variable: 'font-playfair' };

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full font-sans bg-background text-foreground flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
