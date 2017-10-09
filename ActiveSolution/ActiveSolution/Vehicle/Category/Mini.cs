namespace ActiveSolution.Vehicle.Category
{
    public class Mini : ICategory
    {
        public decimal DayPriceFactor { get { return 1.0M; } }

        public decimal DistancePriceFactor { get { return 0.0M; } }

        public decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
