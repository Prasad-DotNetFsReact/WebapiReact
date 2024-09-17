import React, { useState } from 'react';
import { postData } from '../../services/apiService';
import { Navigate } from 'react-router-dom';

function AddBook() {
    const [book, setBook] = useState({
        bookName: '',
        description: '',
        categoryId: '',
        authorId: '',
        edition: '',
        publisherId: '',
        publishedDate: '',
        pageCount: ''
    });

    const navigate = Navigate();

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData('books', book);
            navigate('/books');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" className="form-control" id="bookName" name="bookName" value={book.bookName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={book.description} onChange={handleChange}></textarea>
                </div>
                {/* Add fields for categoryId, authorId, edition, publisherId, publishedDate, pageCount */}
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;

