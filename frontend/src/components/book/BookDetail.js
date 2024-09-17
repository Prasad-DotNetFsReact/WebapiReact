import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/apiService';
import { useParams } from 'react-router-dom';

function BookDetail() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            try {
                const data = await fetchData(`books/${bookId}`);
                setBook(data);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
        getBook();
    }, [bookId]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2 className="my-4">{book.bookName}</h2>
            <p>{book.description}</p>
            <p><strong>Author:</strong> {book.author.authorName}</p>
            <p><strong>Publisher:</strong> {book.publisher.publisherName}</p>
            <p><strong>Category:</strong> {book.category.categoryName}</p>
            <p><strong>Published Date:</strong> {book.publishedDate}</p>
            <p><strong>Page Count:</strong> {book.pageCount}</p>
        </div>
    );
}

export default BookDetail;
