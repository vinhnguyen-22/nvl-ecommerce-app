import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModal";
import Footer from "./components/Footer";
import Home from "./page";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "NVL",
  description: "Project NVL",
};

const font = Nunito({
  subsets: ["latin"],
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
          <div className="">{children}</div>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
