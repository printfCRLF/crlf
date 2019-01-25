using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public class Combi : Car
    {
        public override decimal DayPriceFactor => 1.3M;

        public override decimal DistancePriceFactor => 1.0M;

        public override Category Category => Category.Combi;
    }
}
