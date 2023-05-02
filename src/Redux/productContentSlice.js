import { createSlice } from '@reduxjs/toolkit'

const productContentSlice = createSlice({
  name: 'productContent',
  initialState: {
    value: JSON.parse(localStorage.getItem('products')) ?? [],
    position: 0,
    timestamp: Date.now(),
  },
  reducers: {
    productContent: (state, action) => {
      //created unique key
      state.position = state.position + 1;
      const key = `${action.payload.id}_${state.position}_${state.timestamp}`;

      const newData = {
        key: key,
        data: action.payload
      }
      state.value = [...state.value, newData];
      localStorage.setItem('products', JSON.stringify(state.value));
    },
    deleteProduct: (state, action)  => {
      state.value = state.value.filter(item => item.key !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.value));
    }
  }
})

export const { productContent,deleteProduct } = productContentSlice.actions
export default productContentSlice;