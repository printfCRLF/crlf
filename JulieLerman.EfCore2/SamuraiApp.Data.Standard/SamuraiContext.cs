using Microsoft.EntityFrameworkCore;
using SamuraiApp.Domain.Standard;

namespace SamuraiApp.Data.Standard
{
    public class SamuraiContext : DbContext
    {
        public SamuraiContext(DbContextOptions<SamuraiContext> options)
            : base(options)
        {

        }

        public DbSet<Samurai> Samurais { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Battle> Battles { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    var cs = "Data Source=localhost;Initial Catalog=SamuraiAppDotNet;Integrated Security=True";
        //    optionsBuilder.UseSqlServer(cs);
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SamuraiBattle>()
                .HasKey(s => new { s.SamuraiId, s.BattleId });
        }
    }
}
