import React from 'react'
import Image from 'next/image'
import { BsTruck } from 'react-icons/bs'
import { Tb24Hours, TbClockHour9 } from 'react-icons/tb'
import { RiRefund2Line, RiSecurePaymentFill } from 'react-icons/ri'
import { IoIosSpeedometer } from 'react-icons/io'

const Features = () => {
  const featuresDivStyles =
    'border rounded-lg px-8 lg:px-3 lg:py-4 py-3 flex gap-5 font-bold justify-center items-center bg-gradient-to-r text-white from-lime-500 via-emerald-500 to-lime-500 hover:scale-110 ease-in duration-300'
  return (
    <div>
      <div className="w-100 pt-6 ">
        <div className="lg:w-10/12 grid md:grid-cols-5 gap-3 lg:gap-6 mx-auto justify-center">
          <div className={featuresDivStyles}>
            <div className="text-2xl">
              <BsTruck />
            </div>
            <div>
              <h4 className=" capitalize text-md">free shipping</h4>
              <p className=" text-xs ">Order over $200</p>
            </div>
          </div>

          <div className={featuresDivStyles}>
            <div className="text-2xl">
              <RiRefund2Line />
            </div>
            <div>
              <h4 className="capitalize text-md">Money returns</h4>
              <p className=" text-xs ">30 Days money return</p>
            </div>
          </div>

          <div className={featuresDivStyles}>
            <div className="text-2xl">
              <Tb24Hours />
            </div>
            <div>
              <h4 className=" capitalize text-md">24/7 Support</h4>
              <p className=" text-xs ">Customer support</p>
            </div>
          </div>

          <div className={featuresDivStyles}>
            <div className="text-2xl">
              <RiSecurePaymentFill />
            </div>
            <div>
              <h4 className=" capitalize text-md">Payment</h4>
              <p className=" text-xs ">Secure system</p>
            </div>
          </div>

          <div className={featuresDivStyles}>
            <div className="text-2xl">
              <IoIosSpeedometer />
            </div>
            <div>
              <h4 className=" capitalize text-md">Speed</h4>
              <p className=" text-xs ">Fast and ontime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
