using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheWorld.Models;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        private IWorldRepository _repository;
        private ILogger<AppController> _logger;

        public AppController(IWorldRepository repository,ILogger<AppController> logger )
        {
            _repository = repository;
            _logger = logger;
        }

        public IActionResult Index()
        {
           
                return View();
        }

        [Authorize]
        public IActionResult Trips()
        {
            try
            {
                var trips = _repository.GetAllTrips();

                return View(trips);
            }
            catch (Exception)
            {

                _logger.LogError($"Failed to get trips in Index page");
                return Redirect("/error");
            }
            
        }


        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            return View();
        }


        public IActionResult About()
        {
            return View();
        }
    }
}
