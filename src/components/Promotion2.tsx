'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import Sidebar from './sidebar/Sidebar'
import BasicSidebar from './BasicSidebar'
import VerticalBanner from './VerticalBanner'

const Promotion = () => {
  const ProductDivStyle =
    'flex lg:flex lg:flex-row md:flex md:flex-row mobile:flex-col w-[100%] p-3  border-2 bg-white rounded-md items-center justify-between relative'
  const SaleTextStyle =
    'text-xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600'
  return (
    <div className="grid grid-cols-12 items-start gap-6 pt-4 pb-6 h-90">
      <div className="col-span-3 h-full">
        <VerticalBanner />
      </div>
      <div className="flex flex-col col-span-6 gap-2 h-full">
        <div className="flex flex-col flex-1 rounded-md ">
          <div className={ProductDivStyle}>
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
                src="/images/sale1.jpg"
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
        <div className="flex flex-col flex-1 rounded-md border-2 bg-white justify-center items-center p-6">
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
              src="/images/sale1.jpg"
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
          <div className="flex flex-row w-[100%]  bg-white rounded-md items-center justify-between relative p-3 border-2">
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row ">
              <Image
                width={150}
                height={100}
                alt="listing"
                src="/images/sale1.jpg"
                className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
              />
            </div>
            <div className=" w-full rounded-lg text-gray-800 ">
              <div>
                <h3 className="text-xs font-extrabold ">
                  Classical literature
                </h3>
                <p className={SaleTextStyle}>NEWLY PUBLISHED</p>
                <p className=" text-md underline leading-relaxed cursor-pointer">
                  Shop now
                </p>

                <div></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%]  bg-white rounded-md items-center justify-center relative p-3 border-2">
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
                width={150}
                height={100}
                alt="listing"
                src="/images/sale1.jpg"
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
          <div className="flex flex-row w-[100%]  bg-white rounded-md items-between justify-between relative p-3 border-2">
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
                src="/images/sale1.jpg"
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
  )
}

export default Promotion
