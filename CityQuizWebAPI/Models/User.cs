using System;
using System.Collections.Generic;

#nullable disable

namespace CityQuizWebAPI.Models
{
    public partial class User
    {
        public User()
        {
            HighScores = new HashSet<HighScore>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? Timetaken { get; set; }
        public int? Score { get; set; }

        public virtual ICollection<HighScore> HighScores { get; set; }
    }
}
