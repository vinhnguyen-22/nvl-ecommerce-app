'use client';
import { store } from '@/redux/store/store';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function GlobalProvider({ children }: any): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <SessionProvider>{children}</SessionProvider>
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            rtl={false}
            position={'top-right'}
          />
        </ThemeProvider>
      </Provider>
    </>
  );
}
