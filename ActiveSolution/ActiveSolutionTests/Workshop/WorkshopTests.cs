using System;
using System.Linq;
using ActiveSolution.Vehicle.Category;
using ActiveSolution.Workshop;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ActiveSolutionTests.Workshop
{
    [TestClass()]
    public class WorkshopTests
    {
        private ActiveSolution.Workshop.Workshop _workshop;
        private ICarRepository _carRepository;
        private IRegistryRepository _registryRepository;

        [TestInitialize]
        public void Init()
        {
            _carRepository = new InMemoryCarRepository();
            _registryRepository = new InMemoryRegistryRepository();
            _workshop = new ActiveSolution.Workshop.Workshop(_carRepository, _registryRepository);
        }

        [TestMethod()]
        public void MiniIsDrivenForHalfADay()
        {
            var bookingNumber = Guid.NewGuid();
            var car = _workshop.Fetch(bookingNumber, "861234-1234", new Mini(), new DateTime(2017, 10, 1, 7, 30, 0));
            Assert.AreEqual(false, car.IsAvailable);

            var startDistance = car.DistanceDriven;
            car.Drive(23M);
            Assert.AreEqual(23M, car.DistanceDriven - startDistance);

            var price = _workshop.Return(bookingNumber, new DateTime(2017, 10, 1, 18, 30, 0));
            Assert.AreEqual(true, car.IsAvailable);
            Assert.AreEqual(_workshop.PricePerDay, price);
        }

        [TestMethod()]
        public void TruckIsDrivenForTwoDays()
        {
            var bookingNumber = Guid.NewGuid();
            var car = _workshop.Fetch(bookingNumber, "001122-6677", new Truck(), new DateTime(2017, 10, 1, 7, 30, 0));
            car.Drive(151.1M);

            _registryRepository.Find(bookingNumber);
            var price = _workshop.Return(bookingNumber, new DateTime(2017, 10, 2, 18, 30, 0));
            Assert.AreEqual(_workshop.PricePerDay * 2.0M * 1.5M + _workshop.PricePerKilometer * 151.1M * 1.5M, price);
        }
    }
}