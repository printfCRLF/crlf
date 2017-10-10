using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;
using ActiveSolution.Vehicle.Categorization;
using ActiveSolution.Workshop;

namespace ActiveSolutionTests.Workshop
{
    class InMemoryCarRepository : ICarRepository
    {
        private readonly IEnumerable<Car> _cars = new List<Car>()
        {
            new Mini {Vin="1001", DistanceDriven = 2000M, IsAvailable = true},
            new Mini {Vin="1002", DistanceDriven = 1200M, IsAvailable = true},
            new Combi {Vin="1003", DistanceDriven = 100M, IsAvailable = false},
            new Combi {Vin="1004", DistanceDriven = 1234M, IsAvailable =  true},
            new Truck {Vin ="1101", DistanceDriven = 200M, IsAvailable = true}
        };
        public IEnumerable<Car> Cars => _cars;

        public Car FindAvailable(Category category)
        {
            return _cars.First(c => c.Category == category);
        }

        public Car Find(Func<Car, bool> predicate)
        {
            return _cars.First(predicate);
        }
    }
}
