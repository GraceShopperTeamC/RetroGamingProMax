import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/authSlice';
import allProductsSlice from '../slices/allProductsSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    products: allProductsSlice 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../slices/authSlice';
