using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dal
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
