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
    public class ThingController : ApiController
    {

        ThingService thingService;

        public ThingController()
        {
            thingService = new ThingService();
        }

        // GET: api/Thing
        public IEnumerable<ThingDTO> Get()
        {
            return thingService.Get();
        }

        // GET: api/Thing/5
        public ThingDTO Get(int id)
        {
            return thingService.Get(id);
        }

        // POST: api/Thing
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Thing/5?num_Uscite=<num_Uscite>&prezzo=<prezzo>&...
        public ThingDTO Put(int id, string num_Uscite, double prezzo, int customerID, int buildingID)
        {
            return thingService.Modifica(id, num_Uscite, prezzo, customerID, buildingID);
        }

        // DELETE: api/Thing/5
        public string Delete(int id)
        {
            thingService.Delete(id);
            return "La thing con id = " + id + "è stata eliminata";
        }

        [HttpPost]
        [Route("InserisciT")]
        public String Inserisci(string num_Uscite, double prezzo, int customerID, int buildingID)
        {
            thingService.Associa(num_Uscite, prezzo, customerID, buildingID);
            return "La thing è stata inserita";
        }
    }
}
