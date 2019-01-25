using Microsoft.EntityFrameworkCore;

namespace Server.Api.Dal
{
    public class GreenContext : DbContext
    {
        public GreenContext(DbContextOptions<GreenContext> options)
        : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //}

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //}
    }
}
