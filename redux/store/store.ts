import { configureStore } from '@reduxjs/toolkit';
import settingBoxReducer from '../features/box/settingBoxSlice';
import cartSliceReducer from '../features/cart/cartSlice';
import cartUiReducer from '../features/cart/cartUISlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import activeMenuItemReducer from '../features/menu/activeMenuItemSlice';
import megaMenuReducer from '../features/menu/megaMenuSlice';
import sideNavBarReducer from '../features/menu/sideNavBarSlice';
import newestProductReducer from '../features/product/newestProductSlice';
import SortedProductsListReducer from '../features/product/sortedProductListSlice';
import specialOfferProductsReducer from '../features/product/specialOfferProductsSlice';
import userInfoReducer from '../features/user/userSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      specialOfferProductsList: specialOfferProductsReducer,
      newestProductsList: newestProductReducer,
      sortedProductsList: SortedProductsListReducer,
      cartUi: cartUiReducer,
      cart: cartSliceReducer,
      userInfo: userInfoReducer,
      sideNavBar: sideNavBarReducer,
      megaMenu: megaMenuReducer,
      activeMenuItem: activeMenuItemReducer,
      settingBox: settingBoxReducer,
      favorite: favoriteReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
