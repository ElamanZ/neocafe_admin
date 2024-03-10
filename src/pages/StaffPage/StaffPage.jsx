import React from "react";
import AppSider from "../../components/AppSider/AppSider";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader";
import StaffContent from "../../components/StaffContent/StaffContent";
import "./StaffPage.module.scss";

const StaffPage = () => {
  return (
    <div>
      <Layout>
        <AppSider />
        <Layout>
          <AppHeader title="Сотрудники" />
          <StaffContent />
        </Layout>
      </Layout>
    </div>
  );
};

export default StaffPage;
