import React from 'react';
import Image from 'next/image';
import { BsTruck } from 'react-icons/bs';
import { TbClockHour9 } from 'react-icons/tb';
import { RiRefund2Line } from 'react-icons/ri';

const Features = () => {
  const featuresDivStyles =
    'border rounded-lg px-8 lg:px-3 lg:py-6 py-4 flex gap-5 font-bold justify-center items-center bg-gradient-to-r text-white from-lime-500 via-emerald-500 to-lime-500 hover:scale-110 ease-in duration-300';
  return (
    <div>
      <div className="w-100 pt-6 ">
        <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          <div className={featuresDivStyles}>
            <div className="text-5xl">
              <BsTruck />
            </div>
            <div>
              <h4 className=" capitalize text-lg">free shipping</h4>
              <p className=" text-xs lg:text-sm">Order over $200</p>
            </div>
          </div>
          <div className={featuresDivStyles}>
            <div className="text-5xl">
              <RiRefund2Line />
            </div>
            <div>
              <h4 className="capitalize text-lg">Money returns</h4>
              <p className=" text-xs lg:text-sm">30 Days money return</p>
            </div>
          </div>

          <div className={featuresDivStyles}>
            <div className="text-5xl">
              <TbClockHour9 />
            </div>
            <div>
              <h4 className=" capitalize text-lg">24/7 Support</h4>
              <p className=" text-xs lg:text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
