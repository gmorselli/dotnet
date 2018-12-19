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
    public class FloorController : ApiController
    {

        FloorService floorService;

        public FloorController()
        {
            floorService = new FloorService();
        }

        // GET: api/Floor
        public IEnumerable<FloorDTO> Get()
        {
            return floorService.Get();
        }

        // GET: api/Floor/5
        public FloorDTO Get(int id)
        {
            return floorService.Get(id);
        }

        [HttpGet]
        [Route("GetByBuilding")]
        public IEnumerable<FloorDTO> GetByBuilding(int idBuilding)
        {
            return floorService.getAllByBuilding(idBuilding);
        }

        [HttpPost]
        [Route("InserisciF")]
        public String Inserisci(String nome, String descrizione, int idBuilding)
        {
            floorService.Associa(nome, descrizione, idBuilding);
            return "Il floor con nome" + nome + " è stato inserito";
        }

        // POST: api/Floor
        public void Post([FromBody]string value)
        {
        }


        // PUT: api/Floor/5?nome=<nome>&descrizione=<descrizione>&...
        public FloorDTO Put(int id, String nome, String descrizione, int idBuilding)
        {
            return floorService.Modifica(id, nome, descrizione, idBuilding);
        }

        // DELETE: api/Floor/5
        public string Delete(int id)
        {
            floorService.Delete(id);
            return "Il floor con id" + id + " è stato eliminato";
        }
    }
}
