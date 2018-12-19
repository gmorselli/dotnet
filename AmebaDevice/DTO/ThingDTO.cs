using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ThingDTO
    {
        public int ID { get; set; }
        public string Num_Uscite { get; set; }
        public double Prezzo { get; set; }
        public CustomerDTO CustomerDTO { get; set; }
        public BuildingDTO BuildingDTO { get; set; }

        public ThingDTO()
        {
        }

        public ThingDTO(int id, String num_Uscite, double prezzo, CustomerDTO customerDTO, BuildingDTO buildingDTO)
        {
            this.ID = id;
            this.Num_Uscite = num_Uscite;
            this.Prezzo = prezzo;
            this.CustomerDTO = customerDTO;
            this.BuildingDTO = buildingDTO;
        }

    }
}