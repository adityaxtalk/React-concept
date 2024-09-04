import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count +=1
        },
        decrement(state) {
            state.count-=1
        },
        decrementByValue(state, action) {
            // state.count=state.count-action.payload
            console.log(typeof action.payload)
            state.count-=action.payload;
        },
        incrementByValue(state, action) {
            state.count+= +action.payload;
        },
        toggleCounter(state) {
            state.showCounter=!state.showCounter
        }
    }
})

export const {increment, incrementByValue, decrement, decrementByValue, toggleCounter} = counterSlice.actions;
export default counterSlice.reducer