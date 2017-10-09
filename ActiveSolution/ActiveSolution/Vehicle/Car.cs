using ActiveSolution.Vehicle.Category;

namespace ActiveSolution.Vehicle
{
    public class Car
    {
        /// <summary>
        /// Registreringsnummer
        /// </summary>
        public string Vin { get; set; }

        public ICategory Category { get; set; }

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
