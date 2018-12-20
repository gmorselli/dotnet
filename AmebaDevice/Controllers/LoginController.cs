using AmebaDevice.DTO;
using AmebaDevice.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AmebaDevice.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        CustomerService customerService;

        public LoginController()
        {
            customerService = new CustomerService();
        }

        [HttpGet]
        [Route("api/Login/Login")]
        public CustomerDTO Login (string username, string password)
        {
            CustomerDTO customerDTO = customerService.login(username, password);
            return customerDTO;
        }
    }
}
