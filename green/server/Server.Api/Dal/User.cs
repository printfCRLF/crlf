using System.Collections.Generic;

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
        public List<Booking> Bookings { get; set; }
    }
}
