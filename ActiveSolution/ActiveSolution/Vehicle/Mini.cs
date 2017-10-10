using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public class Mini : Car
    {
        public override decimal DayPriceFactor => 1.0M;

        public override decimal DistancePriceFactor => 0.0M;

        public override Category Category => Category.Mini;

        public override decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor;
        }
    }
}
