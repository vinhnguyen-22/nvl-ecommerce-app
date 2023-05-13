'use client';

import Image from 'next/image';
import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';

const PaymentMethod = () => {
  const paymentmethodstyle =
    'grid px-4 shadow-lg rounded-lg items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 bg-palette-card mt-2';
  return (
    <div className="w-full items-start gap-6 pt-4 pb-16 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-white mb-2">
          <div>Issuer</div>
          <div>Name on card</div>
          <div>Card number</div>
          <div>Expiration date</div>
          <div> </div>
        </div>

        <div className={paymentmethodstyle}>
          <div className="text-gray-100 mb-2 block font-bold">
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
          <div className="text-gray-100 mb-2 rounded-lg font-medium px-1">
            Name
          </div>
          <div className="text-gray-100 mb-2 block font-medium">
            **** **** **** **** 6969
          </div>
          <div className="text-gray-100 mb-2 block font-medium">04/20</div>
          <div className="flex ">
            <div className="text-gray-100 text-2xl mr-2 mb-2 block">
              <AiTwotoneEdit />{' '}
            </div>
            <div className="text-red-600 text-2xl mr-2 mb-2 block">
              <AiFillDelete />{' '}
            </div>
          </div>
        </div>

        <div className={paymentmethodstyle}>
          <div className="text-gray-100 mb-2 block font-bold">
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
          <div className="text-gray-100 mb-2 rounded-lg font-medium px-1">
            Name
          </div>
          <div className="text-gray-100 mb-2 block font-medium">
            **** **** **** **** 6969
          </div>
          <div className="text-gray-100 mb-2 block font-medium">04/20</div>
          <div className="flex ">
            <div className="text-gray-100 text-2xl mr-2 mb-2 block">
              <AiTwotoneEdit />
            </div>
            <div className="text-red-600 text-2xl mr-2 mb-2 block">
              <AiFillDelete />
            </div>
          </div>
        </div>

        <div className={paymentmethodstyle}>
          <div className="text-gray-100 mb-2 block font-bold">
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
          <div className="text-gray-100 mb-2 rounded-lg font-medium px-1">
            Name
          </div>
          <div className="text-gray-100 mb-2 block font-medium">
            **** **** **** **** 6969
          </div>
          <div className="text-gray-100 mb-2 block font-medium">04/20</div>
          <div className="flex ">
            <div className="text-gray-100 text-2xl mr-2 mb-2 block">
              <AiTwotoneEdit />{' '}
            </div>
            <div className="text-red-600 text-2xl mr-2 mb-2 block">
              <AiFillDelete />{' '}
            </div>
          </div>
        </div>
    </div>
  );
};

export default PaymentMethod;
