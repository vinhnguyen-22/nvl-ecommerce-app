'use client';
import React from 'react';
import Image from 'next/image';
import VerticalBanner from '../banners/VerticalBanner';

const Promotion = () => {
  const ProductDivStyle =
    'flex lg:flex lg:flex-row md:flex md:flex-row mobile:flex-col w-[100%] p-3 border-2 bg-white rounded-md items-center justify-between relative';
  const SaleTextStyle =
    'text-xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600';
  return (
    <div className="grid xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-1 md:grid-cols-1 items-start gap-6 pt-4 pb-6 h-90">
      <div className="col-span-3 h-full">
        <VerticalBanner />
      </div>
      <div className="flex flex-col col-span-6 gap-2 h-full">
        <div className="flex flex-col flex-1 rounded-md h-1/2">
          <div className={ProductDivStyle + ' h-full'}>
            <div className=" w-full rounded-lg text-gray-800 p-6">
              <div>
                <h3 className="text-xs font-bold ">Modern literature</h3>
                <p className={SaleTextStyle}>BIG SALE</p>
                <p className=" text-xl font-bold leading-relaxed">
                  UP TO 50% OFF
                </p>
                <p className=" text-md underline leading-relaxed cursor-pointer">
                  Shop now
                </p>
                <div></div>
              </div>
            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row">
              <Image
                width={250}
                height={200}
                alt="listing"
                src="/images/promotion-img/sale1.jpg"
                className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 rounded-md border-2 bg-white justify-center items-center p-6 h-1/2">
          <div className="flex flex-col w-full rounded-lg text-gray-800 justify-center items-center ">
            <h3 className="text-xs font-extrabold ">Classical literature</h3>
            <p className={SaleTextStyle}>SPRING OFFER</p>
            <p className=" text-xl font-bold leading-relaxed">
              ALL KIND OF BOOKS
            </p>
            <p className=" text-md underline leading-relaxed cursor-pointer">
              Shop now
            </p>
          </div>
          <div className="lg:w-2/5 w-full lg:flex lg:flex-row ">
            <Image
              width={750}
              height={500}
              alt="listing"
              src="/images/promotion-img/sale1.jpg"
              className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 h-full">
        <div className=" flex-[0.4] flex flex-col items-center rounded-md mobile:mb-6 gap-2  h-full justify-between">
          <div className="flex flex-row w-[100%]  bg-white rounded-md items-center justify-between relative p-3 border-2 h-1/3">
            <div className=" w-full ">
              <Image
                width={100}
                height={300}
                alt="listing"
                src="/images/promotion-img/sale1.jpg"
                className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
              />
            </div>
            <div className="flex w-full rounded-lg text-gray-800 justify-end">
              <div>
                <h3 className="flex text-xs font-extrabold justify-end">
                  Classical literature
                </h3>
                <p className={SaleTextStyle + ' justify-end'}>
                  NEWLY PUBLISHED
                </p>
                <p className="flex text-md underline leading-relaxed cursor-pointer justify-end">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] bg-white rounded-md items-center justify-center relative p-3 border-2 h-1/3">
            <div className="flex flex-col w-full rounded-lg text-gray-800 items-center justify-center">
              <h3 className="text-xs font-extrabold ">Classical literature</h3>
              <p className={SaleTextStyle}>INTERNATIONAL BESTSELLER</p>
              <p className=" text-md underline leading-relaxed cursor-pointer">
                Shop now
              </p>
            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row ">
              <Image
                width={150}
                height={100}
                alt="listing"
                src="/images/promotion-img/sale1.jpg"
                className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%]  bg-white rounded-md items-between justify-between relative p-3 border-2 h-1/3">
            <div className=" w-full rounded-lg text-gray-800 ">
              <h3 className="text-xs font-extrabold ">Classical literature</h3>
              <p className={SaleTextStyle}>INTERNATIONAL BESTSELLER</p>
              <p className=" text-md underline leading-relaxed cursor-pointer">
                Shop now
              </p>
              <div></div>
            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row ">
              <Image
                width={250}
                height={200}
                alt="listing"
                src="/images/promotion-img/sale1.jpg"
                className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
