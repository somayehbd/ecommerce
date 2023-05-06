import { createSlice } from '@reduxjs/toolkit'

const cartVisibilitySlice = createSlice({
    name: 'cartVisibility',
    initialState: {
      value: 0
    },
    reducers: {
      changeCartVisibility: (state) => {
        state.value = state.value+1
      }
    }
  })
  
  export const { changeCartVisibility } = cartVisibilitySlice.actions
  export default cartVisibilitySlice;