import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "hahu",
  email: "lms@gmail.com",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      return initialState;
    },
  },
});

export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
