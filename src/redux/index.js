import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/CategoryMenuSlice.js";
import userReducer from "./slices/UserSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categoryData: categorySliceReducer,
  },
});
