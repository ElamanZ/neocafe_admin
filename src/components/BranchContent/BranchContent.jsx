import React from "react";
import { Layout } from "antd";
import BranchesPage from "../../pages/BranchesPage/BranchesPage";
import styles from "./BranchContent.module.scss";

function BranchContent(props) {
  return (
    <Layout.Content className={styles.contentStyle}>
      <BranchesPage />
    </Layout.Content>
  );
}

export default BranchContent;
