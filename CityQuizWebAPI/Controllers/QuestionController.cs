using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CityQuizWebAPI.Models; 

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

        /*
        // GET: api/Question
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        */

        // GET: api/Question/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestionById(int id)
        {
            var question = await _context.Questions.FindAsync(3);

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
        public void Delete(int id)
        {
        }
    }
}
