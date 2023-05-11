import React from 'react';
import Link from 'next/link';
// import { useLanguage } from '@/hooks/useLanguage';
import { IDropDown } from '@/lib/types/dropDown';
import { useDispatch, useSelector } from 'react-redux';
import { IActiveMenuItemRootState } from '@/lib/types/activeMenuItem';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { megaMenuActions } from '@/redux/features/menu/megaMenuSlice';

interface Props {
  subMenuItems: IDropDown[] | undefined;
}
const SubMenu: React.FC<Props> = ({ subMenuItems }) => {
  // const { t, locale } = useLanguage();
  const locale = 'en';
  const ArrowDirection = locale === 'en' ? HiChevronRight : HiChevronLeft;
  const dispatch = useDispatch();

  const activeMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) =>
      state.activeMenuItem.activeMenuItemText,
  );

  return (
    <div className="flex flex-col px-6 py-5 w-full">
      <div className="flex items-center hover:text-palette-primary transition-color duration-300">
        {subMenuItems ? (
          <>
            <span
              className="block rtl:ml-4 lrt:mr-4 text-[16px] "
              onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
            >
              <Link href={`/${activeMenuItemText}`}>
                {/* {t.seeAllProduct} */}
                See all product
              </Link>
            </span>
            <ArrowDirection style={{ fontSize: '1rem', color: 'inherit' }} />
          </>
        ) : null}
      </div>
      <br />
      <div className="relative grow md:columns-[188px] xl:columns-3 xl:max-w-4xl    ">
        {subMenuItems && activeMenuItemText ? (
          <>
            {subMenuItems.map((menuTitle, index) => {
              return (
                <div className="py-3" key={`${menuTitle}-${index}`}>
                  <span
                    className="block text-sm rtl:ml-10 ltr:mr-10 font-bold px-2 ltr:border-l-4 rtl:border-r-4 border-palette-primary rounded-sm hover:text-palette-primary transition-color duration-300"
                    onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
                  >
                    <Link href={`/${activeMenuItemText}/${menuTitle.title}`}>
                      {menuTitle.title}
                    </Link>
                  </span>

                  {menuTitle.subtitles.map((subTitle, index) => {
                    return (
                      <Link
                        href={`/${activeMenuItemText}/${menuTitle.title}/${subTitle}`}
                        key={`${subTitle}-${index}`}
                        legacyBehavior
                      >
                        <a
                          className="block py-2 hover:text-palette-primary transition-color duration-200"
                          onClick={() =>
                            dispatch(megaMenuActions.closeMegaMenu())
                          }
                        >
                          {subTitle}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <p className="text-sm text-palette-mute absolute top-[45%] ltr:left-[30%] rtl:right-[30%]">
            {/* {t.noProduct} */}
            There are no products in this category yet! New products will be
            added soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
