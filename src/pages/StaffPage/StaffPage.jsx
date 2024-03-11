import React from "react";
import AppSider from "../../components/AppSider/AppSider";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader";
import StaffContent from "../../components/StaffContent/StaffContent";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";
import CreateNewEmployeeModal from "../../components/modals/CreateNewEmployeeModal/CreateNewEmployeeModal";
import "./StaffPage.module.scss";

const StaffPage = () => {
  const dispatch = useDispatch();
  const handleCreateBtnClick = () => {
    dispatch(showModal({ modalType: "createNewEmployeeModal" }));
  };

  const currentModal = useSelector((state) => state.modal);

  return (
    <div>
      <Layout>
        <AppSider />
        <Layout>
          <AppHeader
            title="Сотрудники"
            onCreateBtnClick={handleCreateBtnClick}
          />
          <StaffContent />
          {currentModal === "createNewEmployeeModal" && (
            <CreateNewEmployeeModal />
          )}
        </Layout>
      </Layout>
    </div>
  );
};

export default StaffPage;
