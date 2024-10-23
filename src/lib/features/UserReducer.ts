"use client";

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  userToken: string;
  isloggedIn: boolean;
}

const initialState: CounterState = {
  userToken: "0",
  isloggedIn: false,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = "";
      state.isloggedIn = false;
    },
    login: (state, payload: string) => {
      state.userToken = payload.payload;
      state.isloggedIn = true;
    },
  },
});

export const { logout,login } = userReducer.actions;
export default userReducer.reducer;
