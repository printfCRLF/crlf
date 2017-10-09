using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Category
{
    interface ICarCategory
    {
        decimal DayPriceFactor { get; }

        decimal DistancePriceFactor { get; }

        decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers);
    }
}
