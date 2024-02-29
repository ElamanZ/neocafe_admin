import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import AppSider from "../../components/AppSider/AppSider.jsx";
import BranchContent from "../../components/BranchContent/BranchContent.jsx";

function BranchesPage(props) {
  return (
    <Layout>
      <AppSider />
      <Layout>
        <AppHeader />
        <BranchContent />
      </Layout>
    </Layout>
  );
}

export default BranchesPage;
