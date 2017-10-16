using Microsoft.AspNetCore.Identity;
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
        private UserManager<WorldUser> _userManager;

        public WorldContextSeedData(WorldContext context, UserManager<WorldUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task EnsureSeedData()
        {
            if (await _userManager.FindByEmailAsync("mariokerciku91@gmail.com")==null)
            {
                var user = new WorldUser()
                {
                    UserName = "mkerciku",
                    Email = "mariokerciku91@gmail.com"
                };

                await _userManager.CreateAsync(user, "Deloitte21!");
            }


            if (!_context.Trips.Any())
            {
                var usTrip = new Trip()
                {
                    DateCreated = DateTime.UtcNow,
                    Name = "US Trip",
                    UserName = "mkerciku",
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
                    UserName = "mkerciku",
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
