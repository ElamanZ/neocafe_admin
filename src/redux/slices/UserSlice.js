import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/index";

const initialState = {
  isAuthenticated: false,
  token: null,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await login(userCredentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     const response = await login(userCredentials);
//     return response.data;
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     user: null,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         (state.loading = true), (state.user = null), (state.error = null);
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         (state.loading = false),
//           (state.user = action.payload),
//           (state.error = null);
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         (state.loading = false),
//           (state.user = null),
//           console.log(action.error.message);
//         if (action.error.message === "Request failed with status code 401") {
//           state.error = "Неправильный имейл или пароль";
//         } else {
//           state.error = action.error.message;
//         }
//       });
//   },
// });

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
