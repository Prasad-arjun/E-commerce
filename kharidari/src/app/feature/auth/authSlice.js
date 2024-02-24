import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    profileVisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {profileVisibility} = authSlice.actions;
export default authSlice.reducer;
