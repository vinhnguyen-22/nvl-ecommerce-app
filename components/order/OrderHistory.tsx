'use client';

import { AiOutlineArrowRight } from 'react-icons/ai';

const UserOrderHistory = () => {
  const orderstyle =
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-4 py-3 shadow-lg rounded-lg items-center gap-4 bg-palette-card mt-2';
  return (
    <div className="w-full rounded-lg items-start gap-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-white mb-2">
          <div>Order #</div>
          <div>Status</div>
          <div>Date purchased</div>
          <div>Total</div>
          <div> </div>
        </div>

        <div className={orderstyle}>
          <div className="text-gray-100 mb-2 block font-bold">123123</div>
          <div className="text-white mb-2 rounded-lg font-medium bg-gray-500 px-1">
            Pending
          </div>
          <div className="text-gray-100 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-100 mb-2 block font-medium">$69</div>
          <div className="text-gray-100 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>

        <div className={orderstyle}>
          <div className="text-gray-100 mb-2 block font-bold">123123</div>
          <div className="text-red-600 mb-2  rounded-lg font-medium bg-red-200 px-1">
            Cancelled
          </div>
          <div className="text-gray-100 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-100 mb-2 block font-medium">$69</div>
          <div className="text-gray-100 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>

        <div className={orderstyle}>
          <div className="text-gray-100 mb-2 block font-bold">123123</div>
          <div className="text-green-100 mb-2 rounded-lg font-medium bg-green-200 px-1">
            Delivered
          </div>
          <div className="text-gray-100 mb-2 block font-medium">01/01/1969</div>
          <div className="text-gray-100 mb-2 block font-medium">$69</div>
          <div className="text-gray-100 mb-2 block">
            <AiOutlineArrowRight />{' '}
          </div>
        </div>
    </div>
  );
};

export default UserOrderHistory;
