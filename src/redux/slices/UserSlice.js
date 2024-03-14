import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/index";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await login(userCredentials);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;
      Cookies.set("token", action.payload.token, { expires: 1 });
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.token = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action);
      console.log(action.payload);
      state.isAuthenticated = true;
      state.error = null;
      Cookies.set("token", action.payload.token, { expires: 1 });
    });
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
