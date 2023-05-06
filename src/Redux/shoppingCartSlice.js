import { createSlice } from '@reduxjs/toolkit'

const shoppingCartSlice = createSlice({
  name: 'productContent',
  initialState: {
    items: JSON.parse(localStorage.getItem('products')) ?? [],
    position: 0,
    timestamp: Date.now(),
  },
  reducers: {
    addToShoppingCart: (state, action) => {
      //created unique key
      state.position = state.position + 1;
      const key = `${action.payload.id}_${state.position}_${state.timestamp}`;

      const newData = {
        key: key,
        data: action.payload
      }
      state.items = [...state.items, newData];
      localStorage.setItem('products', JSON.stringify(state.items));
    },
    deleteFromShoppingCart: (state, action)  => {
      state.items = state.items.filter(item => item.key !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.items));
    },
   
  }
})

export const { addToShoppingCart, deleteFromShoppingCart } = shoppingCartSlice.actions
export default shoppingCartSlice;