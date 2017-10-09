using Microsoft.VisualStudio.TestTools.UnitTesting;
using ActiveSolution.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Category.Tests
{
    [TestClass()]
    public class CategoryTests
    {
        [TestMethod()]
        public void MiniReturnsCorrectPrice()
        {
            var mini = new Mini();

            Assert.AreEqual(100M, mini.CalculatePrice(100M, 1, 5M, 20M));
        }

        [TestMethod()]
        public void CombiReturnsCorrectPrice()
        {
            var combi = new Combi();

            Assert.AreEqual(230M, combi.CalculatePrice(100M, 1, 5M, 20M));
        }

        [TestMethod()]
        public void TruckReturnsCorrectPrice()
        {
            var truck = new Truck();

            Assert.AreEqual(300M, truck.CalculatePrice(100M, 1, 5M, 20M));
        }
    }
}