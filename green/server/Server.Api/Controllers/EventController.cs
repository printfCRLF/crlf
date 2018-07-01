using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Api.Dal;
using Server.Api.Services;

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
    }
}
