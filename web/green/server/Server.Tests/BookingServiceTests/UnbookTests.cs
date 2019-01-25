using System;
using System.Collections.Generic;
using System.Text;
using Server.Api.Dal;
using Server.Api.Services;
using Xunit;
using System.Linq;
using Server.Api.Services.Exceptions;

namespace Server.Tests.BookingServiceTests
{
    public class UnbookTests: BaseTest
    {
        private readonly User _user1, _user2;
        private readonly DateTime _date;
        private readonly Booking _b1, _b2;

        public UnbookTests()
        {
            _user1 = new User
            {
                Name = "Elisabetta",
                ProfileId = Guid.NewGuid().ToString()
            };

            _user2 = new User
            {
                Name = "Fredrik",
                ProfileId = Guid.NewGuid().ToString()
            };

            _date = new DateTime(2018, 6, 1);
            _b1 = new Booking
            {
                Date = _date,
                StartTime = _date.MorningStart(),
                EndTime = _date.MorningEnd(), 
            };

            _b2 = new Booking
            {
                Date = _date,
                StartTime = _date.NoonStart(),
                EndTime = _date.NoonEnd(),
            };
        }

        [Fact]
        public void User_Unbooks_OwnSlot()
        {
            // Arrange 
            var service = new BookingService(Context);

            var bookings = Context.Bookings.Where(b => b.Date == _date).ToList();
            Context.Bookings.RemoveRange(bookings);
            Context.SaveChanges();

            // Act 
            service.Book(_user1, _b1);
            var isUnbooked = service.Unbook(_user1, _b1);

            // Assert 
            Assert.True(isUnbooked);
            var booking = Context.Bookings.Any(b =>
                b.User.ProfileId == _user1.ProfileId &&
                b.Date == _b1.Date &&
                b.StartTime == _b1.StartTime &&
                b.EndTime == _b1.StartTime);
            Assert.False(booking);
        }

        [Fact]
        public void User_CannotUnbook_EmptySlot()
        {
            // Arrange 
            var service = new BookingService(Context);

            // Act 
            service.Book(_user1, _b1);
            try
            {
                service.Unbook(_user1, _b2);
            }
            catch (BookingNotFoundException e)
            {
                Assert.Equal(e.User.ProfileId, _user1.ProfileId);
                Assert.Equal(e.Booking, _b2);
            }

            // Assert 
            var booking = Context.Bookings.Any(b =>
                b.User.ProfileId == _user1.ProfileId &&
                b.Date == _b1.Date &&
                b.StartTime == _b1.StartTime &&
                b.EndTime == _b1.StartTime);
            Assert.False(booking);
        }

        [Fact]
        public void User_CannotUnbook_OthersSlot()
        {
            var service = new BookingService(Context);
            service.Book(_user1, _b1);
            service.Book(_user2, _b2);
            try
            {
                service.Unbook(_user2, _b1);
            }
            catch (BookingNotFoundException e)
            {
                Assert.Equal(e.User.ProfileId, _user2.ProfileId);
                Assert.Equal(e.Booking, _b1);
            }

            // Assert 
            var booking = Context.Bookings.Any(b =>
                b.User.ProfileId == _user2.ProfileId &&
                b.Date == _b1.Date &&
                b.StartTime == _b1.StartTime &&
                b.EndTime == _b1.StartTime);
            Assert.False(booking);
        }
    }
}
