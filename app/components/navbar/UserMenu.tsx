"use client";
import { AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                ">
          NVL Your home
        </div>
        <div
          onClick={() => router.push("/cart/page")}
          className="
                relative
                hidden
                md:block
                text-3xl
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                text-green-600
                
                ">
          <span
            className="
            absolute
            right-0
            -top-1
            w-5
            h-5
            flex
            items-center
            justify-center
            text-[13px]
            bg-red-600
            rounded-full
            place-items-center
            text-white
          ">
            0
          </span>
          <FaShoppingCart />
        </div>
        <div
          onClick={() => {}}
          className="
                relative
                hidden
                md:block
                text-3xl
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                text-green-600
                
                ">
          <span
            className="
          absolute
          right-0
          -top-1
          w-5
          h-5
          flex
          items-center
          justify-center
          text-[13px]
          bg-red-600
          rounded-full
          place-items-center
          text-white
          ">
            0
          </span>
          <AiFillHeart />
        </div>
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-`
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                ">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
        absolute
        rounded-xl
        shadow-md
        w-[40px]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        ">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
