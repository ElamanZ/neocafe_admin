import React from 'react';
import {Layout} from "antd";
const headerStyle = {
    color: '#2A3440',
    height: 100,
    padding: 24,
    lineHeight: '64px',
    backgroundColor: '#FFFFFF',
};
function AppHeader(props) {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    );
}

export default AppHeader;