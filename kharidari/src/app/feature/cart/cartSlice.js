import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, productData } = action.payload;
      console.log(productData);
      state.value[productId] = { ...productData, count: 1 };
    },
    incrementItemCount: (state, action) => {
      const { productId } = action.payload;
      state.value[productId].count++;
    },
    decrementItemCount: (state, action) => {
      const { productId } = action.payload;
      if (state.value[productId].count > 1) {
        state.value[productId].count--;
      }
    },
  },
});

export const { addToCart, incrementItemCount, decrementItemCount } =
  cartSlice.actions;
export default cartSlice.reducer;
