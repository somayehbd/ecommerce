import { configureStore } from '@reduxjs/toolkit';
import cartIconSliceWithAction from './cartIconSliceWithAction';

const store = configureStore({
  reducer: {
  
    cartIconSliceWithAction: cartIconSliceWithAction.reducer
  }
})
export default store;