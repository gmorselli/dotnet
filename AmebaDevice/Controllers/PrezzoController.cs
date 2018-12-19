using AmebaDevice.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmebaDevice.Controllers
{
    public class PrezzoController : ApiController
    {

        public PrezzoService prezzoService;

        public PrezzoController()
        {
            prezzoService = new PrezzoService();
        }

        public string AssociaItemTypeAListino(double prezzo, int idItemType, int idListino)
        {
            prezzoService.InserisciItemTypeInListino(prezzo, idItemType, idListino);
            return "Inserimento avvenuto con successo";
        }

    }
}
