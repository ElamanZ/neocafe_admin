import React from 'react';
import {Layout} from "antd";
import MenuPage from "../../pages/MenuPage/MenuPage.jsx";
import styles from "../AppContent/AppContent.module.scss"

function AppContent(props) {
    return (
        <Layout.Content className={styles.contentStyle}>
            <MenuPage/>
        </Layout.Content>
    );
}

export default AppContent;