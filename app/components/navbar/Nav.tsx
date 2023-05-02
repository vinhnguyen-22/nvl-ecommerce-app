"use client";

import { useState } from "react";
import Container from "../Container";
import { GoThreeBars } from "react-icons/go";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <div className="container mx-auto p-2 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500">
      <div className="md:flex md:flex-row  text-center text-sm sm:text-base">
        <div className="flex flex-row justify-center cursor-pointer">
          <div className="font-extrabold text-transparent text-3xl text-white ">
            <GoThreeBars />
          </div>
          <h1 className="text-3xl text-white ml-2 font-bold hover:text-purple-600">
            Catalog
          </h1>
        </div>
        <div className="mt-2 font-bold">
          <a
            href="#"
            className="text-white hover:text-purple-600 p-4 px-3 sm:px-4">
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-600 p-4 px-3 sm:px-4">
            Shop
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-600 p-4 px-3 sm:px-4">
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-600 p-4 px-3 sm:px-4">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
