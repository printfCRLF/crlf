using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public class Combi : Car
    {
        public decimal DayPriceFactor => 1.3M;

        public decimal DistancePriceFactor => 1.0M;

        public override Category Category => Category.Combi;

        public override decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
