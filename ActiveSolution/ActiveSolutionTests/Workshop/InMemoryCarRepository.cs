using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;
using ActiveSolution.Vehicle.Category;
using ActiveSolution.Workshop;

namespace ActiveSolutionTests.Workshop
{
    class InMemoryCarRepository : ICarRepository
    {
        private readonly IEnumerable<Car> _cars = new List<Car>()
        {
            new Car {Vin = "1001", Category = new Mini(), DistanceDriven = 200M, IsAvailable = true},
            new Car {Vin = "1002", Category = new Mini(), DistanceDriven = 1200M, IsAvailable = true},
            new Car {Vin = "1003", Category = new Combi(), DistanceDriven = 200M, IsAvailable = true},
            new Car {Vin = "1004", Category = new Combi(), DistanceDriven = 200M, IsAvailable = false},
            new Car {Vin = "1005", Category = new Truck(), DistanceDriven = 200M, IsAvailable = true}
        };

        public IEnumerable<Car> Cars => _cars;
    }
}
