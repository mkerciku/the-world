using Microsoft.AspNetCore.Mvc;
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
        private WorldContext _context;

        public AppController(WorldContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {

            var data = _context.Trips.ToList();
            return View(data);
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
