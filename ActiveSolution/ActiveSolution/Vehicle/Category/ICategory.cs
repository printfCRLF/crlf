namespace ActiveSolution.Vehicle.Category
{
    public interface ICategory
    {
        decimal DayPriceFactor { get; }

        decimal DistancePriceFactor { get; }

        decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers);
    }
}
