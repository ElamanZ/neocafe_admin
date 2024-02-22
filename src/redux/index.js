import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/CategoryMenuSlice.js";

export const store = configureStore({
    reducer: {
        categoryData: categorySliceReducer,
    },
});