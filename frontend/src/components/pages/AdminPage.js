import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function AdminPage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="my-4">Admin Dashboard</h1>
                <div className="list-group">
                    <Link to="/add-book" className="list-group-item list-group-item-action">Add Book</Link>
                    <Link to="/authors" className="list-group-item list-group-item-action">Manage Authors</Link>
                    <Link to="/categories" className="list-group-item list-group-item-action">Manage Categories</Link>
                    <Link to="/publishers" className="list-group-item list-group-item-action">Manage Publishers</Link>
                    <Link to="/users" className="list-group-item list-group-item-action">Manage Users</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminPage;
