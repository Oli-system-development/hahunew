import { createSlice } from "@reduxjs/toolkit";

const defaultUserData = {
  userId: "",
  // firstName: "",
  // lastName: "",
  // email: "",
  // phoneNumber: "",
  // address: {
  //   addressId: "",
  //   city: "",
  //   country: "",
  //   houseNo: "",
  //   region: "",
  //   subCity: "",
  //   woreda: "",
  // },
  // banned: false,
  // createdAt: "0001-01-01T00:00:00Z",
  // profilePic: "",
  // type: "",
  // username: "",
  // verified: false,
};

const initialState = {
  ...defaultUserData,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const userData = action.payload;
      // Update state properties with userData values
      Object.assign(state, userData);
    },
    defaultState: () => initialState,
  },
});

export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
