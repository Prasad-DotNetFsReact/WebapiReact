using BookWebApi_ReactIntegration.Models;

namespace BookWebApi_ReactIntegration.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Book>? Books { get; set; }
    }
}
