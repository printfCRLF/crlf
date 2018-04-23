using Microsoft.EntityFrameworkCore;
using SamuraiApp.Domain.DotNet;

namespace SamuraiApp.Data.DotNet
{
    public class SamuraiContext : DbContext
    {
        public DbSet<Samurai> Samurais { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Battle> Battles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var cs = "Data Source=localhost;Initial Catalog=SamuraiAppDotNet;Integrated Security=True";
            optionsBuilder.UseSqlServer(cs);
        }
    }
}
