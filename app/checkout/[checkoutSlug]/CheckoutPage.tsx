"use client";

import Container from "@/app/components/Container";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const CheckoutPage = () => {
  const InputDivStyle =
    "block w-full border px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-green-600 focus:ring-0";
  return (
    <Container>
      <div className="container py-4 flex items-center gap-3">
        <div className="text-green-600 text-base">
          <AiFillHome />
        </div>
        <span className="text-sm text-gray-400">
          <BiChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>

      <div className="container gap-6 grid grid-cols-12 items-start pb-16 pt-4">
        <div className="col-span-8 border border-green-300 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4 ">Checkout</h3>
          <div className="space-y-4 ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  First Name
                  <span className="text-red-800">*</span>
                </label>
                <input type="text" className={InputDivStyle} />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Last Name
                  <span className="text-red-800">*</span>
                </label>
                <input type="text" className={InputDivStyle} />
              </div>
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Company Name</label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Country/Region</label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Street Address</label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Town/City</label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Zip code
                <span className="text-red-800">*</span>
              </label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Phone number
                <span className="text-red-800">*</span>
              </label>
              <input type="text" className={InputDivStyle} />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Email
                <span className="text-red-800">*</span>
              </label>
              <input type="text" className={InputDivStyle} />
            </div>
          </div>
        </div>

        <div className="col-span-4 border border-green-300 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order Summary
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">Name</h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-600">x3</p>
              <p className="text-gray-800 font-medium">$420</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">Name</h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-600">x3</p>
              <p className="text-gray-800 font-medium">$420</p>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p>Subtotal</p>
            <p>$420</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p className="font-bold">Total</p>
            <p className="font-bold">$420</p>
          </div>
          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              className="text-red-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label className="text-gray-600 ml-3 cursor-pointer text-sm">
              Agree to our{" "}
              <a href="" className="text-red-500">
                terms & conditions
              </a>
            </label>
          </div>
          <button
            className="
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            px-4
            py-3
            w-full
            bg-green-600
            text-white
        ">
            Check out
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
