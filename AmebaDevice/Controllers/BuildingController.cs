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
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class BuildingController : ApiController
    {

        private BuildingService buildingService;

        public BuildingController()
        {
            buildingService = new BuildingService();
        }

        // GET: api/Building
        public IEnumerable<BuildingDTO> Get()
        {
            return buildingService.Get();
        }

        // GET: api/Building/5
        public BuildingDTO Get(int id)
        {
            return buildingService.Get(id);
        }

        // POST: api/Building
        public void Post([FromBody]string value)
        {
        }

        [HttpPost]
        [Route("api/Building/InserisciB")]
        public String Inserisci(String indirizzo, String cap, String citta, String interno,int id)
        {
            buildingService.Associa(indirizzo,cap,citta,interno,id);
            return "Il building con indirizzo" + indirizzo + " è stato inserito";
        }

        // PUT: api/Building/5?indirizzo=<indirizzo>&cap=<cap>&...
        public BuildingDTO Put(int id, String indirizzo, String cap, String citta, String interno)
        {
            return buildingService.Modifica(id, indirizzo, cap, citta, interno);
        }

        // DELETE: api/Building/5
        public string Delete(int id)
        {
            buildingService.Delete(id);
            return "Building con id " + id + " eliminato";
        }

        [HttpPost]
        [Route("api/Building/AssociaACustomer")]
        public CustomerDTO AssociaACustomer(int buildingID, string username)
        {
            return buildingService.AssociaACustomer(buildingID, username);
        }
    }
}
