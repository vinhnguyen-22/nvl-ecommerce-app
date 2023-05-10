import React from 'react'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className="md:flex md:flex-row mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center mt-10">
        <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left md:mt-2">
          Some Catchy Title Here
        </h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Our brand tagline goes here.
        </p>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Our brand motto goes here.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5 hover:scale-110 ease-in duration-300"
        >
          Shop Now
        </a>
      </div>
      <div className="md:w-3/5 mt-10">
        <Image
          width={1800}
          height={1600}
          alt="listing"
          src="/images/hero.png"
          className="rounded-lg shadow-lg hover:scale-110 ease-in duration-300 "
        />
      </div>
    </div>
  )
}

export default Slider
