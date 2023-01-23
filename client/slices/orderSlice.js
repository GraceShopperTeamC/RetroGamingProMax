import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
export const getOpenOrders = createAsyncThunk("openOrder", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/cart/myOrders`,
            { headers: { authid: userId } }
        );
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});

const orderSlice = createSlice({
    name: "orderSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOpenOrders.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectOrders = (state) => {
    return state.order;
};

export default orderSlice.reducer;
