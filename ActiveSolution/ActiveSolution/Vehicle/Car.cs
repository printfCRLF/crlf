
using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Vehicle
{
    public abstract class Car
    {
        /// <summary>
        /// Registreringsnummer
        /// </summary>
        public string Vin { get; set; }

        public virtual Category Category { get; }

        public virtual decimal CalculatePrice(decimal pricePerDay, int days, decimal pricePerKilometer,
            decimal kilometers)
        {
            return 0.0M;
        }

        /// <summary>
        /// Mätarställning
        /// </summary>
        public decimal DistanceDriven { get; set; }

        public decimal Drive(decimal distance)
        {
            DistanceDriven += distance;
            return DistanceDriven;
        }

        public bool IsAvailable { get; set; }
    }
}
