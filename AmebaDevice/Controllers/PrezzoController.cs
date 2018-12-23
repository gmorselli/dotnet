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
    public class PrezzoController : ApiController
    {

        public PrezzoService prezzoService;

        public PrezzoController()
        {
            prezzoService = new PrezzoService();
        }

        [HttpPost]
        [Route("api/Prezzo/InserisciItemTypeInListino")]
        public string InserisciItemTypeInListino(double prezzo, int idItemType, int idListino)
        {
            prezzoService.InserisciItemTypeInListino(prezzo, idItemType, idListino);
            return "Inserimento avvenuto con successo";
        }

    }
}
