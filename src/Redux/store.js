import { configureStore } from '@reduxjs/toolkit';
import cartVisibilitySlice from './cartVisibilitySlice'
import shoppingCartSlice from './shoppingCartSlice'
import searchProductSlice from "./searchProductSlice"

const store = configureStore({
  reducer: {
    cartVisibilitySlice: cartVisibilitySlice.reducer,
    shoppingCartSlice:shoppingCartSlice.reducer,
    searchProductSlice:searchProductSlice.reducer
  }
})
export default store;