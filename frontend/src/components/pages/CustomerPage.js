import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CustomerPage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="my-4">Customer Dashboard</h1>
                <p>Welcome back! Manage your account and browse through your favorite books.</p>
            </div>
            <Footer />
        </div>
    );
}

export default CustomerPage;
