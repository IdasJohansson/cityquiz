using System;
using System.Collections.Generic;

#nullable disable

namespace CityQuizWebAPI.Models
{
    public partial class HighScore
    {
        public int Id { get; set; }
        public int? Userid { get; set; }
        public int? Score { get; set; }

        public virtual User User { get; set; }
    }
}
