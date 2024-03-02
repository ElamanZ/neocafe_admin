import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewBranchModal from "./AddNewBranchModal/AddNewBranchModal";
// import { selectModal } from "../../redux/slices/modalSlice";

// const Modals = () => {
//   const modals = useSelector((state) => state.modal.modals);

//   return (
//     <div className={styles.modals}>
//       {modals.map((modal, index) => {
//         switch (modal) {
//           case "addNewBranch":
//             return <AddNewBranchModal key={index} />;
//         }
//       })}
//     </div>
//   );
// };

// const Modals = () => {
//   const dispatch = useDispatch();
//   const { currentModal, modalProps } = useSelector(state => state.modal);
//   const handleCloseModal = () => {
//     dispatch(hideModal());
//   };

//   const ModalsMap = () => {
//     switch (currentModal) {
//       case "addNewBranch":
//         return (
//           <AddNewBranchModal {...modalProps} onCancel={handleCloseModal} />
//         );

//       default:
//         return null;
//     }
//   };
//   return <>{ModalsMap()}</>;
//   //   return ModalsMap[currentModal](modalProps);
// };

const Modals = () => {
  const { isModalOpen, currentModal, modalProps } = useSelector(
    (state) => state.modal
  );

  const ModalsMap = {
    addNewBranch: AddNewBranchModal,
  };

  const ModalComponent = currentModal ? ModalsMap[currentModal] : null;

  return isModalOpen && ModalComponent ? (
    <ModalComponent {...modalProps} />
  ) : null;
};

export default Modals;
