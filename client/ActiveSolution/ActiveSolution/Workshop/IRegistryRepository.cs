using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActiveSolution.Workshop
{
    public interface IRegistryRepository
    {
        Registry Find(Guid bookningNumber);

        void Add(Registry registry);

        IEnumerable<Registry> Registries { get;  }

    }
}
