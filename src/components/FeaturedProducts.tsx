'use client';
import React from 'react';
import ProductCard from '../app/product/ProductCard';

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

const FeaturedProducts = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-row justify-between mt-10">
        <h2 className="text-3xl">Featured Products</h2>
        <a href="#" className="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
      <div
        className="
          mt-5
          pt-2
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          2xl:grid-cols-6
          gap-8
          "
      >
        {producttest.map((producttest: any) => {
          return <ProductCard key={producttest.id} data={producttest} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
