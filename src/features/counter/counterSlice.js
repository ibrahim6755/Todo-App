import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state,action) => {

            return state = state + action.payload
        },
        decrement: (state,action) => {
            return state = state - action.payload
        },
        reset:(state) =>{
            return state = state=0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer