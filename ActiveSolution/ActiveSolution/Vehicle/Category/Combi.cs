namespace ActiveSolution.Vehicle.Category
{
    public class Combi : ICategory
    {
        public decimal DayPriceFactor { get { return 1.3M; } }
        

        public decimal DistancePriceFactor { get { return 1.0M; } }

        public decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
