using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Vehicle;
using ActiveSolution.Vehicle.Categorization;

namespace ActiveSolution.Workshop
{
    public interface ICarRepository
    {
        IEnumerable<Car> Cars { get; }

        Car FindAvailable(Category category);

        Car Find(Func<Car, bool> predicate);
    }
}
