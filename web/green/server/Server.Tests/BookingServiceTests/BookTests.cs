using System;
using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Server.Api.Dal;
using Server.Api.Services;
using Server.Api.Services.Exceptions;
using Xunit;

namespace Server.Tests.BookingServiceTests
{
    public class BookTests: BaseTest
    {
        private readonly User user1, user2;
        private readonly DateTime date1, date2;
        private readonly Booking b1, b2, b3, b4;
        
        public BookTests()
        {
            user1 = new User
            {
                Name = "Bowen",
                ProfileId = Guid.NewGuid().ToString()
            };

            user2 = new User
            {
                Name = "Mr Green",
                ProfileId = Guid.NewGuid().ToString()
            };

            date1 = new DateTime(2018, 6, 1);
            date2 = new DateTime(2018, 6, 29);

            b1 = new Booking
            {
                Date = date1,
                StartTime = date1.MorningStart(),
                EndTime = date1.MorningEnd()
            };
            b2 = new Booking
            {
                Date = date1,
                StartTime = date1.NoonStart(),
                EndTime = date1.NoonEnd()
            };

            b3 = new Booking
            {
                Date = date2,
                StartTime = date2.EveningStart(),
                EndTime = date2.EveningEnd()
            };
            b4 = new Booking
            {
                Date = date2,
                StartTime = date2.MorningStart(),
                EndTime = date2.MorningEnd()
            };
        }

        [Fact]
        public void User1_Books_2Sessions()
        {
            // Arrange 
            var service = new BookingService(Context);

            // Act
            var bookings = Context.Bookings.Where(b => b.Date == date1).ToList();
            Context.Bookings.RemoveRange(bookings);
            Context.SaveChanges();

            service.Book(user1, b1);
            service.Book(user1, b2);

            // Assert
            bookings = service.Get().Where(b => b.Date == date1).ToList();
            Assert.Equal(2, bookings.Count);

        }

        [Fact]
        public void TwoUsers_CannotBook_TheSameSession()
        {

            // Arrange 
            var service = new BookingService(Context);
            
            // Act
            var bookings = Context.Bookings.Where(b => b.Date == date1).ToList();
            Context.Bookings.RemoveRange(bookings);
            Context.SaveChanges();

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
            var service = new BookingService(Context);

            // Act
            var bookings = Context.Bookings.Where(b => b.Date == date1 || b.Date == date2).ToList();
            Context.Bookings.RemoveRange(bookings);
            Context.SaveChanges();

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
