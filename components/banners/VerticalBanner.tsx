import React from 'react'
import { TiTick } from 'react-icons/ti'

const VerticalBanner = () => {
  return (
    <div className=" bg-white p-8 text-gray-800 rounded-xl h-full border-2">
      <h2 className="mb-6 max-w-lg text-3xl font-bold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
        PROJECT NVL
      </h2>
      <ul className="mb-8 flex max-w-xl flex-wrap gap-4 ">
        <li className="text-green-600 flex space-x-2">
          <TiTick />
          <p className="text-gray-800">A new feature for you</p>
        </li>
        <li className="text-green-600 flex space-x-2">
          <TiTick />
          <p className="text-gray-800">Feature Enhancements</p>
        </li>
        <li className="text-green-600 flex space-x-2">
          <TiTick />
          <p className="text-gray-800">Site Speedup</p>
        </li>
        <li className="text-green-600 flex space-x-2">
          <TiTick />
          <p className="text-gray-800">More Components</p>
        </li>
        <li className="text-green-600 flex space-x-2">
          <TiTick />
          <p className="text-gray-800">Further Enhancements to the Dashboard</p>
        </li>
      </ul>
      <button className="focus:outline-4 rounded-xl bg-emerald-400 px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-emerald-500">
        Try the new version
      </button>
    </div>
  )
}

export default VerticalBanner
