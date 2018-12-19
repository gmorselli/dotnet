using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class RoomDTO
    {

        public int ID { get; set; }
        public string NomeRoom{ get; set; }
        public string Descrizione { get; set; }
        public FloorDTO Floor { get; set; }
        

        public RoomDTO()
        {
        }

        public RoomDTO(int id, String nomeRoom, String descrizione, FloorDTO floor)
        {
            this.ID = id;
            this.NomeRoom = nomeRoom;
            this.Descrizione = descrizione;
            this.Floor = floor;
        }

        
    }
}