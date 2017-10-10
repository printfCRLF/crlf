using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public class Truck : Car, ICategory
    {
        public decimal DayPriceFactor => 1.5M;

        public decimal DistancePriceFactor => 1.5M;

        public override Category Category => Category.Truck;

        public override decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
