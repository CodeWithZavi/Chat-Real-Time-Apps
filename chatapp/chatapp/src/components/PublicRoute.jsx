import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
    const { isAuthenticated, isReady, user } = useAuth();

    if (!isReady) return null;

    if (isAuthenticated) {
        const username = user?.username;
        return <Navigate to={username ? `/${username}/dashboard` : '/dashboard'} replace />;
    }

    return children;
};

export default PublicRoute;
