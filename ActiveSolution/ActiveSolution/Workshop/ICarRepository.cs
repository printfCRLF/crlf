using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;

namespace ActiveSolution.Workshop
{
    public interface ICarRepository
    {
        IEnumerable<Car> Cars();
    }
}
