using System;
using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Server.Api.Dal;

namespace Server.Tests
{
    public class BaseTest: IDisposable
    {
        protected readonly GreenContext Context;

        public BaseTest()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var cs = builder.Build()["ConnectionStrings:GreenConnection"];
            var options = new DbContextOptionsBuilder<GreenContext>()
                .UseSqlServer(cs).Options;

            Context = new GreenContext(options);

            CleanupDatabase();
        }


        public void Dispose()
        {
            CleanupDatabase();

            Context?.Dispose();
        }

        protected void CleanupDatabase()
        {
            var allBookings = Context.Bookings.ToList();
            var allUsers = Context.Users.ToList();
            
            Context.Bookings.RemoveRange(allBookings);
            Context.Users.RemoveRange(allUsers);
            Context.SaveChanges();
        }
    }
}
