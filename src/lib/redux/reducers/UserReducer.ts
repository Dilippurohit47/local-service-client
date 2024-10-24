"use client";
import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: string;
  name: string;
  email: string;
  phoneNo: string;
}
interface UserState {
  userToken: string | null;
  isloggedIn: boolean;
  user: User | null;
}

const initialState: UserState = {
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
    login: (state, action: { payload: string }) => {
      state.userToken = action.payload;
      state.isloggedIn = true;
    },
    saveUser: (state, action: { payload: User }) => {
      state.user = action.payload;
    },
  },
});
export const { logout, login, saveUser } = userReducer.actions;
export default userReducer.reducer;
