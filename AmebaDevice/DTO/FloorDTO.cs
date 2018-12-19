using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class FloorDTO
    {

        public int ID { get; set; }
        public string NomeFloor { get; set; }
        public string Descrizione { get; set; }
        public BuildingDTO Building { get; set; }
        

        public FloorDTO()
        {
        }

        public FloorDTO(int id, string nomeFloor, string descrizione, BuildingDTO building)
        {
            this.ID = id;
            this.NomeFloor = nomeFloor;
            this.Descrizione = descrizione;
            this.Building = building;
        }

       
    }
}