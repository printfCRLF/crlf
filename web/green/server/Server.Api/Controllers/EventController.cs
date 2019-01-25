using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Api.Dal;
using Server.Api.Dtos;
using Server.Api.Services;
using Server.Api.Services.Exceptions;

namespace Server.Api.Controllers
{
    [Route("event")]
    public class EventController
    {
        private readonly GreenContext _context;

        public EventController(GreenContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        [Route("all")]
        public IActionResult All()
        {
            var service = new BookingService(_context);
            var bookings = service.Get();
            return new JsonResult(bookings);
        }

        [HttpPost]
        [Authorize]
        [Route("allByDateTime")]
        public IActionResult AllByDateTime(DateTime startDate, DateTime endDate)
        {
            var service = new BookingService(_context);
            var bookings = service.Get(startDate, endDate);
            return new JsonResult(bookings);
        }

        [HttpPut]
        [Authorize]
        [Route("book")]
        public IActionResult Book([FromBody]BookingDto booking)
        {
            var service = new BookingService(_context);
            try
            {
                var u = new User
                {
                    Name = booking.UserName,
                    ProfileId = booking.UserProfileId
                };
                var b = new Booking
                {
                    Date = booking.Date,
                    StartTime = booking.StartTime,
                    EndTime = booking.EndTime
                };
                var isBooked = service.Book(u, b);
                return new JsonResult(isBooked);
            }
            catch (MonthlyBookingLimitationReachedException e)
            {
                return new BadRequestObjectResult(e.GetType().ToString());
            }
            catch (Exception e)
            {
                return new BadRequestObjectResult(e.GetType().ToString());
            }
        }

        [HttpPut]
        [Authorize]
        [Route("unbook")]
        public IActionResult Unbook([FromBody]BookingDto booking)
        {
            var service = new BookingService(_context);
            try
            {
                var u = new User
                {
                    Name = booking.UserName,
                    ProfileId = booking.UserProfileId
                };
                var b = new Booking
                {
                    Date = booking.Date,
                    StartTime = booking.StartTime,
                    EndTime = booking.EndTime
                };
                var isBooked = service.Unbook(u, b);
                return new JsonResult(isBooked);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
