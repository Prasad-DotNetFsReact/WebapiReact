using BookWebApi_ReactIntegration.Models;
using BookWebApi_ReactIntegration.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BookWebApi_ReactIntegration.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class PublisherController : ControllerBase
    {
        private readonly IPublisherRepository _publisherRepository;

        public PublisherController(IPublisherRepository publisherRepository)
        {
            _publisherRepository = publisherRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Publisher>> GetAllPublishers()
        {
            var publishers = _publisherRepository.GetAllPublishers();
            return Ok(publishers);
        }

        [HttpGet("{id}")]
        public ActionResult<Publisher> GetPublisherById(int id)
        {
            var publisher = _publisherRepository.GetPublisherById(id);
            if (publisher == null)
                return NotFound();
            return Ok(publisher);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult AddPublisher([FromBody] Publisher publisher)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _publisherRepository.AddPublisher(publisher);
            return CreatedAtAction(nameof(GetPublisherById), new { id = publisher.PublisherId }, publisher);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult UpdatePublisher(int id, [FromBody] Publisher publisher)
        {
            if (id != publisher.PublisherId)
                return BadRequest("Publisher ID mismatch");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _publisherRepository.UpdatePublisher(publisher);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeletePublisher(int id)
        {
            var publisher = _publisherRepository.GetPublisherById(id);
            if (publisher == null)
                return NotFound();

            _publisherRepository.DeletePublisher(id);
            return NoContent();
        }
    }
}


