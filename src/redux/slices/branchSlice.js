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
  addBranch(state, action) {
    state.branches.push(action.payload);
  },
});

export const { deleteBranch, addBranch } = branchSlice.actions;
export default branchSlice.reducer;
