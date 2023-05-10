import { Nunito } from 'next/font/google';
import ClientOnly from '../components/ClientOnly';
import Footer from '../components/Footer';
import RegisterModel from '../components/modals/RegisterModal';
import Navbar from '../components/navbar/Navbar';
import './globals.css';

export const metadata = {
  title: 'NVL',
  description: 'Project NVL',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModel />
          <Navbar />
          <div className="" style={{ marginTop: 230 }}>
            {children}
          </div>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
