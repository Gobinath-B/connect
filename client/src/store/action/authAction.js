/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../api/request";

export const loginUser = createAsyncThunk(`loginUser`, async (data, { rejectWithValue }) => {
     try {
          const response = await apiRequest("user/login", data, "POST");
          console.log("USER DETAILS==>", response);
          return response;
     } catch (error) {
          return rejectWithValue(error.response.data);
     }
});

export const registerUser = createAsyncThunk(`registerUser`, async (data, { rejectWithValue }) => {
     try {
          const response = await apiRequest("user/register", data, "POST");
          console.log("USER DETAILS==>", response);
          return response;
     } catch (error) {
          return rejectWithValue(error.response.data);
     }
});
