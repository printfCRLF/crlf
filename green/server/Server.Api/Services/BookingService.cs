using System.Collections.Generic;
using System.Linq;
using Server.Api.Dal;

namespace Server.Api.Services
{
    public class BookingService
    {
        private GreenContext _context;

        public BookingService(GreenContext greenContext)
        {
            _context = greenContext;
        }
        
        public bool Book(User user, Booking booking)
        {
            var userExists = _context.Users.Any(u => u.ProfileId == user.ProfileId);
            if (!userExists)
            {
                _context.Users.Add(user);
            }
            _context.SaveChanges();

            var isBooked = _context.Bookings.Any(b => b.Date == booking.Date
                                       && b.StartTime == booking.StartTime
                                       && b.EndTime == booking.EndTime);
            if (isBooked)
            {
                return false;
            }

            _context.Bookings.Add(booking);
            _context.SaveChanges();
            
            return true;
        }

        public IEnumerable<Booking> Get()
        {
            return _context.Bookings.ToList();
        }
    }
}
