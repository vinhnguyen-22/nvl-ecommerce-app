'use client';

import { AiOutlineClose } from 'react-icons/ai';

const HeartButton = () => {
  return (
    <div
      className="
        relative
        hove:opacity-80
        transition
        cursor-pointer
        "
    >
      <AiOutlineClose
        size={28}
        className="
                fill-red-600
                absolute
                -top-[2px]
                -right-[2px]
                "
      />
      <AiOutlineClose size={24} className="fill-rose-500" />
    </div>
  );
};

export default HeartButton;
