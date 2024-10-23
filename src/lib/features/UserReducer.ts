"use client";

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  userToken: number;
  isloggedIn: boolean;
}

const initialState: CounterState = {
  userToken: 12345,
  isloggedIn: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = 0;
      state.isloggedIn = false;
    },
  },
});

export const { logout } = counterSlice.actions;
export default counterSlice.reducer;
