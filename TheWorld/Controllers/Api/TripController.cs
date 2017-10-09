using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheWorld.Models;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Api
{
    [Route("api/trips")]
    public class TripController : Controller
    {
        private IWorldRepository _repository;

        public TripController(IWorldRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("")]
        public IActionResult Get() {

            return Ok(_repository.GetAllTrips());
        }

        [HttpPost("")]
        public IActionResult Post([FromBody]TripViewModel theTrip) {
            if (ModelState.IsValid)
            {
                return Created($"api/trips/{theTrip.Name}", theTrip);

            }

            return BadRequest(ModelState);
        }
    }
}
