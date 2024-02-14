import React from 'react';
import {Layout} from "antd";
import MenuPage from "../../pages/MenuPage/MenuPage.jsx";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 100px)',
    color: '#2A3440',
    backgroundColor: '#EBEFF2',
};
function AppContent(props) {
    return (
        <Layout.Content style={contentStyle}>
            <MenuPage/>
        </Layout.Content>
    );
}

export default AppContent;