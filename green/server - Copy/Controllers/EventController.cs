using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("event")]
    public class EventController
    {
        [HttpGet]
        [Route("public")]
        public IActionResult All()
        {
            return new JsonResult("");
        }
    }
}
