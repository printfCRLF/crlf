﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Api.Dal;

namespace Server.Api.Services.Exceptions
{
    public class TimeSlotNotAvailableException : Exception
    {
        public User User { get; set; }
        public Booking Booking { get; set; }
    }
}
