import React from 'react';

function Checkout() {
    // Implement checkout logic and form here
    return (
        <div className="container">
            <h2 className="my-4">Checkout</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                </div>
                <div className="form-group">
                    <label htmlFor="payment">Payment Details</label>
                    <input type="text" className="form-control" id="payment" placeholder="Enter payment details" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;

