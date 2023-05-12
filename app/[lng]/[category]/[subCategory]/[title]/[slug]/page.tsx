'use client';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import ProductDetails from '@/components/productDetails';
// import { client } from '@/lib/client';
import { ISlugPathsParams } from '@/lib/types/pagePathsParams';
import { IProduct } from '@/lib/types/products';
import { product, products } from '@/mock/products';

const productDetailsPage = () => {
  console.log(product);
  return (
    <div>
      <ProductDetails product={product} products={products} />
    </div>
  );
};

export default productDetailsPage;
