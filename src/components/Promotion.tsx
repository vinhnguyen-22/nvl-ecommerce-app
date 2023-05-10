'use client'
import React from 'react'
import Image from 'next/image'


const Promotion = () => {
  const ProductDivStyle =
    'flex lg:flex lg:flex-row md:flex md:flex-row mobile:flex-col w-[100%] p-3 h-auto border-2 bg-white rounded-md items-center justify-between relative'
  const SaleTextStyle =
    'text-xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600'
  return (
    <div className="flex flex-col
     justify-center">
      <div className="flex 2xl:flex-row lg:flex-row md:flex-col mobile:flex-col mt-7 gap-3 rounded-lg  ">
        <div className="flex flex-col flex-1 rounded-md ">
          <div className={ProductDivStyle}>
            <div className=" w-full rounded-lg text-gray-800 p-6">
              <div>
                <h3 className="text-xs font-bold ">Modern literature</h3>
                <p className={SaleTextStyle}>BIG SALE</p>
                <p className=" text-xl font-bold leading-relaxed">
                  UP TO 50% OFF
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
        <div className="Summary flex-[0.4] flex flex-col items-center bg-white rounded-md mobile:mb-6 border-2 ">
          <div className="flex flex-col w-[100%] h-auto bg-white rounded-md items-center justify-between relative p-3">
            <div className="w-full rounded-lg text-gray-800 ">
              <div>
                <h3 className="text-xs font-extrabold ">
                  Classical literature
                </h3>
                <p className={SaleTextStyle}>UP TO 60% SALE</p>
                <div></div>
              </div>
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
        </div>
      </div>
      <div className="flex justify-center 2xl:flex-row lg:flex-row md:flex-col mobile:flex-col mt-7 gap-3 rounded-lg lg:w-4/5 ">
        <div className="flex flex-col flex-1 rounded-md border-2 bg-white justify-center items-center">
          <div className="flex flex-col w-full rounded-lg text-gray-800 justify-center items-center">
              <h3 className="text-xs font-extrabold ">Classical literature</h3>
              <p className={SaleTextStyle}>SPRING OFFER</p>
              <div></div>

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
        <div className="Summary flex-[0.4] flex flex-col items-center rounded-md mobile:mb-6 gap-2 ">
          <div className="flex flex-col w-[100%] h-auto bg-white rounded-md items-center justify-between relative p-3 border-2">
            <div className=" w-full rounded-lg text-gray-800 ">
              <div>
                <h3 className="text-xs font-extrabold ">
                  Classical literature
                </h3>
                <p className={SaleTextStyle}>NEWLY PUBLISHED</p>
                <div></div>
              </div>
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
          <div className="flex flex-col w-[100%] h-auto bg-white rounded-md items-center justify-between relative p-3 border-2">
            <div className=" w-full rounded-lg text-gray-800 ">
              <div>
                <h3 className="text-xs font-extrabold ">
                  Classical literature
                </h3>
                <p className={SaleTextStyle}>INTERNATIONAL BESTSELLER</p>
                <div></div>
              </div>
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
        </div>
      </div>
    </div>
  )
}

export default Promotion
