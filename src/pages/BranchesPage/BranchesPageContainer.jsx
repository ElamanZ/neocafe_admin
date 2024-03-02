import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import AppSider from "../../components/AppSider/AppSider.jsx";
import BranchContent from "../../components/BranchContent/BranchContent.jsx";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice.js";
import { useSelector } from "react-redux";
import AddNewBranchModal from "../../components/modals/AddNewBranchModal/AddNewBranchModal.jsx";

function BranchesPage(props) {
  const dispatch = useDispatch();
  const handleCreateBtnClick = () => {
    dispatch(showModal({ modalType: "addNewBranch", modalProps: {} }));
  };

  const { currentModal } = useSelector((state) => state.modal);

  return (
    <Layout>
      <AppSider />
      <Layout>
        <AppHeader title="Филиалы" onCreateBtnClick={handleCreateBtnClick} />
        <BranchContent />
        {currentModal === "addNewBranch" && <AddNewBranchModal />}
      </Layout>
    </Layout>
  );
}

export default BranchesPage;
