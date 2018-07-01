using System.Collections.Generic;
using Newtonsoft.Json;

namespace Server.Api.Dal
{
    public class User
    {
        public User()
        {
            Bookings = new List<Booking>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string ProfileId { get; set; }
        public string Color { get; set; }

        [JsonIgnore]
        public List<Booking> Bookings { get; set; }
    }
}
