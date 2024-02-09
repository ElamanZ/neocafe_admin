import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../components/layout/Layout.jsx";
import MenuPage from "../pages/MenuPage/MenuPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../components/Dashboard/Dashboard.jsx";

function AppRoutes({ isAuthenticated }) {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRoutes;
