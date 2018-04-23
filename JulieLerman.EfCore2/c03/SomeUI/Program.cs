using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SamuraiApp.Domain;
using SamuraiApp.Data;

namespace SomeUI
{
    class Program
    {
        static void Main(string[] args)
        {
            //InsertSamurai();
            //InsertMultipleSamurais();
            //InsertMultipleDifferentObjects();
            MoreQueries();
        }

        private static void InsertSamurai()
        {
            var samurai = new Samurai { Name = "Julie" };
            using (var context = new SamuraiContext())
            {
                context.Samurais.Add(samurai);
                context.SaveChanges();
            }
        }

        private static void InsertMultipleSamurais()
        {
            var julie = new Samurai { Name = "Julie" };
            var sammy = new Samurai { Name = "Sampson" };
            using (var context = new SamuraiContext())
            {
                context.Samurais.AddRange(julie, sammy);
                context.SaveChanges();
            }
        }

        private static void InsertMultipleDifferentObjects()
        {
            var samurai = new Samurai { Name = "Oda Nobunaga" };
            var battle = new Battle
            {
                Name = "Battle of Nagashino",
                StartDate = new DateTime(1575, 06, 16),
                EndDate = new DateTime(1575, 06, 28)
            };

            using (var context = new SamuraiContext())
            {
                context.AddRange(samurai, battle);
                context.SaveChanges();
            }
        }

        private static void MoreQueries()
        {
            using (var context = new SamuraiContext())
            {
                var name = "Sampson";
                //var samurais = context.Samurais.Where(s => s.Name == name).ToList();
                //var firstOrDefault = context.Samurais.FirstOrDefault(s => s.Name == name);
                //var findByKey = context.Samurais.Find(2);

                //var search = "J%";
                //var like = context.Samurais.Where(s => EF.Functions.Like(s.Name, search)).ToList();

                var lastSampson = context.Samurais.OrderBy(s => s.Id).LastOrDefault(s => s.Name == name);
            }

        }
    }
}
