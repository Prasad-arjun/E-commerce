import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false
  },

  reducers: {
    profileVisibility: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log("is logged in slice",state.isLoggedIn);
    },
   
  },
});
export const {profileVisibility} = authSlice.actions;
export default authSlice.reducer;
