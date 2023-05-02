import { configureStore } from '@reduxjs/toolkit';
import cartIconSliceWithAction from './cartIconSliceWithAction';
import cartVisibilitySlice from './changeShoppingCartVisibilitySlice.js'
import productContentSlice from './productContentSlice'
const store = configureStore({
  reducer: {

    cartIconSliceWithAction: cartIconSliceWithAction.reducer,
    cartVisibility: cartVisibilitySlice.reducer,
    productContent:productContentSlice.reducer,
  }
})
export default store;