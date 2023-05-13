'use client';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
// import { client } from '@/lib/client';
import { products } from '../../mock/products';
import Benefits from '@/components/Benefits';
import Carousel from '@/components/carousel';
import { IProduct } from '@/lib/types/products';
import { newestProductsActions } from '@/redux/features/product/newestProductSlice';
import { specialOfferProductsActions } from '@/redux/features/product/specialOfferProductsSlice';
import { newestProductsFn } from '@/utilities/sortByTimeStamp';
import ClientOnly from '@/components/ClientOnly/ClientOnly';
import Promotion from '@/components/promotion/Promotion';

const Offers = dynamic(() => import('@/components/Offers/Offers'));
const Category = dynamic(() => import('@/components/category/Category'));
const Newest = dynamic(() => import('@/components/newest/Newest'));
const Brands = dynamic(() => import('@/components/brands'));
const Banners = dynamic(() => import('@/components/banners'), {
  ssr: false,
});

const HomePage = ({ searchParams }: any) => {
  const dispatch = useDispatch();
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    'price[gte]': searchParams.min,
    'price[lte]': searchParams.max,
    'ratings[gte]': searchParams.ratings,
  };
  useEffect(() => {
    // add products to offers list
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));
    //add products to newest list
    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [dispatch]);
  return (
    <ClientOnly>
      <Carousel />
      <Benefits />
      <Promotion/>
      <Offers />
      <Category />
      <Newest />
      <Banners />
      <Brands />
    </ClientOnly>
  );
};

export default HomePage;
