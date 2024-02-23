import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, productData } = action.payload;
      state.value[productId] = { ...productData, count: 1 };
    },
    incrementItemCount: (state, action) => {
      const { productId } = action.payload;
      state.value[productId].count++;
    },
    decrementItemCount: (state, action) => {
      const { productId } = action.payload;
      if (state.value[productId].count > 0) {
        state.value[productId].count--;
      }
      if (state.value[productId].count == 0) {
        delete state.value[productId];
      }
    },
  },
});

export const { addToCart, incrementItemCount, decrementItemCount } =
  cartSlice.actions;
export default cartSlice.reducer;
