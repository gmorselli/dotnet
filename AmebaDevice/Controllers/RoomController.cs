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
    public class RoomController : ApiController
    {

        RoomService roomService;

        public RoomController()
        {
            roomService = new RoomService();
        }

        // GET: api/Room
        public IEnumerable<RoomDTO> Get()
        {
            return roomService.Get();
        }

        // GET: api/Room/5
        public RoomDTO Get(int id)
        {
            return roomService.Get(id);
        }

        // POST: api/Room
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Room/5?nome=<nome>&descrizione=<descrizione>&...
        public RoomDTO Put(int id, String nome, String descrizione)
        {
            return roomService.Modifica(id,nome,descrizione);
        }

        // DELETE: api/Room/5
        public String Delete(int id)
        {
            roomService.Delete(id);
            return "La room con id = " + id + "è stata eliminata";
        }

        [HttpGet]
        [Route("api/GetByFloor")]
        public IEnumerable<RoomDTO> GetByFloor(int idFloor)
        {
            return roomService.getAllByFloor(idFloor);
        }


        [HttpPost]
        [Route("api/InserisciR")]
        public String Inserisci(String nome, String descrizione, int idFloor)
        {
            roomService.Associa(nome, descrizione, idFloor);
            return "La room con nome= " + nome + " è stata inserita";
        }


        [HttpGet]
        [Route("api/myFloor")]
        public FloorDTO myFloor(int roomId)
        {
            return roomService.myFloor(roomId);
        }
      
    }
}
