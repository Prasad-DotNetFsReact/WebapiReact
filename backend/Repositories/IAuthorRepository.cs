using BookWebApi_ReactIntegration.Models;
using System.Collections.Generic;

namespace BookWebApi_ReactIntegration.Repositories
{
    public interface IAuthorRepository
    {
        IEnumerable<Author> GetAllAuthors();
        Author GetAuthorById(int authorId);
        void AddAuthor(Author author);
        void UpdateAuthor(Author author);
        void DeleteAuthor(int authorId);
    }
}



