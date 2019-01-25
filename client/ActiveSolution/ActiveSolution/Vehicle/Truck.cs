using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public class Truck : Car
    {
        public override decimal DayPriceFactor => 1.5M;

        public override decimal DistancePriceFactor => 1.5M;

        public override Category Category => Category.Truck;

    }
}
