import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../slices/authSlice";
import allProductsSlice from "../slices/allProductsSlice";
import singleProductSlice from "../slices/singleProductSlice";
import singleUserSlice from "../slices/singleUserSlice";
import allUsersSlice from "../slices/allUsersSlice";
import cartSlice from "../slices/cartSlice";
import allCartDatabaseSlice from "../slices/allCartDatabaseSlice";
import orderHistorySlice from "../slices/orderHistorySlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: allProductsSlice,
        singleProduct: singleProductSlice,
        allUsers: allUsersSlice,
        singleUser: singleUserSlice,
        cart: cartSlice,
        allCartDatabase: allCartDatabaseSlice,
        orderHistory: orderHistorySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../slices/authSlice";
