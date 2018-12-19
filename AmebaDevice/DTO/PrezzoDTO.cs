using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class PrezzoDTO
    {

        public int ID { get; set; }
        public double Prezzo { get; set; }
        public ListinoDTO ListinoDTO { get; set; }
        public ItemTypeDTO ItemTypeDTO { get; set; }

        public PrezzoDTO()
        {

        }

        public PrezzoDTO(int id, double prezzo, ListinoDTO listinoDTO, ItemTypeDTO itemTypeDTO)
        {
            this.ID = id;
            this.Prezzo = prezzo;
            this.ListinoDTO = listinoDTO;
            this.ItemTypeDTO = itemTypeDTO;
        }

    }
}