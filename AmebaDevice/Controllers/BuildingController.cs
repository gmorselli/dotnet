using AmebaDevice.DAL;
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
        [Route("InserisciB")]
        public String Inserisci(String indirizzo, String cap, String citta, String interno,int id)
        {
            buildingService.Associa(indirizzo,cap,citta,interno,id);
            return "Il building con indirizzo" + indirizzo + " è stato inserito";
        }

        // PUT: api/Building/5?indirizzo=<indirizzo>&cap=<cap>&...
        public BuildingDTO Put(int id, String indirizzo, String cap, String citta, String interno, int customerID)
        {
            return buildingService.Modifica(id, indirizzo, cap, citta, interno, customerID);
        }

        // DELETE: api/Building/5
        public string Delete(int id)
        {
            buildingService.Delete(id);
            return "Building con id " + id + " eliminato";
        }
    }
}
