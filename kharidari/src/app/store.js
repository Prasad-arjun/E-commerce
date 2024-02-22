import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import { apiSlice } from "./feature/apiSlice/apiSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
