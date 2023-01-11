import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../slices/authSlice";
import allProductsSlice from "../slices/allProductsSlice";
import singleProductSlice from "../slices/singleProductSlice";
import cartSlice from "../slices/cartSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: allProductsSlice,
        singleProduct: singleProductSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../slices/authSlice";
