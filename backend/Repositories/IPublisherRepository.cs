using BookWebApi_ReactIntegration.Models;
using System.Collections.Generic;

namespace BookWebApi_ReactIntegration.Repositories
{
    public interface IPublisherRepository
    {
        IEnumerable<Publisher> GetAllPublishers();
        Publisher GetPublisherById(int publisherId);
        void AddPublisher(Publisher publisher);
        void UpdatePublisher(Publisher publisher);
        void DeletePublisher(int publisherId);
    }
}

