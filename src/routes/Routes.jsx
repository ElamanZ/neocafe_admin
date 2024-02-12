import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../components/layout/Layout.jsx";
import MenuPage from "../pages/MenuPage/MenuPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";

function AppRoutes({ isAuthenticated }) {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRoutes;
