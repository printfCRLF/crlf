using System;
using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Server.Api.Dal;
using Server.Api.Services;
using Xunit;

namespace Server.Tests
{
    public class BookingServiceTests
    {
        private GreenContext _context;

        public BookingServiceTests()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var cs = builder.Build()["ConnectionStrings:GreenConnection"];
            var options = new DbContextOptionsBuilder<GreenContext>()
                .UseSqlServer(cs).Options;

            _context = new GreenContext(options);

        }

        [Fact]
        public void User1_Books_2Sessions()
        {
            // Arrange 
            var service = new BookingService(_context);
            var user1 = new User
            {
                ProfileId = Guid.NewGuid().ToString()
            };

            var date = new DateTime(2018, 6, 1);
            var b1 = new Booking
            {
                Date = date,
                StartTime = date.MorningStart(),
                EndTime = date.MorningEnd()
            };
            var b2 = new Booking
            {
                Date = date,
                StartTime = date.NoonStart(),
                EndTime = date.NoonEnd()
            };

            // Act
            var bookings = _context.Bookings.Where(b => b.Date == date).ToList();
            _context.Bookings.RemoveRange(bookings);
            _context.SaveChanges();

            service.Book(user1, b1);
            service.Book(user1, b2);

            // Assert
            bookings = service.Get().Where(b => b.Date == date).ToList();
            Assert.Equal(2, bookings.Count);

        }

        [Fact]
        public void TwoUsers_CannotBook_TheSameSession()
        {

            // Arrange 
            var service = new BookingService(_context);
            var user1 = new User
            {
                Name = "Bowen Sui",
                ProfileId = Guid.NewGuid().ToString()
            };
            var user2 = new User
            {
                Name = "Mr Green",
                ProfileId = Guid.NewGuid().ToString()
            };

            var date = new DateTime(2018, 6, 2);
            var b1 = new Booking
            {
                Date = date,
                StartTime = date.MorningStart(),
                EndTime = date.MorningEnd()
            };

            // Act
            var bookings = _context.Bookings.Where(b => b.Date == date).ToList();
            _context.Bookings.RemoveRange(bookings);
            _context.SaveChanges();

            var isBooked1 = service.Book(user1, b1);
            try
            {
                service.Book(user2, b1);
            }
            catch (TimeSlotNotAvailableException e)
            {
                Assert.Equal(e.User.ProfileId, user2.ProfileId);
            }

            // Assert
            Assert.True(isBooked1);

        }

        [Fact]
        public void OneUser_CannotBook_MoreThan3TimesInOneMonth()
        {
            // Arrange 
            var service = new BookingService(_context);
            var user1 = new User
            {
                ProfileId = Guid.NewGuid().ToString()
            };

            var date1 = new DateTime(2018, 6, 1);
            var date2 = new DateTime(2018, 6, 29);
            var b1 = new Booking
            {
                Date = date1,
                StartTime = date1.MorningStart(),
                EndTime = date1.MorningEnd()
            };
            var b2 = new Booking
            {
                Date = date1,
                StartTime = date1.NoonStart(),
                EndTime = date1.NoonEnd()
            };
            var b3 = new Booking
            {
                Date = date2,
                StartTime = date2.EveningStart(),
                EndTime = date2.EveningEnd()
            };
            var b4 = new Booking
            {
                Date = date2,
                StartTime = date2.MorningStart(),
                EndTime = date2.MorningEnd()
            };

            // Act
            var bookings = _context.Bookings.Where(b => b.Date == date1 || b.Date == date2).ToList();
            _context.Bookings.RemoveRange(bookings);
            _context.SaveChanges();

            service.Book(user1, b1);
            service.Book(user1, b2);
            service.Book(user1, b3);
            try
            {
                service.Book(user1, b4);                                                                  
            }
            catch (MonthlyBookingLimitationReachedException e)
            {
                // Assert
                Assert.Equal(e.User.Id, user1.Id);
                Assert.Equal(e.NumberOfTimes, service.MonthlyBookingLimitation);
            }

            bookings = service.Get().Where(b => 
                b.User.ProfileId == user1.ProfileId && 
                b.Date.Month == b1.Date.Month).ToList();
            Assert.Equal(3, bookings.Count);
        }
    }
}
