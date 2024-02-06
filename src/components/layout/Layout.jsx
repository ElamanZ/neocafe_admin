// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../Header/Header.jsx";

function Layout({ children }) {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <>
            {!isLoginPage && <Header />}
            {children}
        </>
    );
}

export default Layout;
