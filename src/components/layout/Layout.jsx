// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppHeader from "../AppHeader/AppHeader.jsx";

function Layout({ children }) {
    // const location = useLocation();
    // const isLoginPage = location.pathname === '/login';

    return (
        <>
            {/*{!isLoginPage && <AppHeader />}*/}
            {children}
        </>
    );
}

export default Layout;
