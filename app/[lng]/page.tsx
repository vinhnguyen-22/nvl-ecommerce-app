'use client';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
import { useSWRConfig } from 'swr';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { getAllSlideFn } from '@/redux/features/slides/service/slides.api';
import { getAllBrandFn, getAllProductCategoriesFn } from '@/redux/features/category/service/category.api';

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

  const { mutate } = useSWRConfig();
  const { data: slides, isLoading: slideLoading } = useSWR(
    '/getAllSlides',
    getAllSlideFn,
  );
  const { data: categories, isLoading: categoriesLoading } = useSWR(
    '/getAllCategories',
    getAllProductCategoriesFn,
  );

  const { data: brands, isLoading: brandsLoading } = useSWR(
    '/getAllBrands',
    getAllBrandFn,
  );

  // if (slide?.success !== true) toast.error(slide?.message);
  // const { data: productData, isLoading: productLoading } = useSWR(
  //   '/gettingAllProductsFOrAdmin',
  //   get_all_products,
  // );
  // if (productData?.success !== true) toast.error(productData?.message);

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
      {!slideLoading && <Carousel slides={slides} />}
      <Benefits />
      <Promotion />
      <Offers />
      {!categoriesLoading && <Category categories={categories} />}
      <Newest />
      <Banners />
      {!brandsLoading && <Brands brands={brands}/>}
    </ClientOnly>
  );
};

export default HomePage;
