import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewCategory } from "../../api";

const initialState = {
  category: ["Кофе", "Десерты", "Коктейли", "Выпечка", "Чай"],
};

export const categorySlice = createSlice({
  name: "categoryMenuData",
  initialState,

  reducers: {
    addCategory(state, action) {
      state.category.push(action.payload);
    },
    deleteCategory(state, action) {
      state.category = state.category.filter(
        (category) => category !== action.payload
      );
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(addNewCategory.fulfilled, (state, action) => {
  //       state.category.push(action.payload);
  //     });
  //   },
});

// export const { deleteCategory, addNewCategory } = categorySlice.actions;
export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
