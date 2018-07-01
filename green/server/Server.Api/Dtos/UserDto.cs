using System.Collections.Generic;
using Newtonsoft.Json;

namespace Server.Api.Dtos
{
    public class UserDto
    {
        public UserDto()
        {

        }

        public string Name { get; set; }
        public string ProfileId { get; set; }
    }
}
