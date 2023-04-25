"use client";

import Image from "next/image";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import React from "react";
import Counter from "@/app/components/Counter";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const CartPage = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%] ";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  const router = useRouter();
  return (
    <Container>
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

        <div className="flex justify-center text-5xl mt-3">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button
            className="
            text-green-600  
              rounded-md 
              shadow-md 
              mt-[30px] 
              p-3
              hover:scale-110
              transition
            bg-white
              border-2
              border-green-600  
        ">
            Continue shopping
          </button>
          <div
            className="
          flex 
          underline
          text-lg
          hover:cursor-pointer
          mobile:m-5
          ">
            <p>Items in your cart: 3</p>
            <p className="ml-5">Wishlist items: 3</p>
          </div>
          <button
            onClick={() => router.push("/checkout/page")}
            className="
            text-white 
              rounded-md 
              shadow-md 
              mt-[30px] 
              p-3
              hover:scale-110
              hover:opactity-90
              transition
            bg-green-600
        ">
            Proceed to check out
          </button>
        </div>

        <div className="flex flex-row mt-7 mobile:flex-col ">
          <div className="flex flex-col flex-1 ">
            <div className={ProductDivStyle}>
              <div className="product flex self-start">
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
                <div className="flex items-center justify-center text-4xl mt-3">
                  <b>$69</b>
                </div>
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
                <div className="flex items-center justify-center text-4xl mt-3">
                  <b>$69</b>
                </div>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="flex-[0.4] w-auto h-[40vh] border-2 border-green-600 rounded-md shadow-lg flex flex-col items-center">
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
            <div className={SummaryItemStyle + "text-3xl font-bold"}>
              <p className="ml-3">Total</p>
              <p className="mr-3"> $140</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
