"use client";
import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: string;
  name: string;
  email: string;
}
interface CounterState {
  userToken: string | null;
  isloggedIn: boolean;
  user: User | null;
}

const initialState: CounterState = {
  userToken: null,
  isloggedIn: false,
  user: null,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = null;
      state.isloggedIn = false;
      state.user = null;
    },
    login: (state, payload: string) => {
      state.userToken = payload.payload;
      state.isloggedIn = true;
    },
    saveUser: (state, payload: string) => {
      state.user = payload.payload;
    },
  },
});

export const { logout, login, saveUser } = userReducer.actions;
export default userReducer.reducer;
