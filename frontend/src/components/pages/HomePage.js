import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="my-4">Welcome to BookWeb</h1>
                <p>Your one-stop shop for all things books. Browse, add to cart, and enjoy your reading!</p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;

