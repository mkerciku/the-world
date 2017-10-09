using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public class WorldRepository : IWorldRepository
    {
        private WorldContext _context;
        private ILogger<WorldRepository> _logger;

        public WorldRepository(WorldContext context, ILogger<WorldRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public void AddTrip(Trip trip)
        {
            _context.Add(trip);
        }

        public IEnumerable<Trip> GetAllTrips()
        {
            _logger.LogInformation("Getting all trips from database");

            return _context.Trips.ToList();
        }

        public Trip GetTripByName(string tripName)
        {
           return _context.Trips
                .Include(t=> t.Stops)
                .Where(t => t.Name == tripName)
                .FirstOrDefault();
        }

        public async Task< bool> SaveChangesAsync()
        {
           return (await _context.SaveChangesAsync())>0;
        }
    }
}
