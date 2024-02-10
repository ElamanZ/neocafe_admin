import React from 'react';
import {Layout} from "antd";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 100px)',
    lineHeight: '120px',
    color: '#2A3440',
    backgroundColor: '#EBEFF2',
};
function AppContent(props) {
    return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>
    );
}

export default AppContent;