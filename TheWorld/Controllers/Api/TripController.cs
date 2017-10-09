using AutoMapper;
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

            var results = _repository.GetAllTrips();

            return Ok(Mapper.Map<IEnumerable<TripViewModel>>(results));
        }

        [HttpPost("")]
        public IActionResult Post([FromBody]TripViewModel theTrip) {
            if (ModelState.IsValid)
            {

                var newTrip = Mapper.Map<Trip>(theTrip);

                return Created($"api/trips/{theTrip.Name}", Mapper.Map<TripViewModel>(newTrip));

            }

            return BadRequest(ModelState);
        }
    }
}
