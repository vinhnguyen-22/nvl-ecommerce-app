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
import { ImSearch } from "react-icons/im";

import ReactStars from "react-stars";

const ProductDetail = () => {
  return (
    <Container>
      <div className="container grid grid-cols-2 gap-6 mt-5">
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
          <h2 className="text-3xl font-medium uppercase mb-2">Dooge goe geo</h2>
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
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none bg-green-600 text-white">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                5
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none bg-green-600 text-white">
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
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-xl">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 mt-4">
          Related products
        </h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="relative">
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
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-gray-800 transition">
                  <div>
                    <ImSearch />
                  </div>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-gray-800 transition">
                  <div>
                    <AiFillHeart />
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4">
              <a href="">
                <h4 className="uppercase font medium text-xl mb-2 text-gray-800 hover:text-green-300 transition">
                  Name
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-green-600 font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
              <button className="block w-full py-1 text-center text-white bg-green-600 border-green-600 rounded-b hover:bg-transparent hover:text-green-600 transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
