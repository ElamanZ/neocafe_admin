import { createSlice } from "@reduxjs/toolkit";
import { branchData } from "../../assets/utils/data";

const initialState = {
  branches: branchData,
};

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    deleteBranch(state, action) {
      state.branches = state.branches.filter(
        (branch) => branch.id !== action.payload
      );
    },
  },
});

export const { deleteBranch } = branchSlice.actions;
export default branchSlice.reducer;
