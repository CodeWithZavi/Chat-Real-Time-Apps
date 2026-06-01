import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken) setToken(storedToken);
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch {
                setUser(null);
            }
        }

        setIsReady(true);
    }, []);

    const login = (authData) => {
        const nextToken = authData?.token || null;
        const nextUser = authData?.user || null;

        if (nextToken) {
            localStorage.setItem('token', nextToken);
            setToken(nextToken);
        }

        if (nextUser) {
            localStorage.setItem('user', JSON.stringify(nextUser));
            setUser(nextUser);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    const value = useMemo(() => ({
        user,
        token,
        isReady,
        isAuthenticated: Boolean(token),
        login,
        logout,
        setUser
    }), [user, token, isReady]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
