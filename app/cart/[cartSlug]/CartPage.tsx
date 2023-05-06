'use client'

import Image from 'next/image'
import Button from '@/app/components/Button'
import React from 'react'
import Counter from '@/app/components/Counter'
import { useRouter } from 'next/navigation'
import { AiFillDelete, AiFillHome } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import BodyContainer from '@/app/components/BodyContainer'
import { IoClose } from 'react-icons/io5'
import Closebutton from '@/app/components/Closebutton'

const CartPage = () => {
  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%] '
  const ProductDivStyle =
    'lg:flex lg:flex-row md:flex md:flex-row  mobile:flex-col w-[100%] h-auto px-3 py-3 border-2 bg-white rounded-md border-gray-200 shadow items-center justify-between relative'
  const PriceQuantityStyle =
    'flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7'
  const router = useRouter()
  return (
    <BodyContainer>
      <div className="p-3 ">
        <div className="container py-4 flex items-center gap-3">
          <div className="text-green-600 text-base">
            <AiFillHome />
          </div>
          <span className="text-sm text-gray-400">
            <BiChevronRight />
          </span>
          <p className="text-gray-600 font-medium">Cart</p>
        </div>

        <div className="flex justify-center text-5xl mt-10">Cart</div>
        <div className="flex lg:flex-row md:flex-row 2xl:flex-row mobile:flex-col items-center justify-between ">
          <button className="text-green-600 rounded-m shadow-m mt-[30px p-3  hover:scale-110  transitionbg-white  border-2  border-green-600">
            Continue shopping
          </button>
          <div
            className="
          flex 
          underline
          text-lg
          hover:cursor-pointer
          mobile:m-5
          ml-5
          "
          >
            <p>Items in your cart: 3</p>
            <p className="ml-5">Wishlist items: 3</p>
          </div>
          <button
            onClick={() => router.push('/checkout/page')}
            className="
            text-white 
            font-bold
              rounded-md 
              shadow-md 
              mt-[30px] 
              p-3
              hover:scale-110
              hover:opactity-90
              transition
              bg-gradient-to-r from-lime-300 to-green-500
        "
          >
            Proceed to check out
          </button>
        </div>

        <div className="flex 2xl:flex-row lg:flex-row md:flex-col mobile:flex-col mt-7 rounded-lg ">
          <div className="flex flex-col flex-1 px-3 py-3 rounded-md">
            <div className={ProductDivStyle}>
              <div className="product flex pl-5 self-start">
                <Image
                  width={400}
                  height={600}
                  alt="listing"
                  src="/images/placeholder.png"
                  className="
                  w-[9rem]
                  h-[80%]
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <div>
                    <b className="mr-2 ">ID:</b> 6969
                  </div>
                  <div>
                    <b className="mr-2 ">Product: </b> Doge doge
                  </div>
                  <div className="flex items-center justify-start">
                    <b className="mr-2 ">Color: </b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px]"></div>
                  </div>
                  <div>
                    <b className="mr-2 ">Size: </b> lg
                  </div>
                </div>
              </div>
              <div className={PriceQuantityStyle}>
                <Counter />
                <div className="flex items-center justify-center text-2xl mt-3">
                  <b>$69</b>
                </div>
              </div>
              <div className="absolute top-3 right-3 p-3">
                <Closebutton />
              </div>
            </div>

            <hr className="mt-7 mb-7 mobile:mt-0" />

            <div className={ProductDivStyle}>
              <div className="product flex self-start pl-5">
                <Image
                  width={400}
                  height={600}
                  alt="listing"
                  src="/images/placeholder.png"
                  className="
                  w-[9rem]
                  h-[80%]
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                        "
                />
                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <div>
                    <b className="mr-2 ">ID:</b> 6969
                  </div>
                  <div>
                    <b className="mr-2 ">Product: </b> Doge doge
                  </div>
                  <div className="flex items-center justify-start">
                    <b className="mr-2 ">Color: </b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px]"></div>
                  </div>
                  <div>
                    <b className="mr-2 ">Size: </b> lg
                  </div>
                </div>
              </div>
              <div className={PriceQuantityStyle}>
                <Counter />
                <div className="items-center justify-center text-2xl mt-3">
                  <b>$69</b>
                </div>
              </div>
              <div className="absolute top-3 right-3 p-3 flex items-end">
                <Closebutton />
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] bg-white border-green-600 rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h2 className="text-[2rem]">SUMMARY</h2>
            <div className={SummaryItemStyle}>
              <p className="ml-3">Subtotal</p>
              <p className="mr-3">$140</p>
            </div>
            <div className={SummaryItemStyle}>
              <p className="ml-3">Shipping</p>
              <p className="mr-3">$140</p>
            </div>
            <div className={SummaryItemStyle}>
              <p className="ml-3">Shipping discount</p>
              <p className="mr-3">-$140</p>
            </div>
            <div className={SummaryItemStyle + 'text-3xl font-bold'}>
              <p className="ml-3">Total</p>
              <p className="mr-3"> $140</p>
            </div>
            <button className="flex items-start relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:scale-110 ease-in duration-300 px-3 py-2 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white">
              <div className="text-white text-2xl mr-2 mb-2 block ">
                <AiFillDelete />
              </div>
              Empty cart
            </button>
          </div>
        </div>
      </div>
    </BodyContainer>
  )
}

export default CartPage
