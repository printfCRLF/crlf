using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Workshop
{
    public class Registry
    {
        public Guid BookingNumber { get; set; }

        public string Vin { get; set; }

        public string SocialSecurityNumber { get; set; }

        public decimal DistanceDriven { get; set; }

        public DateTime FetchDateTime { get; set; }

        public DateTime ReturnDateTime { get; set; }
    }
}
