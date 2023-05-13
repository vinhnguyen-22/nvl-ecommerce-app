'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import router from 'next/router';
import { BiLogOut } from 'react-icons/bi';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { FaAddressCard, FaBoxOpen, FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const sidebartitlestyle =
    'relative hover:text-green-600 block font-bold capitalize transition cursor-pointer text-white';
  const sidebarstyle =
    'relative hover:text-green-600 block capitalize transition cursor-pointer text-gray-200';
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-palette-card shadow rounded p-4 divide-y divide-gray-200 space-y-4 ">
      <div className="md:hidden">
        <button
          className="text-white hover:text-green-600 focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="space-y-1 pl-8">
        <div className={sidebartitlestyle}>
          <span className="absolute -left-8 top-0 text-base">
            <FaAddressCard />
          </span>
          Manage account
        </div>
        <div onClick={() => router.push('/address')} className={sidebarstyle}>
          Profile info
        </div>
        <div onClick={() => router.push('/address')} className={sidebarstyle}>
          Manage address
        </div>
        <div className={sidebarstyle}>Change password</div>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/orderhistory')}
          className={sidebartitlestyle}
        >
          <span className="absolute -left-8 top-0 text-base">
            <FaBoxOpen />
          </span>
          My order history
        </div>
        <div className={sidebarstyle}>My Returns</div>
        <div className={sidebarstyle}>My Cancellations</div>
        <div className={sidebarstyle}>My Reviews</div>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/paymentmethod')}
          className={sidebartitlestyle}
        >
          <span className="absolute -left-8 top-0 text-base">
            <BsFillCreditCard2BackFill />
          </span>
          Payment Methods
        </div>
        <div className={sidebarstyle}>Voucher</div>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <div
          onClick={() => router.push('/wishlist')}
          className={sidebartitlestyle}
        >
          <span className="absolute -left-8 top-0 text-base">
            <FaHeart />
          </span>
          My Wishlist
        </div>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <div className={sidebartitlestyle}>
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
