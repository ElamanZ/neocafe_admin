import React from 'react';
import AppSider from "../../components/AppSider/AppSider.jsx";
import {Layout} from "antd";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import BranchContent from "../../components/BranchContent/BranchContent.jsx";
import WarehouseContent from "../../components/WarehouseContent/WarehouseContent.jsx";

function WarehousePage(props) {
    return (
        <Layout>
            <AppSider />
            <Layout>
                <AppHeader title="Склад"/>
                <WarehouseContent />
            </Layout>
        </Layout>
    );
}

export default WarehousePage;