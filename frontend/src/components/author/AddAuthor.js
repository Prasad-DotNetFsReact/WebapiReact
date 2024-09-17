import React, { useState } from 'react';
import { postData } from '../../services/apiService';
import { Navigate } from 'react-router-dom';

function AddAuthor() {
    const [author, setAuthor] = useState({
        authorName: '',
        country: '',
        authorInformation: ''
    });

    const navigate = Navigate();

    const handleChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData('authors', author);
            navigate('/authors');
        } catch (error) {
            console.error('Error adding author:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Add Author</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="authorName">Author Name</label>
                    <input type="text" className="form-control" id="authorName" name="authorName" value={author.authorName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={author.country} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="authorInformation">Author Information</label>
                    <textarea className="form-control" id="authorInformation" name="authorInformation" value={author.authorInformation} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Author</button>
            </form>
        </div>
    );
}

export default AddAuthor;

