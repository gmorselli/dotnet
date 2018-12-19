using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class RoomDTO
    {

        public int id { get; set; }
        public string nomeRoom{ get; set; }
        public string descrizione { get; set; }
        public FloorDTO floor { get; set; }
        

        public RoomDTO()
        {
        }

        public RoomDTO(int id, String nomeRoom, String descrizione, FloorDTO floor)
        {
            this.id = id;
            this.nomeRoom = nomeRoom;
            this.descrizione = descrizione;
            this.floor = floor;
        }

        
    }
}