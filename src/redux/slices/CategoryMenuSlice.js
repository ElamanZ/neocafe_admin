import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewCategory } from "../../api";

const initialState = {
  category: ["Кофе", "Десерты", "Коктейли", "Выпечка", "Чай"],
};

export const addNewCategoryAsync = createAsyncThunk(
  "addNewCategory",
  async (categoryData) => {
    const response = await addNewCategory(categoryData);
    console.log(response);
    return response;
  }
);

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

  extraReducers: (builder) => {
    builder.addCase(addNewCategoryAsync.fulfilled, (state, action) => {
      state.category.push(action.payload);
    });
  },
});

// export const { deleteCategory, addNewCategory } = categorySlice.actions;
export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
