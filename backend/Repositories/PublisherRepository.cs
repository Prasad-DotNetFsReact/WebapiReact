using BookWebApi_ReactIntegration.Data;
using BookWebApi_ReactIntegration.Models;
using System.Collections.Generic;
using System.Linq;

namespace BookWebApi_ReactIntegration.Repositories
{
    public class PublisherRepository : IPublisherRepository
    {
        private readonly ApplicationDbContext _context;

        public PublisherRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Publisher> GetAllPublishers()
        {
            return _context.Publishers.ToList();
        }

        public Publisher GetPublisherById(int publisherId)
        {
            return _context.Publishers.Find(publisherId);
        }

        public void AddPublisher(Publisher publisher)
        {
            _context.Publishers.Add(publisher);
            _context.SaveChanges();
        }

        public void UpdatePublisher(Publisher publisher)
        {
            _context.Publishers.Update(publisher);
            _context.SaveChanges();
        }

        public void DeletePublisher(int publisherId)
        {
            var publisher = _context.Publishers.Find(publisherId);
            if (publisher != null)
            {
                _context.Publishers.Remove(publisher);
                _context.SaveChanges();
            }
        }
    }
}


