import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import AppSider from "../../components/AppSider/AppSider.jsx";
import AppContent from "../../components/AppContent/AppContent.jsx";

function MainPage(props) {
  const handleCreateBtnClick = () => {
    console.log("Add menu add modal");
  };

  return (
    <Layout>
      <AppSider />
      <Layout>
        <AppHeader title="Меню" onCreateBtnClick={handleCreateBtnClick} />
        <AppContent />
      </Layout>
    </Layout>
  );
}

export default MainPage;
