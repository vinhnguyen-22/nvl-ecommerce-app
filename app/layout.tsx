'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import './globals.css';
import NextNProgress from 'nextjs-progressbar';
import { dir } from 'i18next';
import { Nunito } from 'next/font/google';

const languages = ['en', 'vi'];

import { GlobalProvider } from './GlobalProvider';
import ClientOnly from '@/components/ClientOnly/ClientOnly';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = 'en';

  return (
    <html lang={lng} dir={'ltr'}>
      <head />
      <body className={font.className}>
        <ClientOnly>
        <GlobalProvider>
          <div className="flex flex-col min-h-[100vh]">
            <NextNProgress height={7} />
            <Header />
            {children}
            <Footer />
          </div>
        </GlobalProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
