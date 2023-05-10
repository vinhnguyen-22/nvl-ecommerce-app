'use client';

import BodyContainer from '@/src/components/BodyContainer';
import { AiFillHome } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';

const CheckoutPage = () => {
  const InputDivStyle =
    'block w-full border px-4 py-3 text-gray-600 text-xs rounded placeholder-gray-400 focus:border-green-600 focus:ring-0';
  return (
    <BodyContainer>
      <div className="container py-4 flex items-center gap-3">
        <div className="text-green-600 text-base">
          <AiFillHome />
        </div>
        <span className="text-sm text-gray-400">
          <BiChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>

      <div className="container gap-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 2xl:grid-cols-12 items-start">
        <div className="col-span-8 gap-2 mb-5 sm:m-2 md:m-2 mobile:m-2">
          <div className="border border-green-300 p-4 rounded bg-white shadow-lg">
            <h3 className="text-lg font-medium capitalize mb-4 ">
              Shipping Address
            </h3>
            <div className="space-y-4 ">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">First Name</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Last Name</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Phone number
                  </label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Company</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Zip code</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Country</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Address 1</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Address 2</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-300 mt-3 p-4 rounded bg-white shadow-lg">
            <h3 className="text-lg font-medium capitalize mb-4 ">
              Billing Address
            </h3>
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                className="text-red-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label className="text-gray-600 ml-3 cursor-pointer text-sm">
                Same as shipping address{' '}
              </label>
            </div>
            <div className="space-y-4 ">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">First Name</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Last Name</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Phone number
                  </label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Company</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Zip code</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Country</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Address 1</label>
                  <input type="text" className={InputDivStyle} />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Address 2</label>
                  <input type="text" className={InputDivStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 border border-green-300 p-4 rounded bg-white shadow-lg">
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
              Agree to our{' '}
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
            bg-gradient-to-r from-lime-300 to-green-500
            font-bold
            text-white
        "
          >
            Payment
          </button>
        </div>
      </div>
    </BodyContainer>
  );
};

export default CheckoutPage;
