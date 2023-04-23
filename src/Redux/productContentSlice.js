import { createSlice } from '@reduxjs/toolkit'

const productContentSlice = createSlice({
  name: 'productContent',
  initialState: {
    value: JSON.parse(localStorage.getItem('products')) ?? [],
    position: 0
  },
  reducers: {
    productContent: (state, action) => {
      //created unique key
      state.position = state.position + 1;
      const key = `${action.payload.id}_${state.position}`;

      const newData = {
        key: key,
        data: action.payload
      }
      state.value = [...state.value, newData];
      localStorage.setItem('products', JSON.stringify(state.value));
    }
  }
})

export const { productContent } = productContentSlice.actions
export default productContentSlice;