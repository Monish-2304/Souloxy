import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authView: "login",
  },
  reducers: {
    setAuthView: (state, action) => {
      state.authView = action.payload;
    },
  },
});

export const { setAuthView } = authSlice.actions;
export default authSlice.reducer;
