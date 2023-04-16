import { configureStore } from '@reduxjs/toolkit';
import cartIconSliceWithAction from './cartIconSliceWithAction';
import cartVisibilitySlice from './changeShoppingCartVisibilitySlice.js'
const store = configureStore({
  reducer: {

    cartIconSliceWithAction: cartIconSliceWithAction.reducer,
    cartVisibility: cartVisibilitySlice.reducer
  }
})
export default store;