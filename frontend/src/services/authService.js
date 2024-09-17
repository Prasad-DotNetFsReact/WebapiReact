import apiClient, { setAuthToken } from './apiService';

// User authentication
export const login = async (credentials) => {
    const response = await apiClient.post('/login', credentials);
    const { token, user } = response.data;
    localStorage.setItem('authToken', token);
    setAuthToken(token);
    return user;
};

export const logout = async () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
};

// Fetch user profile
export const fetchUser = async () => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
    const response = await apiClient.get('/user/profile');
    return response.data;
};

