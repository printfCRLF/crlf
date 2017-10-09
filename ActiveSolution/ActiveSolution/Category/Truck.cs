using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Category
{
    class Truck : ICarCategory
    {
        public decimal DayPriceFactor { get { return 1.5M; } }


        public decimal DistancePriceFactor { get { return 1.5M; } }

        public decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
