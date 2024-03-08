import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/CategoryMenuSlice.js";
import userReducer from "./slices/UserSlice.js";
import modalSlice from "./slices/modalSlice.js";
import branchSliceReducer from "./slices/branchSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categoryData: categorySliceReducer,
    modal: modalSlice,
    branch: branchSliceReducer,
  },
});
