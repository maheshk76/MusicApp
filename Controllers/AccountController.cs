using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

using MusicApp.Models;
namespace MusicApp.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }
        
        public ActionResult Signup()
        {
            return View();
        }
        public ActionResult Profile()
        {
            return View();
        }
        public ActionResult Settings()
        {
            return View();
        }
    }
}