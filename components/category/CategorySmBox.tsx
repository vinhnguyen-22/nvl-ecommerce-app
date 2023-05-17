import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCategory } from '@/redux/features/category/service/ProductCategory';
// import { useLanguage } from '@/hooks/useLanguage';

const CategorySmBox: React.FC<ProductCategory> = ({
  image,
  color,
  categoryName,
  slug,
}) => {
  // const { t, locale } = useLanguage();
  return (
    <Link href={`${slug}`}>
      <div
        className={`flex flex-col items-center text-center  ${
          // locale === 'en'
          //   ? 'w-[10rem] sm:w-[13rem]'
          // :
          'min-w-[7rem] w-[9.3rem] sm:w-[10rem]' + 'w-[10rem] sm:w-[13rem]'
        } my-2`}
      >
        <div
          className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-palette-${color}`}
        >
          <Image
            src={`/images/category-icon/${image}`}
            alt={categoryName}
            width={45}
            height={45}
            className="drop-shadow-lg"
          />
        </div>
        <h3 className="text-sm md:text-base font-bold mt-2">{categoryName}</h3>
      </div>
    </Link>
  );
};

export default CategorySmBox;
