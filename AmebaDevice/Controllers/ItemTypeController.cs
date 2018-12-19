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
    public class ItemTypeController : ApiController
    {
        ItemTypeService ItemTypeService;
        public ItemTypeController()
        {
            ItemTypeService = new ItemTypeService();
        }
        // GET: api/ItemType
        public IEnumerable<ItemTypeDTO> Get()
        {
            return ItemTypeService.Get();
        }

        // GET: api/ItemType/5
        public ItemTypeDTO Get(int id)
        {
            return ItemTypeService.Get(id);
        }

        // POST: api/ItemType
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ItemType/5
        public ItemTypeDTO Put(int id, string categoria, string descrizione, string marca, string modello, int idCustomer)
        {
            return ItemTypeService.Modifica(id, categoria, descrizione, marca, modello, idCustomer);
        }

        // DELETE: api/ItemType/5
        public string Delete(int id)
        {
            ItemTypeService.Delete(id);
            return "eliminato item con id : " + id;
        }

        [HttpPost]
        [Route("api/ItemType/Inserisci")]
        public string Associa(string categoria, string descrizione, string marca, string modello, int idCustomer)
        {
            ItemTypeService.Associa(categoria, descrizione, marca, modello, idCustomer);
            return "inserimento dell'ItemType effettuata con successo ";

        }
    }
}
