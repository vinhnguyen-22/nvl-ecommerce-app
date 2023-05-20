'use client';
import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
// import { client } from '@/lib/client';
import { IProduct } from '@/lib/types/products';
import ProductList from '@/components/productList/ProductList';
import { ICategoryPathsParams } from '@/lib/types/pagePathsParams';
import { products } from '@/mock/products';
import { getAllProductByCateogryFn } from '@/redux/features/product/service/product.api';
import useSWR from 'swr';

const categoryPage = async (searchParams: any) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    'price[gte]': searchParams.min,
    'price[lte]': searchParams.max,
    'ratings[gte]': searchParams.ratings,
  };

  const { data: products, isLoading: productLoading } = useSWR(
    '/getAllProductByCateogry',
    await getAllProductByCateogryFn(searchParams),
  );
  return <div>{!productLoading && <ProductList productList={products} />}</div>;
};

export default categoryPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const query = `*[_type=="product"]{
//     "category":category[0]
//   }`;
//   const products = await client.fetch(query);
//   const paths = products.map((product: ICategoryPathsParams) => ({
//     params: {
//       category: product.category,
//     },
//   }));
//   return {
//     fallback: 'blocking',
//     paths,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const category = context.params?.category;
//   const productQuery = `*[_type=='product'&& category[0]=="${category}"]`;
//   // const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products: products,
//     },
//   };
// };
