import { configureStore } from '@reduxjs/toolkit';
import cartVisibilitySlice from './cartVisibilitySlice'
import shoppingCartSlice from './shoppingCartSlice'


const store = configureStore({
  reducer: {
    cartVisibilitySlice: cartVisibilitySlice.reducer,
    shoppingCartSlice:shoppingCartSlice.reducer
  }
})
export default store;