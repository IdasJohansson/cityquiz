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

        /*
        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        */

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("/Login")]
        public async Task<bool> CheckLogin(User user)
        {
            return await _context.Users.AnyAsync(u => u.UserName == user.UserName && u.Password == user.Password); 
        }

    }
}
