
using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public abstract class Car: ICategory
    {
        #region ICategory 
        public virtual decimal DayPriceFactor => 1.0M;

        public virtual decimal DistancePriceFactor => 1.0M;

        public virtual Category Category { get; }

        public virtual decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer,
            decimal kilometers)
        {
            return pricePerDay * days * DayPriceFactor + pricePerKilometer * kilometers * DistancePriceFactor; 
        }
        #endregion

        /// <summary>
        /// Registreringsnummer
        /// </summary>
        public string Vin { get; set; }

        public decimal DistanceDriven { get; set; }

        public decimal Drive(decimal distance)
        {
            DistanceDriven += distance;
            return DistanceDriven;
        }

        public bool IsAvailable { get; set; }
    }
}
