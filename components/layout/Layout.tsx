import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '../header';
import { store } from '@/redux/store/store';
import Footer from '../footer';
import { ToastContainer } from 'react-toastify';
// import { useLanguage } from '@/hooks/useLanguage';
import NextNProgress from 'nextjs-progressbar';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  // const { locale } = useLanguage();
  const locale = 'en';
  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <NextNProgress height={7} />
        <Header />
        <main className="flex-grow  md:mt-40">{children}</main>
        <Footer />
      </div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        rtl={locale === 'en' ? false : true}
        position={locale === 'en' ? 'top-right' : 'top-left'}
      />
    </>
  );
};

export default Layout;
