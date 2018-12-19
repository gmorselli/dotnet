using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class PrezzoDTO
    {

        public int id { get; set; }
        public double prezzo { get; set; }
        public ListinoDTO listino { get; set; }
        public ItemTypeDTO itemType { get; set; }

        public PrezzoDTO()
        {

        }

        public PrezzoDTO(int id, double prezzo, ListinoDTO listinoDTO, ItemTypeDTO itemTypeDTO)
        {
            this.id = id;
            this.prezzo = prezzo;
            this.listino = listinoDTO;
            this.itemType = itemTypeDTO;
        }

    }
}