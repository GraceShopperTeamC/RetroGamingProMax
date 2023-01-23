import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={} 
export const getIncompleteOrder = createAsyncThunk("singleOrder", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/orders/incompleteOrders`,
            { headers: { authid: userId } }
        );
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});

const singleOrderSlice = createSlice({
    name:"singleOrderSlice" ,
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getIncompleteOrder.fulfilled, (state, action) => {
            return action.payload 
        });
    },
});

export const selectSingleOrder = (state) => {
    return state.singleOrder;
};

export default singleOrderSlice.reducer;
