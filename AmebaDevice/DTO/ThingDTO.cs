using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ThingDTO
    {
        public int id { get; set; }
        public string numUscite { get; set; }
        public double prezzo { get; set; }
        public CustomerDTO customer { get; set; }
        public BuildingDTO building { get; set; }

        public ThingDTO()
        {
        }

        public ThingDTO(int id, String num_Uscite, double prezzo, CustomerDTO customerDTO, BuildingDTO buildingDTO)
        {
            this.id = id;
            this.numUscite = num_Uscite;
            this.prezzo = prezzo;
            this.customer = customerDTO;
            this.building = buildingDTO;
        }

    }
}