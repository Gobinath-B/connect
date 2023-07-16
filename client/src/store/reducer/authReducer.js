/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../action/authAction";

const initialState = {
     user: null,
};

const authReducer = createSlice({
     name: "auth",
     initialState,
     reducers: {
          // login: (state, { action }) => {
          //      state.user = action.payload;
          // },
          // logout: (state) => {
          //      state.user = null;
          // },
     },
     extraReducers: {
          [loginUser.fulfilled]: (state, { payload }) => {
               console.log("PAYLOAD==>", payload);
               state.user = payload;
          },
          [registerUser.fulfilled]: (state, { payload }) => {
               console.log("PAYLOAD==>", payload);
               state.user = payload;
          },
     },
});

export const {} = authReducer.actions;

export default authReducer.reducer;
