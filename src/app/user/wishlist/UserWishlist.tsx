'use client';
import Button from '@/src/components/Button';
import HeartButton from '@/src/components/HeartButton';
import router from 'next/router';
import React from 'react';
import Image from 'next/image';
import ProductCard from '@/app/product/ProductCard';
import { AiFillHeart } from 'react-icons/ai';
import Closebutton from '@/src/components/Closebutton';

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

const UserWishlist = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-4 mobile:flex-col">
        <h4 className="flex text-lg font-bold capitalize mb-4">
          <div className="text-red-600 text-xl mr-3 -left-8 top-0 ">
            <AiFillHeart />
          </div>
          My wishlist
        </h4>
        <button
          onClick={() => router.push('/checkout/page')}
          className="
            text-white 
              rounded-md 
              shadow-md 
              mt-[30px] 
              p-3
              hover:scale-110
              hover:opactity-90
              transition
              bg-gradient-to-r from-lime-300 to-green-500 
              font-bold
              "
        >
          Add all to cart
        </button>
      </div>
      <div
        className="                
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      2xl:grid-cols-6
      gap-8
      "
      >
        <div
          onClick={() => router.push('/product/page')}
          className="
        col-span-1 cursor-pointer group bg-white px-3 py-3 mt-2 shadow-lg rounded-lg mb-2
        "
        >
          <div className="flex flex-col gap-2 w-full ">
            <div
              className="
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-xl
                "
            >
              <Image
                height={500}
                width={400}
                alt="listing"
                src="/images/placeholder.png"
                className="
                        object-cover

                        group-hover:scale-110
                        transition
                        "
              />
              <div className="absolute top-1 right-1">
                <Closebutton />
              </div>
            </div>
            <div className="font-semibold" text-lg>
              name
            </div>
            <div className="font-light text-neutral-500">Category</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">$ Price</div>
            </div>
            <Button small label="Add to cart" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishlist;
