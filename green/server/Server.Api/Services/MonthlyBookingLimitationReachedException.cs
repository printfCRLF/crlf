using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Api.Dal;

namespace Server.Api.Services
{
    public class MonthlyBookingLimitationReachedException : Exception
    {
        public User User { get; set; }
        public Booking Booking { get; set; }
        public int NumberOfTimes { get; set; }
    }
}
