import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../components/layout/Layout.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import Login from "../pages/Login/Login.jsx";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../components/Dashboard/Dashboard.jsx";

function AppRoutes({ isAuthenticated }) {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRoutes;
