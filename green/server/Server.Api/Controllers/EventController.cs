using Microsoft.AspNetCore.Mvc;

namespace Server.Api.Controllers
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
