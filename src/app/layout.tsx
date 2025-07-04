import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'TAKANORI HIDAKA',
  description: "Showcasing my projects and things I've learned",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
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
