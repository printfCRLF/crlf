﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;
using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Workshop
{
    public class Workshop
    {
        private ICarRepository _carRepository;
        private readonly IRegistryRepository _registryRepository;
        
        public decimal PricePerDay => 200M;
        public decimal PricePerKilometer => 5M;

        public Workshop(ICarRepository carRepository, IRegistryRepository registryRepository)
        {
            _carRepository = carRepository;
            _registryRepository = registryRepository;
        }

        public Car Fetch(Guid bookingNumber, string socialSecurityNumber, Category category, DateTime fetchDateTime)
        {
            var car = _carRepository.FindAvailable(category);
            if (car == null)
            {
                return null;
            }
            var reg = new Registry
            {
                BookingNumber = bookingNumber,
                Vin = car.Vin,
                SocialSecurityNumber = socialSecurityNumber,
                FetchDateTime = fetchDateTime,
                DistanceDriven = car.DistanceDriven
            };

            car.IsAvailable = false;
            _registryRepository.Add(reg);
            return car;
        }

        public decimal Return(Guid bookingNumber, DateTime returnDateTime)
        {
            var reg = _registryRepository.Find(bookingNumber);
            reg.ReturnDateTime = returnDateTime;

            var car = _carRepository.Find(c => c.Vin == reg.Vin);
            car.IsAvailable = true;

            var distanceDriven = car.DistanceDriven - reg.DistanceDriven;
            var timeDriven = (int)Math.Ceiling((reg.ReturnDateTime - reg.FetchDateTime).TotalDays);
            var price = car.CalculatePrice(PricePerDay, timeDriven, PricePerKilometer, distanceDriven);

            return price;
        }
    }
}
