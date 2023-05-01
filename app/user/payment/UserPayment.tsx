"use client";

import Image from "next/image";
import {
  AiFillDelete,
  AiOutlineArrowRight,
  AiTwotoneEdit,
} from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

const UserPaymentPage = () => {
  const InputDivStyle =
    "block w-full border px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-green-600 focus:ring-0";
  return (
    <div>
      <div className="container grid grid-cols-10 items-start gap-6 pt-4 pb-16">
        <div className="col-span-10 shadow rounded px-6 pt-5 pb-7">
          <h4 className="flex text-lg font-bold capitalize mb-4">
            <div className="text-red-600 text-xl mr-3 -left-8 top-0 ">
              <BsFillCreditCard2BackFill />
            </div>
            My payment methods
          </h4>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <div className="text-gray-600 mb-2 block">Issuer</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block">Name on card</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block">Card number</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block">Expiration date</div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block"> </div>
            </div>
          </div>

          <div className="grid px-4 py-3 shadow-lg border rounded-lg items-center grid-cols-5 gap-4 bg-white mt-2">
            <div>
              <div className="text-gray-600 mb-2 block font-bold">
                <Image
                  width={50}
                  height={50}
                  alt="listing"
                  src="/images/visa.jpg"
                  className="
                w-14
                h-14
                p-1
                object-cover  
                "
                />
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2  rounded-lg font-medium px-1">
                Name
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">
                **** **** **** **** 6969
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">04/20</div>
            </div>
            <div className="flex ">
              <div className="text-gray-600 text-2xl mr-2 mb-2 block">
                <AiTwotoneEdit />{" "}
              </div>
              <div className="text-red-600 text-2xl mr-2 mb-2 block">
                <AiFillDelete />{" "}
              </div>
            </div>
          </div>

          <div className="grid px-4 py-3 shadow-lg border rounded-lg items-center grid-cols-5 gap-4 bg-white mt-2">
            <div>
              <div className="text-gray-600 mb-2 block font-bold">
                <Image
                  width={50}
                  height={50}
                  alt="listing"
                  src="/images/amex.png"
                  className="
                w-14
                h-14
                p-1
                object-cover  
                "
                />
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2  rounded-lg font-medium px-1">
                Name
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">
                **** **** **** **** 6969
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">04/20</div>
            </div>
            <div className="flex ">
              <div className="text-gray-600 text-2xl mr-2 mb-2 block">
                <AiTwotoneEdit />{" "}
              </div>
              <div className="text-red-600 text-2xl mr-2 mb-2 block">
                <AiFillDelete />{" "}
              </div>
            </div>
          </div>

          <div className="grid px-4 py-3 shadow-lg border rounded-lg items-center grid-cols-5 gap-4 bg-white mt-2">
            <div>
              <div className="text-gray-600 mb-2 block font-bold">
                <Image
                  width={50}
                  height={50}
                  alt="listing"
                  src="/images/mastercard.png"
                  className="
                w-14
                h-14
                p-1
                object-cover  
                "
                />
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2  rounded-lg font-medium px-1">
                Name
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">
                **** **** **** **** 6969
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2 block font-medium">04/20</div>
            </div>
            <div className="flex ">
              <div className="text-gray-600 text-2xl mr-2 mb-2 block">
                <AiTwotoneEdit />{" "}
              </div>
              <div className="text-red-600 text-2xl mr-2 mb-2 block">
                <AiFillDelete />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentPage;
