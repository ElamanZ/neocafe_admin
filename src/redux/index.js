import { configureStore } from "@reduxjs/toolkit";
// import categorySliceReducer from "./slices/categoryMenuSlice.js";
import { categorySlice } from "./slices/categoryMenuSlice.js";
import userReducer from "./slices/userSlice.js";
import modalSlice from "./slices/modalSlice.js";
import branchSliceReducer from "./slices/branchSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categoryData: categorySlice.reducer,
    modal: modalSlice,
    branch: branchSliceReducer,
  },
});
