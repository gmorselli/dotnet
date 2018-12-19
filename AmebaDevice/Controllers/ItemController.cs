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
    public class ItemController : ApiController
    {
        ItemService itemService;
        // GET: api/Item

        public ItemController()
        {
            itemService = new ItemService();
        }
        public IEnumerable<ItemDTO> Get()
        {
            return itemService.Get();
        }

        // GET: api/Item/5
        public ItemDTO Get(int id)
        {
            return itemService.Get(id);
        }

        // POST: api/Item
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Item/5
        public ItemDTO Put(int id, string seriale, string consumoEnergetico, int idItemType, int idRoom, int idThing)
        {
            return itemService.Modifica(id, seriale, consumoEnergetico, idItemType, idRoom, idThing);
        }

        // DELETE: api/Item/5
        public String Delete(int id)
        {
            itemService.Delete(id);
            return "L'item con id=" + id + " è stato eliminato";
        }

        [HttpPost]
        [Route("api/Item/Inserisci")]
        public String Inserisci(int id, string seriale, string consumoEnergetico, int idItemType, int idRoom, int idThing)
        {
            itemService.Associa(id, seriale, consumoEnergetico, idItemType, idRoom, idThing);
            return "l'Item con id=" + id + " è stato inserito";
        }
    }
}
