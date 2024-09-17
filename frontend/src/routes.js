import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

// Import your components
import HomePage from './pages/HomePage';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import Login from './components/auth/Login';
import ManageUsers from './components/Admin/ManageUsers';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import AddBook from './components/book/AddBook';
import AuthorList from './components/author/AuthorList';
import AddAuthor from './components/author/AddAuthor';
import CategoryList from './components/category/CategoryList';
import AddCategory from './components/category/AddCategory';
import PublisherList from './components/publisher/PublisherList';
import AddPublisher from './components/publisher/AddPublisher';
import UserList from './components/user/UserList';
import UserProfile from './components/user/UserProfile';
import AdminPage from './pages/AdminPage';
import CustomerPage from './pages/CustomerPage';
import ModeratorPage from './pages/ModeratorPage';

// Route wrapper for protected routes based on user role
const ProtectedRoute = ({ element: Element, roles, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={
                user ? (
                    roles.includes(user.role.roleName) ? (
                        <Element />
                    ) : (
                        <Navigate to="/" />
                    )
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

// Route wrapper for public routes
const PublicRoute = ({ element: Element, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={
                !user ? (
                    <Element />
                ) : (
                    <Navigate to="/" />
                )
            }
        />
    );
};

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookId" element={<BookDetail />} />
            <ProtectedRoute path="/add-book" roles={['Admin']} element={<AddBook />} />
            <ProtectedRoute path="/cart" roles={['Customer', 'Admin', 'Moderator']} element={<Cart />} />
            <ProtectedRoute path="/checkout" roles={['Customer', 'Admin', 'Moderator']} element={<Checkout />} />
            <ProtectedRoute path="/authors" roles={['Admin', 'Customer', 'Moderator']} element={<AuthorList />} />
            <ProtectedRoute path="/add-author" roles={['Admin']} element={<AddAuthor />} />
            <ProtectedRoute path="/categories" roles={['Admin', 'Customer', 'Moderator']} element={<CategoryList />} />
            <ProtectedRoute path="/add-category" roles={['Admin']} element={<AddCategory />} />
            <ProtectedRoute path="/publishers" roles={['Admin', 'Customer', 'Moderator']} element={<PublisherList />} />
            <ProtectedRoute path="/add-publisher" roles={['Admin']} element={<AddPublisher />} />
            <ProtectedRoute path="/users" roles={['Admin']} element={<UserList />} />
            <ProtectedRoute path="/users/:id" roles={['Admin']} element={<UserProfile />} />
            <ProtectedRoute path="/admin" roles={['Admin']} element={<AdminPage />} />
            <ProtectedRoute path="/moderator" roles={['Moderator']} element={<ModeratorPage />} />
            <ProtectedRoute path="/customer" roles={['Customer']} element={<CustomerPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;

