using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using BookWebApi_ReactIntegration.Models;

namespace BookWebApi_ReactIntegration.Models
{
    public class Book
    {
        public int BookId { get; set; }

        [Required(ErrorMessage = "Book Name is Mandatory")]
        public string BookName { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int AuthorId { get; set; }
        public int Edition { get; set; }
        public int PublisherId { get; set; }
        public DateTime PublishedDate { get; set; }
        public int PageCount { get; set; }
        private string? Thumbnail { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("AuthorId")]

        public Author? Author
        { get; set; }

        [ForeignKey("PublisherId")]

        public Publisher? Publisher { get; set; }

        [ForeignKey("CategoryId")]

        public Category? Category { get; set; }
    }
}


