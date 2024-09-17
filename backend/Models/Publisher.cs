using BookWebApi_ReactIntegration.Models;

namespace BookWebApi_ReactIntegration.Models
{
    public class Publisher
    {
        public int PublisherId { get; set; }
        public string PublisherName { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public string Country { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Book>? Books { get; set; }
    }
}
