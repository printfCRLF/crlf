using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dal
{
    public class Booking
    {
        public Booking()
        {

        }

        public int Id { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        // Navigational properties
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
