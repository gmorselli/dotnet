using AmebaDevice.DAL;
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
    [EnableCors(origins: "http://localhost:4200", headers:"*", methods:"*")]
    public class CustomerController : ApiController
    {
        
        private CustomerService customerService;

        public CustomerController()
        {
            customerService = new CustomerService();
        }

        // GET: api/Customer
        public IEnumerable<CustomerDTO> Get()
        {
            return customerService.Get();
        }

        [HttpGet]
        [Route("api/GetByUserRole")]
        public IEnumerable<CustomerDTO> GetByUserRole(string userRole)
        {
            return customerService.GetByUserRole(userRole);
        }

        // GET: api/Customer/5
        public CustomerDTO Get(int id)
        {
            return customerService.Get(id);
        }

        // POST: api/Customer
        public void Post([FromBody]string value)
        {
        }
        

        //GET: Inserisci/?nome=<nome>&cognome=<cognome>&username=<username>&password=<password>&user_role=<user_role>&email=<email>
        [HttpPost]
        [Route("api/Inserisci")]
        public string Inserisci(string nome, string cognome, string username, string password, string user_role, string email)
        {
            customerService.Inserisci(nome,cognome,username,password,user_role,email);
            return "Inserito utente con nome:" + username;
        }



        // PUT: api/Customer?username=<username>&field=<field>&...
        public CustomerDTO Put(string username, int field, string newValue)
        {
            return customerService.Modifica(username, field, newValue);
        }

        /*
        // PUT: api/Customer/5?nome=<nome>&cognome=<cognome>&...
        public CustomerDTO Put(int id, string nome, string cognome, string username, string password, string user_role, string email)
        {
            return customerService.Modifica(id, nome, cognome, username, password, user_role, email);
        }
        */

        // DELETE: api/Customer/5
        public bool Delete(string username)
        {
            customerService.Delete(username);
            return true;
        }
        
    }
}
