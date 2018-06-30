using System;
using System.Collections.Generic;
using System.Linq;
using Server.Api.Dal;
using Server.Api.Services.Exceptions;

namespace Server.Api.Services
{
    public class BookingService
    {
        private GreenContext _context;
        public int MonthlyBookingLimitation { get; set; }

        public BookingService(GreenContext greenContext)
        {
            _context = greenContext;
            MonthlyBookingLimitation = 3;
        }

        public IEnumerable<Booking> Get()
        {
            return _context.Bookings.ToList();
        }

        public IEnumerable<Booking> Get(DateTime startDate, DateTime endDate)
        {
            return _context.Bookings.Where(b => b.Date >= startDate && b.Date <= endDate);
        }

        public bool Book(User user, Booking booking)
        {
            var userExists = _context.Users.Any(u => u.ProfileId == user.ProfileId);
            if (!userExists)
            {
                _context.Users.Add(user);
            }

            var hasBooked3Times = HasBookedNTimes(user, booking, MonthlyBookingLimitation);
            if (hasBooked3Times)
            {
                throw new MonthlyBookingLimitationReachedException
                {
                    User = user,
                    Booking = booking,
                    NumberOfTimes = MonthlyBookingLimitation
                };
            }

            var isBooked = IsBooked(booking);

            if (isBooked)
            {
                throw new TimeSlotNotAvailableException
                {
                    User = user,
                    Booking = booking
                };
            }

            booking.User = user;
            booking.UserId = user.Id;

            _context.Bookings.Add(booking);
            _context.SaveChanges();

            return true;
        }

        public bool Unbook(User user, Booking booking)
        {
            var userExists = _context.Users.Any(u => u.ProfileId == user.ProfileId);
            if (!userExists)
            {
                throw new UserNotExistException
                {
                    User = user,
                    Booking = booking
                };
            }

            if (!IsBooked(user, booking))
            {
                throw new BookingNotFoundException
                {
                    User = user,
                    Booking = booking
                };
            }

            var booked = _context.Bookings.First(
                b => b.User.ProfileId == user.ProfileId &&
                     b.Date == booking.Date &&
                     b.StartTime == booking.StartTime &&
                     b.EndTime == booking.EndTime);
            _context.Bookings.Remove(booked);
            _context.SaveChanges();

            return true;
        }

        private bool IsBooked(Booking booking)
        {
            var isBooked = _context.Bookings.Any(
                b => b.Date == booking.Date
                     && b.StartTime == booking.StartTime
                     && b.EndTime == booking.EndTime);
            return isBooked;
        }

        private bool IsBooked(User user, Booking booking)
        {
            var isBooked = _context.Bookings.Any(
                b => b.User.ProfileId == user.ProfileId
                     && b.Date == booking.Date
                     && b.StartTime == booking.StartTime
                     && b.EndTime == booking.EndTime);
            return isBooked;
        }

        private bool HasBookedNTimes(User user, Booking booking, int n)
        {
            var c = _context.Bookings.Count(b => b.User.ProfileId == user.ProfileId &&
                                                 b.Date.Month == booking.Date.Month);
            return c >= n;
        }
    }
}
