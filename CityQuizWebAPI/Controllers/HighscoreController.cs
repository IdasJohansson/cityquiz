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
    public class HighscoreController : ControllerBase
    {//Class that handle incoming browser requests, retrieve model data, 
    //and then specify view templates that return a response to the browser.

        private readonly cityQuizDBContext _context;

        public HighscoreController(cityQuizDBContext context)
        {
            _context = context;
        }

     
        // GET: api/Highscore
        [HttpGet("GetHighScores")] // Kan h?mta alla highscores
        public async Task<ActionResult<IEnumerable<HighScore>>> GetAllHighScores()
        {
            return await _context.HighScores.ToListAsync();
        }


        // GET: api/Highscore/5
        [HttpGet("{id}")] // H?mtar ett specifikt highscore
        public async Task<ActionResult<HighScore>> GetHighScoreById(int id)
        {
            var highscore = await _context.HighScores.FindAsync(id);

            if (highscore == null)
            {
                return NotFound();
            }

            return highscore;
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
        public async Task<ActionResult<HighScore>> DeleteHighScore(int id)
        {
            var highscore = await _context.HighScores.FindAsync(id);

            if (highscore == null)
            {
                return NotFound();
            }

            _context.HighScores.Remove(highscore);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
