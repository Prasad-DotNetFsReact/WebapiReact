import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ModeratorPage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="my-4">Moderator Dashboard</h1>
                <p>Manage book, author, and publisher details. Changes need to be approved by an admin before they take effect.</p>
            </div>
            <Footer />
        </div>
    );
}

export default ModeratorPage;
