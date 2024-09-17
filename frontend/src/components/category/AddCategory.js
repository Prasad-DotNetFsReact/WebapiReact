import React, { useState } from 'react';
import { postData } from '../../services/apiService';
import { Navigate } from 'react-router-dom';

function AddCategory() {
    const [category, setCategory] = useState({
        categoryName: ''
    });

    const navigate = Navigate();

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData('categories', category);
            navigate('/categories');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input type="text" className="form-control" id="categoryName" name="categoryName" value={category.categoryName} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Category</button>
            </form>
        </div>
    );
}

export default AddCategory;

