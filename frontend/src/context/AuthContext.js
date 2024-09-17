import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/apiService';
import { login } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in and fetch user data
        const fetchUser = async () => {
            try {
                const response = await fetchData('user');
                setUser(response);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleLogin = async (credentials) => {
        try {
            const userData = await login(credentials);
            setUser(userData);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleLogout = () => {
        setUser(null);
        // Optionally, clear any session or token
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
