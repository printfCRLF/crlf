namespace ActiveSolution.Vehicle.Categorization
{
    public interface ICategory
    {
        Category Category { get;  }

        decimal DayPriceFactor { get; }

        decimal DistancePriceFactor { get; }

        decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer, decimal kilometers);
    }
}
