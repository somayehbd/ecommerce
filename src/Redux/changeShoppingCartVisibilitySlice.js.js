import { createSlice } from '@reduxjs/toolkit'

const cartVisibilitySlice = createSlice({
    name: 'cartVisibility',
    initialState: {
      value: 0
    },
    reducers: {
      cartVisibility: (state) => {
        state.value = state.value+1
      }
    }
  })
  
  export const { cartVisibility } = cartVisibilitySlice.actions
  export default cartVisibilitySlice;