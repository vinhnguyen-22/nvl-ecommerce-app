"use client";
import React from "react";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight, BiLogOut } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaAddressCard, FaBoxOpen, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import BodyContainer from "../components/BodyContainer";

const UserLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <BodyContainer>
      <div className="container py-4 flex items-center gap-3">
        <div className="text-green-600 text-base">
          <AiFillHome />
        </div>
        <span className="text-sm text-gray-400">
          <BiChevronRight />
        </span>
        <p className="text-gray-600 font-medium">User</p>
      </div>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4 bg-white rounded">
            <div className="flex-shrink-0">
              <Image
                width={50}
                height={50}
                alt="listing"
                src="/images/placeholder.png"
                className="
                rounded-full
                w-14
                h-14
                border 
                border-gray-200
                p-1
                object-cover  
                "
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello, </p>
              <h4 className="text-gray-800 font-medium">NVL</h4>
            </div>
          </div>
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
              <div className="relative text-green-600 block font-bold capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <FaAddressCard />
                </span>
                Manage account
              </div>
              <div
                onClick={() => router.push("/user/detail")}
                className="relative hover:text-green-600 block capitalize transition cursor-pointer">
                Profile info
              </div>
              <div
                onClick={() => router.push("/user")}
                className="relative hover:text-green-600 block capitalize transition cursor-pointer">
                Manage address
              </div>
              <div className="relative hover:text-green-600 block capitalize transition">
                Change password
              </div>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <div
                onClick={() => router.push("/user/order")}
                className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer">
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
                onClick={() => router.push("/user/payment")}
                className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer">
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
                onClick={() => router.push("/user/wishlist")}
                className="relative hover:text-green-600 block font-bold capitalize transition cursor-pointer">
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
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </BodyContainer>
  );
};

export default UserLayout;
