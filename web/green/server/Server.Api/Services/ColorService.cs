using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Api.Services
{
    public class ColorService
    {
        private readonly List<String> _colors;
        private readonly Random _rand;

        public ColorService()
        {
            _colors = new List<String>();

            //_colors.AddRange(new[]{
            //    "Grenadine", "Tawny Port", "Ballet Slipper", "Butterum", "Navy Peony",
            //    "Neutral Gray", "Shaded Spruce", "Golden Lime", "Marina", "Autumn Maple"
            //});

            _colors.AddRange(new[]{
                "#DC4C46", "#672E3B", "#F3D6E4", "#C48F65", "#223A5E",
                "#898E8C", "#005960", "#9C9A40", "#4F84C4", "#D2691E"
            });

            _rand = new Random(Guid.NewGuid().GetHashCode());
        }

        public String GetRandom()
        {
            var i = _rand.Next(_colors.Count);
            return _colors[i];
        }
    }
}
