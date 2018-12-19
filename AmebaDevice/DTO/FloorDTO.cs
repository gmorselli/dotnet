using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class FloorDTO
    {

        public int id { get; set; }
        public string nomeFloor { get; set; }
        public string descrizione { get; set; }
        public BuildingDTO building { get; set; }
        

        public FloorDTO()
        {
        }

        public FloorDTO(int id, string nomeFloor, string descrizione, BuildingDTO building)
        {
            this.id = id;
            this.nomeFloor = nomeFloor;
            this.descrizione = descrizione;
            this.building = building;
        }

       
    }
}