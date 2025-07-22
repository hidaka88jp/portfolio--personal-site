import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'TAKANORI HIDAKA',
  description: "Showcasing my projects and things I've learned",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={clsx(inter.variable, inconsolata.variable, 'scroll-smooth')}>
      <head>
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className='text-gray'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
