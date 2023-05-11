'use client';
import React, { useEffect, useState } from 'react';
// import { useLanguage } from '@/hooks/useLanguage';
import { IProduct } from '@/lib/types/products';
import SubmenuCategory from './SubmenuCategory';
import Card from '../UI/card/Card';
import Breadcrumb from '../UI/Breadcrumb';
import Sort from './Sort';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { IProductListRootState } from '@/lib/types/productList';
import { SortedProductsListActions } from '@/redux/features/product/sortedProductListSlice';

interface Props {
  productList: IProduct[];
}
const ProductList: React.FC<Props> = ({ productList }) => {
  const router = useRouter();
  // const { t } = useLanguage();
  const pathname = usePathname();

  let isInNewestProductsPage = pathname === '/newestProducts' ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: productList,
        sortBasedOn: selectedRadioBtn,
      }),
    );
  }, [dispatch, productList, selectedRadioBtn]);

  const sortedProductList = useSelector(
    (state: IProductListRootState) => state.sortedProductsList.productsList,
  );

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {isInNewestProductsPage && productList.length ? (
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
            {productList
              ? productList.map((product: IProduct) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        ) : sortedProductList && sortedProductList.length ? (
          <div>
            <Sort
              selectedBtn={selectedRadioBtn}
              onChangeSelectedBtn={onChangeHandler}
            />
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
              {sortedProductList.map((product: IProduct) => {
                return <Card key={product.slug.current} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <p className="text-palette-mute text-center mt-8">
            There are no products in this category yet! New products will be
            added soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
