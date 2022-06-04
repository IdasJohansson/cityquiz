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
    public class UserController : ControllerBase
    {//Class that handle incoming browser requests, retrieve model data, 
    //and then specify view templates that return a response to the browser.
        private readonly cityQuizDBContext _context;

        public UserController(cityQuizDBContext context)
        {
            _context = context;
        }

        // Om man skulle beh?va h?mta alla anv?ndare
        // GET: api/User/Getusers
        [HttpGet("GetUsers")] // Unik URL
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // H?mtar en anv?ndare
        // GET: api/User/5
        [HttpGet("{id}")] // URL genom variabeln id
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // F?r att eventuellt kunna l?gga till en ny anv?ndare
        // POST: api/User
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserById", new { id = user.Id }, user);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //  F?r att kolla om en anv?ndare finns i databasen genom att kolla om username och password finns d?r, anv?nds vid login. 
        [HttpPost("CheckLogin")] // Tar in ett User objekt som vi döper till user, detta är en POST metod. 
        public async Task<bool> CheckLogin(User user)
        {
            // Går in i userstabellen och kollar om det finns något som matchar. Kollar om objektet som vi kallar för u är samma som user som är lagrat i databasen. (Både för Username och Password)
            // Returnerar true om det stämmer, annars false. 
            return await _context.Users.AnyAsync(u => u.UserName == user.UserName && u.Password == user.Password);
        }

    }
}
