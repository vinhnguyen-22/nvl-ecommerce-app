'use client'

import React from 'react'
import Image from 'next/image'

const NewsLetter = () => {
  return (
    <div className="rounded-lg shadow-lg my-20 flex flex-row">
      <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <Image
          width={1800}
          height={1600}
          alt="listing"
          src="/images/hero.png"
          className="
                  rounded-lg
                  shadow-lg
                  hover:scale-110
                  ease-in
                  duration-300
                  "
        />
      </div>
      <div className="flex lg:w-3/5 w-full bg-gradient-to-r from-purple-900 to-black lg:from-transparent lg:via-purple-900 lg:to-black rounded-lg text-gray-100 p-12 justify-end">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-extrabold mb-4">
            Subscribe to get our offers first
          </h3>
          <p className="mb-4 leading-relaxed">
            Want to hear from us when we have new offers? Sign up for our
            newsletter and we'll email you every time we have new sale offers.
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
            />
            <button
              type="submit"
              className="bg-red-600 py-3 rounded-lg w-full hover:scale-110 ease-in duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
