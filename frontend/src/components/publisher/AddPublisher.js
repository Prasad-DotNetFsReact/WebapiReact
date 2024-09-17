import React, { useState } from 'react';
import { postData } from '../../services/apiService';
import { Navigate } from 'react-router-dom';

function AddPublisher() {
    const [publisher, setPublisher] = useState({
        publisherName: '',
        address: '',
        contactNumber: '',
        country: ''
    });

    const navigate = Navigate();

    const handleChange = (e) => {
        setPublisher({
            ...publisher,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData('publishers', publisher);
            navigate('/publishers');
        } catch (error) {
            console.error('Error adding publisher:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Add Publisher</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="publisherName">Publisher Name</label>
                    <input type="text" className="form-control" id="publisherName" name="publisherName" value={publisher.publisherName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={publisher.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={publisher.contactNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={publisher.country} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Publisher</button>
            </form>
        </div>
    );
}

export default AddPublisher;

