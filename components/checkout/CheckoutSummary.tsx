import React from 'react';

const CheckoutSummary = () => {
  return (
    <div className="col-span-4 p-4 rounded bg-palette-card shadow-lg">
      <h4 className="text-gray-900 text-lg mb-4 font-medium uppercase">
        Order Summary
      </h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-900 font-medium">Name</h5>
            <p className="text-sm text-gray-900">Size: M</p>
          </div>
          <p className="text-gray-900">x3</p>
          <p className="text-gray-900 font-medium">$420</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-900 font-medium">Name</h5>
            <p className="text-sm text-gray-900">Size: M</p>
          </div>
          <p className="text-gray-900">x3</p>
          <p className="text-gray-900 font-medium">$420</p>
        </div>
      </div>
      <div className="flex justify-between border-b border-gray-900 text-gray-900 font-medium py-3 uppercase">
        <p>Subtotal</p>
        <p>$420</p>
      </div>
      <div className="flex justify-between border-b border-gray-900 text-gray-900 font-medium py-3 uppercase">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between border-b border-gray-900 text-gray-900 font-medium py-3 uppercase">
        <p className="font-bold">Total</p>
        <p className="font-bold">$420</p>
      </div>
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          className="text-red-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label className="text-gray-900 ml-3 cursor-pointer text-sm">
          Agree to our{' '}
          <a href="" className="text-red-600">
            terms & conditions
          </a>
        </label>
      </div>
      <button
        className="
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        px-4
        py-3
        w-full
        bg-gradient-to-r from-lime-300 to-green-500
        font-bold
        text-white
    "
      >
        Payment
      </button>
    </div>
  );
};

export default CheckoutSummary;
