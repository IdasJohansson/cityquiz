using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CityQuizWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HighscoreController : ControllerBase
    {//Class that handle incoming browser requests, retrieve model data, 
    //and then specify view templates that return a response to the browser.
        private readonly CityQuizWebAPI.Models.CityQuizContext _context;

        public HighscoreController(CityQuizWebAPI.Models.CityQuizContext context)
        {
            _context = context;
        }
        // GET: api/Highscore
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Highscore/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Highscore
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Highscore/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Highscore/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
