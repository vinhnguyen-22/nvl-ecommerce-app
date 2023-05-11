import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { useLanguage } from '@/hooks/useLanguage';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import jsCookie from 'js-cookie';
import { userInfoActions } from '@/redux/features/user/userSlice';

interface Props {
  onClose: () => void;
}
const UserAccountBox: React.FC<Props> = ({ onClose }) => {
  // const { t } = useLanguage();
  const dispatch = useDispatch();
  function onLogoutClickHandler() {
    dispatch(userInfoActions.userLogout());
    jsCookie.remove('userInfo');
    onClose();
  }
  return (
    <div>
      <ul>
        <li className="my-1 py-1" onClick={onClose}>
          <Link
            href={'/favorite'}
            className="flex items-center hover:text-palette-primary"
          >
            <AiOutlineHeart
              style={{
                fontSize: '1.2rem',
                width: '1.8rem',
              }}
            />
            <span className="font-normal rtl:mr-1 ltr:ml-1">Favorites</span>
          </Link>
        </li>
        <li className="my-1 py-1" onClick={onLogoutClickHandler}>
          <Link
            className="flex items-center hover:text-palette-primary"
            href={`/`}
          >
            <IoLogOutOutline
              style={{
                fontSize: '1.5rem',
                width: '1.8rem',
              }}
            />
            <span className="font-normal rtl:mr-1 ltr:ml-1">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountBox;
