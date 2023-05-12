import React from 'react';
// import { useLanguage } from '@/hooks/useLanguage';
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginBtn = () => {
  // const { t } = useLanguage();

  const { data: session } = useSession();
  console.log(session);
  return !session?.user ? (
    <div onClick={() => signIn()}>
      <div className="hidden md:flex items-center rounded-lg  py-1 px-2 ltr:mr-3 rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
        <HiOutlineLogin style={{ fontSize: '1.6rem' }} />
        <p className="ltr:ml-2 rtl:mr-2 text-xs">Login | Sign Up</p>
      </div>
      <div className="md:hidden rtl:ml-3 rtl:mr-1 ltr:mr-3 ltr:ml-1">
        <HiOutlineLogin style={{ fontSize: '1.6rem' }} />
      </div>
    </div>
  ) : (
    <div onClick={() => signOut()}>
      <div className="hidden md:flex items-center rounded-lg  py-1 px-2 ltr:mr-3 rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
        <HiOutlineLogout style={{ fontSize: '1.6rem' }} />
        <p className="ltr:ml-2 rtl:mr-2 text-xs">logout</p>
      </div>
    </div>
  );
};

export default LoginBtn;
