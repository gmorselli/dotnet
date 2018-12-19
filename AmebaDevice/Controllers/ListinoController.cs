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
    public class ListinoController : ApiController
    {

        public ListinoService listinoService;

        public ListinoController()
        {
            listinoService = new ListinoService();
        }

        // GET: api/Listino
        public IEnumerable<ListinoDTO> Get()
        {
            return listinoService.Get();
        }

        // GET: api/Listino/5
        public ListinoDTO Get(int id)
        {
            return listinoService.Get(id);
        }

        // POST: api/Listino
        public void Post([FromBody]string value)
        {
        }

        [HttpPost]
        [Route("api/Listino/Inserisci")]
        public string Inserisci(string anno, string nome, int idInstaller, int idManufacturer)
        {
            listinoService.Associa(anno, nome, idInstaller, idManufacturer);
            return "Il listino"+nome+" è stato aggiunto";
        }

        // PUT: api/Listino/5?anno=<anno>&nome=<nome>&...
        public ListinoDTO Put(int id, string anno, string nome, int idInstaller, int idManufacturer)
        {
            return listinoService.Modifica(id, anno, nome, idInstaller, idManufacturer);
        }

        // DELETE: api/Listino/5
        public string Delete(int id)
        {
            listinoService.Delete(id);
            return "Il listino è stato eliminato";
        }
    }
}
