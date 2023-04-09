"use client";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaShoppingCart,
  FaTiktok,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import ReactStars from "react-stars";

const ProductDetail = () => {
  return (
    <ClientOnly>
      <Container>
        <div className="container grid grid-cols-2 gap-6">
          <div>
            <Image
              width={800}
              height={200}
              alt=""
              src="/images/placeholder.png"
            />
            <div className="grid grid-cols-5 gap-4 mt-4">
              <Image
                width={200}
                height={100}
                className="w-full cursor-pointer border border-primary"
                src="/images/1.png"
                alt=""
              />
              <Image
                width={200}
                height={100}
                className="w-full cursor-pointer border border-primary"
                src="/images/2.png"
                alt=""
              />
              <Image
                width={200}
                height={100}
                className="w-full cursor-pointer border border-primary"
                src="/images/3.png"
                alt=""
              />
              <Image
                width={200}
                height={100}
                className="w-full cursor-pointer border border-primary"
                src="/images/4.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium uppercase mb-2">
              Dooge goe geo
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-400">
                <ReactStars count={5} size={24} color2={"#ffd700"} />
              </div>
              <div className="text-xs text-gray-500 ml-3">(150 reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold space-x-2">
                <span>Availabity:</span>
                <span className="text-green-600"> In stock</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand:</span>
                <span className="text-gray-600">Doge</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category:</span>
                <span className="text-gray-600">Meme</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">SKU:</span>
                <span className="text-gray-600">6969</span>
              </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
              <p className="text-2xl text-red-500 font-semibold">$69.00</p>
              <p className="text-base text-gray-400 line-through">$69.00</p>
            </div>
            <p className="mt-4 text-gray-600  ">
              lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
            </p>

            <div className="pt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input type="radio" name="color" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input type="radio" name="color" />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  -
                </div>
                <div className="h-8 w-8 text-base flex items-center justify-center">
                  5
                </div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  +
                </div>
              </div>
            </div>

            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <button
                className="
                bg-green-600
                border
                border-green-600
                text-white
                px-8
                py-2
                font-medium
                rounded
                uppercase
                flex
                items-center
                gap-2
                hover:bg-transparent
                hover:text-green-600
                transition
                ">
                {" "}
                <FaShoppingCart /> Add to cart
              </button>

              <button
                className="
                border
                border-gray-300
                text-gray-600
                px-8
                py-2
                font-medium
                rounded
                uppercase
                flex
                items-center
                gap-2
                hover:text-green-600
                transition
                ">
                {" "}
                <AiFillHeart /> Add to favorite
              </button>
            </div>

            <div className="flex gap-3 mt-4">
              <p className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                <FaFacebookSquare />
              </p>
              <p className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                <FaInstagramSquare />
              </p>
              <p className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                <FaTiktok />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default ProductDetail;
