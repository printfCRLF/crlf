using System;

namespace Server.Api.Dtos
{
    public class BookingDto
    {
        public BookingDto()
        {

        }

        public string UserName { get; set; }
        public string UserProfileId { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
