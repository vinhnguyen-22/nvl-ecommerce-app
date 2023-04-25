"use client";

import { useState } from "react";
import Container from "../Container";
import { GoThreeBars } from "react-icons/go";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-gray-700 border rounded-lg">
      <div className="container flex ">
        <div
          className="
          rounded-lg
          px-8
          py-4
          bg-green-600
          flex
          -items-center 
          cursor-pointer
        ">
          <span className="text-white">
            <GoThreeBars />
          </span>
          <span
            className="
          capitalize 
          ml-2
          text-white
          ">
            Catalog
          </span>
        </div>

        <div
          className="
        flex
        items-center
        justify-between
        flex-grow
        pl-12
        ">
          <div
            className="
          flex
          items-center
          space-x-6
          capitalize
          ">
            <a
              href="#"
              className="
              text-gray-200
              hover:text-white
              ">
              Home
            </a>
            <a
              href="#"
              className="
              text-gray-200
              hover:text-white
              ">
              Shop
            </a>
            <a
              href="#"
              className="
              text-gray-200
              hover:text-white
              ">
              About us
            </a>
            <a
              href="#"
              className="
              text-gray-200
              hover:text-white
              ">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
