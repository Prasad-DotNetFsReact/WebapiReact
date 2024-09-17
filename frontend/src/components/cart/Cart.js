import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/apiService';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Ideally, fetch cart items from a cart service or API
        const fetchCartItems = async () => {
            try {
                // Assuming the cart items are fetched from a local storage or API
                const items = JSON.parse(localStorage.getItem('cart')) || [];
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemove = (bookId) => {
        const updatedCart = cartItems.filter(item => item.bookId !== bookId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="container">
            <h2 className="my-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="list-group">
                    {cartItems.map(item => (
                        <li key={item.bookId} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{item.bookName}</span>
                            <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.bookId)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <a href="/checkout" className="btn btn-primary mt-3">Proceed to Checkout</a>
        </div>
    );
}

export default Cart;

