'use client';
import React from 'react';
import Image from 'next/image';
import router from 'next/router';
import { BiLogOut } from 'react-icons/bi';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { FaAddressCard, FaBoxOpen, FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className=" bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <div className="space-y-1 pl-8">
        <div className="relative text-green-600 block font-bold capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <FaAddressCard />
          </span>
          Manage account
        </div>
        <div
          onClick={() => router.push('/user/detail')}
          className="relative hover:text-green-600 block capitalize transition cursor-pointer"
        >
          Profile info
        </div>
        <div
          onClick={() => router.push('/user')}
          className="relative hover:text-green-600 block capitalize transition cursor-pointer"
        >
          Manage address
        </div>
        <div className="relative hover:text-green-600 block capitalize transition">
          Change password
        </div>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/user/order')}
          className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer"
        >
          <span className="absolute -left-8 top-0 text-base">
            <FaBoxOpen />
          </span>
          My order history
        </div>
        <div className="relative hover:text-green-600 block capitalize transition">
          My Returns
        </div>
        <div className="relative hover:text-green-600 block capitalize transition">
          My Cancellations
        </div>
        <div className="relative hover:text-green-600 block capitalize transition">
          My Reviews
        </div>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/user/payment')}
          className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer"
        >
          <span className="absolute -left-8 top-0 text-base">
            <BsFillCreditCard2BackFill />
          </span>
          Payment Methods
        </div>
        <div className="relative hover:text-green-600 block capitalize transition">
          Voucher
        </div>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/user/wishlist')}
          className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer"
        >
          <span className="absolute -left-8 top-0 text-base">
            <FaHeart />
          </span>
          My Wishlist
        </div>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <div className="relative hover:text-green-600 block font-bold capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <BiLogOut />
          </span>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
