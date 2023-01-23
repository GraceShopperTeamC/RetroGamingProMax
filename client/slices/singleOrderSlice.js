import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={} 
export const getIncompleteOrder = createAsyncThunk("incompleteOrder", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/orders/incompleteOrders`,
            { headers: { authid: userId } }
        );
        console.log("THis is the return data from getIncompleteOrder", data)
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});
export const addOrder = createAsyncThunk(
    "addOrder",
    async ({ userId, total }) => {
        try {
            const { data } = await axios.post("/api/orders", {
                userId,
                total,
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);
export const checkoutOrder = createAsyncThunk(
    "checkoutOrder",
    async ({id, userId, total, completed }) => {
        try {
            const { data } = await axios.put(`/api/orders/${id}`, {
                userId,
                completed,
                total
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

const singleOrderSlice = createSlice({
    name:"singleOrderSlice" ,
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getIncompleteOrder.fulfilled, (state, action) => {
            return action.payload[0] 
        });
        builder.addCase(addOrder.fulfilled, (state, action) => {
            return action.payload
        });
        builder.addCase(checkoutOrder.fulfilled, (state, action) => {
            return initialState 
        });
    },
});

export const selectSingleOrder = (state) => {
    return state.singleOrder;
};

export default singleOrderSlice.reducer;
