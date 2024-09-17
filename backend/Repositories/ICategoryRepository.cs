using BookWebApi_ReactIntegration.Models;
using System.Collections.Generic;

namespace BookWebApi_ReactIntegration.Repositories
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAllCategories();
        Category GetCategoryById(int categoryId);
        void AddCategory(Category category);
        void UpdateCategory(Category category);
        void DeleteCategory(int categoryId);
    }
}


