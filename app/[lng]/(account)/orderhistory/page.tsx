'use client';

import { AiOutlineArrowRight } from 'react-icons/ai';

const UserOrderPage = () => {
  const InputDivStyle =
    'block w-full border px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-green-600 focus:ring-0';
  return (
    <div className="w-full items-start gap-6 pb-16">
      <div className="shadow rounded px-6 pt-2 pb-7 items-center">
        <div className="grid grid-cols-5 gap-4">
          <div className="text-gray-600 mb-2 block">Order #</div>
          <div className="text-gray-600 mb-2 block">Status</div>
          <div className="text-gray-600 mb-2 block">Date purchased</div>
          <div className="text-gray-600 mb-2 block">Total</div>
          <div className="text-gray-600 mb-2 block"> </div>
        </div>

        <div className="grid grid-cols-5 px-4 py-3 shadow-lg border rounded-lg items-center  gap-4 bg-white mt-2">
          <div className="text-gray-600 mb-2 block font-bold">123123</div>
          <div className="text-white mb-2 border rounded-lg font-medium bg-gray-500 px-1">
            Pending
          </div>
          <div className="text-gray-600 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-600 mb-2 block font-medium">$69</div>
          <div className="text-gray-600 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>

        <div className="grid grid-cols-5 px-4 py-3 shadow-lg border rounded-lg items-center  gap-4 bg-white mt-2">
          <div className="text-gray-600 mb-2 block font-bold">123123</div>
          <div className="text-red-600 mb-2 border rounded-lg font-medium bg-red-200 px-1">
            Cancelled
          </div>
          <div className="text-gray-600 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-600 mb-2 block font-medium">$69</div>
          <div className="text-gray-600 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>

        <div className="grid grid-cols-5 px-4 py-3 shadow-lg border rounded-lg items-center  gap-4 bg-white mt-2">
          <div className="text-gray-600 mb-2 block font-bold">123123</div>
          <div className="text-green-600 mb-2 border rounded-lg font-medium bg-green-200 px-1">
            Delivered
          </div>
          <div className="text-gray-600 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-600 mb-2 block font-medium">$69</div>
          <div className="text-gray-600 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderPage;
