import { createSlice } from '@reduxjs/toolkit'

const cartIconSliceWithAction = createSlice({
    name: 'crtIconrWithAction',
    initialState: {
      value: 0
    },
    reducers: {
        incrementedWithAction: (state,action) => {
        state.value = state.value + action.payload
      },
      decrementedWithAction: (state,action) => {
        state.value = state.value - action.payload
      }
    }
  })
  
  export const { incrementedWithAction} = cartIconSliceWithAction.actions
  export default cartIconSliceWithAction;