import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0,
}

const Slice=createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        },
        incrementByValue: (state,action)=>{
            state.value+=Number(action.payload);
        },
        decrementByValue: (state,action)=>{
            state.value-=action.payload;
        },
    }
});

export const {increment, decrement, incrementByValue, decrementByValue} = Slice.actions;

export default Slice.reducer