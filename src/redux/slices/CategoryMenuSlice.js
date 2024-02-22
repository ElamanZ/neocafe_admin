import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        'Кофе',
        'Десерты',
        'Коктейли',
        'Выпечка',
        'Чай'
    ]
}

export const categorySlice = createSlice({
    name: "categoryMenuData",
    initialState,

    reducers: {
        addCategory(state, action) {
            state.category.push(action.payload);
        },
        deleteCategory(state, action) {
            state.category = state.category.filter(category => category !== action.payload);
        }
    }
})

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;