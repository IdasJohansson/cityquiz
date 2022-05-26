using System;
using System.Collections.Generic;

#nullable disable

namespace CityQuizWebAPI.Models
{
    public partial class Question
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
