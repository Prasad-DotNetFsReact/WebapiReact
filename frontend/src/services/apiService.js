import axios from 'axios';

// Create an axios instance with default settings
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL for API requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to set up authorization token if needed
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

// Book API calls
export const getBooks = async () => {
    const response = await apiClient.get('/books');
    return response.data;
};

export const getBookById = async (bookId) => {
    const response = await apiClient.get(`/books/${bookId}`);
    return response.data;
};

export const addBook = async (bookData) => {
    const response = await apiClient.post('/books', bookData);
    return response.data;
};

export const updateBook = async (bookId, bookData) => {
    const response = await apiClient.put(`/books/${bookId}`, bookData);
    return response.data;
};

export const deleteBook = async (bookId) => {
    const response = await apiClient.delete(`/books/${bookId}`);
    return response.data;
};

// Author API calls
export const getAuthors = async () => {
    const response = await apiClient.get('/authors');
    return response.data;
};

export const getAuthorById = async (authorId) => {
    const response = await apiClient.get(`/authors/${authorId}`);
    return response.data;
};

export const addAuthor = async (authorData) => {
    const response = await apiClient.post('/authors', authorData);
    return response.data;
};

export const updateAuthor = async (authorId, authorData) => {
    const response = await apiClient.put(`/authors/${authorId}`, authorData);
    return response.data;
};

export const deleteAuthor = async (authorId) => {
    const response = await apiClient.delete(`/authors/${authorId}`);
    return response.data;
};

// Category API calls
export const getCategories = async () => {
    const response = await apiClient.get('/categories');
    return response.data;
};

export const getCategoryById = async (categoryId) => {
    const response = await apiClient.get(`/categories/${categoryId}`);
    return response.data;
};

export const addCategory = async (categoryData) => {
    const response = await apiClient.post('/categories', categoryData);
    return response.data;
};

export const updateCategory = async (categoryId, categoryData) => {
    const response = await apiClient.put(`/categories/${categoryId}`, categoryData);
    return response.data;
};

export const deleteCategory = async (categoryId) => {
    const response = await apiClient.delete(`/categories/${categoryId}`);
    return response.data;
};

// Publisher API calls
export const getPublishers = async () => {
    const response = await apiClient.get('/publishers');
    return response.data;
};

export const getPublisherById = async (publisherId) => {
    const response = await apiClient.get(`/publishers/${publisherId}`);
    return response.data;
};

export const addPublisher = async (publisherData) => {
    const response = await apiClient.post('/publishers', publisherData);
    return response.data;
};

export const updatePublisher = async (publisherId, publisherData) => {
    const response = await apiClient.put(`/publishers/${publisherId}`, publisherData);
    return response.data;
};

export const deletePublisher = async (publisherId) => {
    const response = await apiClient.delete(`/publishers/${publisherId}`);
    return response.data;
};

// User API calls (if needed)
export const getUsers = async () => {
    const response = await apiClient.get('/users');
    return response.data;
};

export const getUserById = async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
};

export const addUser = async (userData) => {
    const response = await apiClient.post('/users', userData);
    return response.data;
};

export const updateUser = async (userId, userData) => {
    const response = await apiClient.put(`/users/${userId}`, userData);
    return response.data;
};

export const deleteUser = async (userId) => {
    const response = await apiClient.delete(`/users/${userId}`);
    return response.data;
};

export default apiClient;

