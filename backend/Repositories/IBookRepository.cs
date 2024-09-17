using BookWebApi_ReactIntegration.Models;
using System.Collections.Generic;

namespace BookWebApi_ReactIntegration.Repositories
{
    public interface IBookRepository
    {
        IEnumerable<Book> GetAllBooks();
        Book GetBookById(int bookId);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(int bookId);
    }
}


