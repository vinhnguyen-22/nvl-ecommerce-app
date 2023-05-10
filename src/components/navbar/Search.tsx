"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        ">
      <div
        className="
                flex
                flex-row
                items-center
                justify-between
            ">
        <div
          className="
                text-sm
                font-semibold
                px-6
                ">
          Home
        </div>
        <div
          className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                text-center
                ">
          Category
        </div>
        <div
          className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                text-center
                ">
          Support
        </div>
        <div
          className="
                text-sm
                pl-6
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
                ">
          <div className="hidden sm:block">Contact</div>
          <div
            className="
                    p-2
                    bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500
                    rounded-full
                    text-white
                    ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
