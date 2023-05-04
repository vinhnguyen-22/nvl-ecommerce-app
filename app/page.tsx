import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ProductCard from './product/ProductCard';
import BodyContainer from './components/BodyContainer';
import HeroSection from './components/HeroSection';
import RootLayout from './layout';
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from './components/NewsLetter';
import Features from './components/Features';

const inter = Inter({ subsets: ['latin'] });

export const producttest = [
  {
    id: 1,
    name: 'first',
    description: 'lorem ipsum',
    sku: 'number',
    imageUrl: '/images/placeholder.png',
    status: 'number',
    category: 'string',
  },

  {
    id: 2,
    name: 'second',
    description: 'lorem ipsum',
    sku: 'number',
    imageUrl: '/images/placeholder.png',
    status: 'number',
    category: 'string',
  },

  {
    id: 3,
    name: 'last',
    description: 'lorem ipsum',
    sku: 'number',
    imageUrl: '/images/placeholder.png',
    status: 'number',
    category: 'string',
  },
];

export default function Home() {
  if (producttest.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <BodyContainer>
        <HeroSection />
        <Features/>
        <FeaturedProducts/>
        <NewsLetter/>
      </BodyContainer>
    </ClientOnly>
  );
}
