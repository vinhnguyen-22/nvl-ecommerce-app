import React from "react";

function Counter() {
  return (
    <div>
      <div className="counter flex items-center text-xl justify-start font-bold">
        Quantity
        <div className="ml-5 flex">
          <div className="bg-gradient-to-r from-red-500 to-red-100 text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
            -
          </div>
          <div className="w-8 flex items-center justify-center bg-gradient-to-r from-red-100 via-white to-green-100 ">
            1
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-600 text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
            +
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Counter;
