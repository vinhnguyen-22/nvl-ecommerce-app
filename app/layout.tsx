'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import './globals.css';
import NextNProgress from 'nextjs-progressbar';
import { dir } from 'i18next';
const languages = ['en', 'vi'];

import { GlobalProvider } from './GlobalProvider';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
      <body>
        <GlobalProvider>
          <div className="flex flex-col min-h-[100vh]">
            <NextNProgress height={7} />
            <Header />
            {children}
            <Footer />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
