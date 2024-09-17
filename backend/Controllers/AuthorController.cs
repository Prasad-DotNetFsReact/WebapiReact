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
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorRepository _authorRepository;

        public AuthorController(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Author>> GetAllAuthors()
        {
            var authors = _authorRepository.GetAllAuthors();
            return Ok(authors);
        }

        [HttpGet("{id}")]
        public ActionResult<Author> GetAuthorById(int id)
        {
            var author = _authorRepository.GetAuthorById(id);
            if (author == null)
                return NotFound();
            return Ok(author);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult AddAuthor([FromBody] Author author)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _authorRepository.AddAuthor(author);
            return CreatedAtAction(nameof(GetAuthorById), new { id = author.AuthorId }, author);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult UpdateAuthor(int id, [FromBody] Author author)
        {
            if (id != author.AuthorId)
                return BadRequest("Author ID mismatch");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _authorRepository.UpdateAuthor(author);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteAuthor(int id)
        {
            var author = _authorRepository.GetAuthorById(id);
            if (author == null)
                return NotFound();

            _authorRepository.DeleteAuthor(id);
            return NoContent();
        }
    }
}


