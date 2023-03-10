import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState =[]

export const getCartId = createAsyncThunk('cart', async () => {
    try{
        let {data} = await axios.get(`http://localhost:8080/api/cart`)
        return data
    } catch (err){
        alert('error has occurred, check console')
    }
})

const allCartDatabaseSlice = createSlice({
    name: "allCartDatabase",
    initialState,
    reducers: {  }, 
    extraReducers: (builder) => {
        
    },
});

export const selectAllCartDatabase = (state) => {
    return state.allCartDatabase;
};

export default allCartDatabaseSlice.reducer;
