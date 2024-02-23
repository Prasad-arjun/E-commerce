import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import { apiSlice } from "./feature/apiSlice/apiSlice";
import cartReducer from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
