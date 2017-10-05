using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public class WorldContextSeedData
    {
        private WorldContext _context;

        public WorldContextSeedData(WorldContext context)
        {
            _context = context;
        }

        public async Task EnsureSeedData()
        {
            if (!_context.Trips.Any())
            {
                var usTrip = new Trip()
                {
                    DateCreated = DateTime.UtcNow,
                    Name = "US Trip",
                    UserName = "",
                    Stops = new List<Stop>()
                    {
                        new Stop(){ Name="Atlanta, GA", Arrival = new DateTime(2014,6,4), Latitude=33.748995, Longtitude = -84.387982, Order=0},
                        new Stop(){ Name="New York, NY", Arrival = new DateTime(2014,6,9), Latitude=40.712784, Longtitude = -71.005941, Order=1}
                    }
                };

                _context.Trips.Add(usTrip);

                _context.Stops.AddRange(usTrip.Stops);




                var worldTrip = new Trip()
                {
                    DateCreated = DateTime.UtcNow,
                    Name = "WorldTrip",
                    UserName = "",
                    Stops = new List<Stop>()
                    {
                        new Stop(){ Name="Atlanta, GA", Arrival = new DateTime(2014,6,4), Latitude=33.748995, Longtitude = -84.387982, Order=0},
                        new Stop(){ Name="New York, NY", Arrival = new DateTime(2014,6,9), Latitude=40.712784, Longtitude = -71.005941, Order=1}
                    }
                };

                _context.Trips.Add(worldTrip);

                _context.Stops.AddRange(worldTrip.Stops);


                await _context.SaveChangesAsync();
            }
        }

    }
}
