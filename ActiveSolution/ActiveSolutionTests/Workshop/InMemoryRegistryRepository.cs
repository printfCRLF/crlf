using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ActiveSolution.Workshop;

namespace ActiveSolutionTests.Workshop
{
    public class InMemoryRegistryRepository : IRegistryRepository
    {
        private readonly List<Registry> _registries = new List<Registry>();

        public Registry Find(Guid bookningNumber)
        {
            return _registries.FirstOrDefault(r => r.BookingNumber == bookningNumber);
        }

        public void Add(Registry registry)
        {
            _registries.Add(registry);
        }

        public IEnumerable<Registry> Registries => _registries;
    }
}
