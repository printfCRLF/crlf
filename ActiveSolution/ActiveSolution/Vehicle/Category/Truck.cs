namespace ActiveSolution.Vehicle.Category
{
    public class Truck : ICategory
    {
        public decimal DayPriceFactor { get { return 1.5M; } }

        public decimal DistancePriceFactor { get { return 1.5M; } }

        public decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor;
        }
    }
}
