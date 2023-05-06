import { configureStore } from '@reduxjs/toolkit';
import cartIconSliceWithAction from './cartIconSliceWithAction';
import cartVisibilitySlice from './cartVisibilitySlice'
import shoppingCartSlice from './shoppingCartSlice'


const store = configureStore({
  reducer: {

    cartIconSliceWithAction: cartIconSliceWithAction.reducer,
    cartVisibilitySlice: cartVisibilitySlice.reducer,
    shoppingCartSlice:shoppingCartSlice.reducer
    
  }
})
export default store;