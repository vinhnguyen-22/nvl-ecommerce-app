"user client";
import React from "react";
import Image from "next/image";

const UserProfile = ({ toggle }: { toggle: any }) => {
  return (
    <div
      className={`flex gap-5 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-white rounded-xl p-2"
      }`}>
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <Image
          width={50}
          height={50}
          alt="listing"
          src="/images/placeholder.png"
          className="
                rounded-full
                w-14
                h-14
                border 
                border-gray-200
                p-1
                object-cover  
                "
        />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl">Abee Zarar</h3>
        <span className="text-[0.75rem] opacity-60">abee2002@gmail.com</span>
      </div>
    </div>
  );
};

export default UserProfile;
