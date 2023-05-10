import { Inter } from 'next/font/google';
import BodyContainer from '@/src/components/BodyContainer';
import ClientOnly from '@/src/components/ClientOnly';
import EmptyState from '@/src/components/EmptyState';
import FeaturedProducts from '@/src/components/FeaturedProducts';
import Features from '@/src/components/Features';
import HeroSection from '@/src/components/HeroSection';
import NewsLetter from '@/src/components/NewsLetter';
import Promotion from '@/src/components/Promotion';

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
        <Promotion />
        <Features />
        <FeaturedProducts />
        <NewsLetter />
      </BodyContainer>
    </ClientOnly>
  );
}
