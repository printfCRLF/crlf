using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;
using ActiveSolution.Vehicle.Category;

namespace ActiveSolution.Workshop
{
    public class Workshop
    {
        private readonly IEnumerable<Car> _cars;
        private readonly IList<Registry> _registries = new List<Registry>();
        private const decimal PricePerDay = 200M;
        private const decimal PricePerKilometer = 5M;

        public Workshop(ICarRepository carRepository)
        {
            _cars = carRepository.Cars();
        }

        public bool Fetch(Guid bookingNumber, string socialSecurityNumber, ICategory category)
        {
            var cars = from c in _cars
                      where c.Category == category && c.IsAvailable;

            if (!cars.Any())
            {
                return false;
            }

            var car = cars.First();
            var reg = new Registry
            {
                BookingNumber = bookingNumber,
                Vin = car.Vin,
                SocialSecurityNumber = socialSecurityNumber,
                FetchDateTime = DateTime.Now,
                DistanceDriven = car.DistanceDriven
            };

            car.IsAvailable = false;
            _registries.Add(reg);
            return true;
        }

        public decimal Return(Guid bookingNumber)
        {
            var reg = _registries.First(r => r.BookingNumber == bookingNumber);
            reg.ReturnDateTime = DateTime.Now;

            var car = _cars.First(c => c.Vin == reg.Vin);
            car.IsAvailable = true;
            
            var distanceDriven = car.DistanceDriven - reg.DistanceDriven;
            var timeDriven = reg.ReturnDateTime - reg.FetchDateTime;
            var price = car.Category.CalculatePrice(PricePerDay, (int)timeDriven.TotalDays, PricePerKilometer, distanceDriven);

            return price;
        }
    }
}
