using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Category
{
    public class Mini : ICarCategory
    {
        public decimal DayPriceFactor { get { return 1.0M; } }
        

        public decimal DistancePriceFactor { get { return 0.0M; } }

        public decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
