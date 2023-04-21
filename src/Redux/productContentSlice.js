import { createSlice } from '@reduxjs/toolkit'

const productContentSlice = createSlice({
    name: 'productContent',
    initialState: {
      value: []
    },
    reducers: {
        productContent: (state, action) => {
            state.value = [...state.value,action.payload] ;
      }
    }
  })
  
  export const { productContent} = productContentSlice.actions
  export default productContentSlice;