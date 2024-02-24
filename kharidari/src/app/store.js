import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./feature/apiSlice/apiSlice";
import cartReducer from "./feature/cart/cartSlice";
import authReducer from "./feature/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
