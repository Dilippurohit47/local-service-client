"use client";

import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: string;
  name: string;
  email: string;
}
interface CounterState {
  userToken: string;
  isloggedIn: boolean;
  User: User | null;
}

const initialState: CounterState = {
  userToken: "0",
  isloggedIn: false,
  User: null,
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
    saveUser: (state, payload: string) => {
      state.User = payload.payload;
    },
  },
});

export const { logout, login,saveUser } = userReducer.actions;
export default userReducer.reducer;
