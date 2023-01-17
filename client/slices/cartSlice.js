import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
export const addProductToDBCart = createAsyncThunk(
    "cart",
    async ({ quantity, userId, productId }) => {
        try {
            let { data } = await axios.post(`http://localhost:8080/api/cart`, {
                quantity,
                userId,
                productId,
            });
            return data;
        } catch (err) {
            alert("error has occurred, check console");
            console.log("error has occurred, check console", err.message);
        }
    }
);
export const getMyCart = createAsyncThunk("myCart", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/cart/myCart`,
            { headers: { authid: userId } }
        );
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});
export const getMyHomeCart = createAsyncThunk("myHomeCart", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/cart/myHomeCart`,
            { headers: { authid: userId } }
        );
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});
export const getMyOrders = createAsyncThunk("myOrders", async (userId) => {
    try {
        let { data } = await axios.get(
            `http://localhost:8080/api/cart/myOrders`,
            { headers: { authid: userId } }
        );
        console.log("this is the thunk for myCart", data);
        return data;
    } catch (err) {
        alert("error has occurred, check console");
        console.log("error has occurred, check console", err.message);
    }
});
export const editProductInDBCart = createAsyncThunk(
    "editCart",
    async ({ id, productId, quantity, completed }) => {
        try {
            const { data } = await axios.put(`/api/cart/${id}`, {
                productId,
                quantity,
                completed,
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);
export const checkoutCart = createAsyncThunk(
    "checkoutCart",
    async ({ id, userId, productId, quantity, completed }) => {
        try {
            const { data } = await axios.put(`/api/cart/${id}`, {
                userId,
                productId,
                quantity,
                completed,
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);
export const deleteDBCart = createAsyncThunk("deleteCart", async ({ id }) => {
    try {
        const { data } = await axios.delete(`/api/cart/${id}`);
        return data;
    } catch (err) {
        awef;
        console.log(err);
    }
});

const cartSlice = createSlice({
    name: "cart slice",
    initialState,
    reducers: {
        addToQuantity(state, action) {
            state.map((product) => {
                if (action.payload.id == product.id) product.quantity++;
            });
        },
        removeToQuantity(state, action) {
            state.map((product) => {
                if (action.payload.id == product.id) product.quantity--;
            });
        },
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeFromCart(state, action) {
            return state.filter((product) => {
                return product.id !== action.payload;
            });
        },
        checkoutCartSlice(state, action){
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProductToDBCart.fulfilled, (state, action) => {
            return [...state, action.payload];
        });
        builder.addCase(getMyCart.fulfilled, (state, action) => {
            console.log("THIS IS THE ACTION.PAYLOAD", action.payload);
            return action.payload.map((cart) => {
                cart.product["quantity"] = cart.quantity;
                cart.product["cartId"] = cart.id;
                return cart.product;
            })
        });
        builder.addCase(editProductInDBCart.fulfilled, (state, action) => {
            console.log("THIS IS THE ACTION.PAYLOAD", action.payload)
            return state.map((cart) => {
                if (cart.id == action.payload.id) cart = action.payload;
                return cart;
            });
        });
        builder.addCase(deleteDBCart.fulfilled, (state, action) => {
            return state.filter((product) => {
                return product.id !== action.payload;
            });
        });
        builder.addCase(checkoutCart.fulfilled, (state, action) => {
          return initialState 
        });
        builder.addCase(getMyHomeCart.fulfilled, (state, action) => {
            return action.payload 
        });
    },
});

export const { addToCart, removeFromCart, addToQuantity, removeToQuantity, checkoutCartSlice } =
    cartSlice.actions;

export const selectGetCart = (state) => {
    return state.cart;
};

export default cartSlice.reducer;
