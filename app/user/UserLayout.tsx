'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { BiChevronRight, BiLogOut } from 'react-icons/bi'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { FaAddressCard, FaBoxOpen, FaHeart } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import BodyContainer from '../components/BodyContainer'
import Sidebar from '../components/sidebar/Sidebar'

const UserLayout = ({ children }: any) => {
  const router = useRouter()
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
      <div className="flex items-end justify-end px-4 pb-6">
        <button className="relative justify-center items-center marker:z-30 lg:hidden peer h-10 w-10 rounded-full bg-gradient-to-r text-white from-zinc-500 via-gray-500 to-zinc-500 hover:scale-110 ease-in duration-300">
          <span className="text-white absolute justify-center items-center">
            <AiOutlineMenu />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3 lg:left-0">
          <Sidebar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </BodyContainer>
  )
}

export default UserLayout
