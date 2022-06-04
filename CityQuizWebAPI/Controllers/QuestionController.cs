using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CityQuizWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CityQuizWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    { //Class that handle incoming browser requests, retrieve model data, 
    //and then specify view templates that return a response to the browser.

        private readonly cityQuizDBContext _context;

        public QuestionController(cityQuizDBContext context)
        {
            _context = context;
        }

        
        // GET: api/Question
        [HttpGet("GetQuestions")] // Om man skulle behöva hämta alla frågor
        public async Task<ActionResult<IEnumerable<Question>>> GetAllQuestions()
        {
            return await _context.Questions.ToListAsync();
        }


        // GET: api/Question/5
        [HttpGet("{id}")] // Hämtar ett Question object
        public async Task<ActionResult<Question>> GetQuestionById(int id)
        {
            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            return question;
        }

        // POST: api/Question
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Question/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Question/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Question>> DeleteQuestion(int id)
        {
            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(question);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("CheckAnswer")]
        public async Task<bool> CheckAnswer(Question question)
        {
            // Ska returnera true om det är rätt svar, annars false. Pekar just nu på any,så allt är true
            // Använd FindAsync och skicka med ett id i metoden? 
            return await _context.Questions.AnyAsync(x => x.Id == question.Id);
        }

    }
}
