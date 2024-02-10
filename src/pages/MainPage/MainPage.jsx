import React from 'react';
import { Layout } from 'antd';
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import AppSider from "../../components/AppSider/AppSider.jsx";
import AppContent from "../../components/AppContent/AppContent.jsx";


function MainPage(props) {
    return (
        <Layout>
            <AppSider/>
            <Layout>
                <AppHeader/>
                <AppContent/>
            </Layout>
        </Layout>
    );
}

export default MainPage;