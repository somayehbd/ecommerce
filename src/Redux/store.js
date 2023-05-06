import { configureStore } from '@reduxjs/toolkit';
import cartIconSliceWithAction from './cartIconSliceWithAction';
import cartVisibilitySlice from './changeShoppingCartVisibilitySlice.js'
import shoppingCartSlice from './shoppingCartSlice'


const store = configureStore({
  reducer: {

    cartIconSliceWithAction: cartIconSliceWithAction.reducer,
    cartVisibility: cartVisibilitySlice.reducer,
    shoppingCartSlice:shoppingCartSlice.reducer
    
  }
})
export default store;