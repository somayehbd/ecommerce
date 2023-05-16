import { createSlice } from '@reduxjs/toolkit'

const searchProductSlice = createSlice({
    name: 'counter',
    initialState: {
      searchQuery: ""
    },
    reducers: {
      searchProduct: (state,action) => {
        state.searchQuery=action.payload
      }
    }
  })
  
  export const { searchProduct} = searchProductSlice.actions
  export default searchProductSlice;