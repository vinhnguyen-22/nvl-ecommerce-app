import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
// import { client } from '@/lib/client';
import { IProduct } from '@/lib/types/products';
import ProductList from '@/components/productList/ProductList';
import { products } from '@/mock/products';

const offers: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default offers;
