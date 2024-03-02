import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentModal: null,
  modalProps: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.currentModal = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
      state.isModalOpen = true;
    },
    hideModal: (state) => {
      state.currentModal = null;
      state.modalProps = {};
      state.isModalOpen = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
// export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
