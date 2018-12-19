using AmebaDevice.DTO;
using AmebaDevice.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmebaDevice.Controllers
{
    public class LoginController : ApiController
    {
        CustomerService customerService;

        public LoginController()
        {
            customerService = new CustomerService();
        }

        [HttpPost]
        [Route("login")]
        public CustomerDTO Login (string username, string password)
        {
            CustomerDTO customerDTO = customerService.login(username, password);
            return customerDTO;
        }
    }
}
