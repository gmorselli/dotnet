using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ItemDTO
    {
        public int id { get; set; }
        public string seriale { get; set; }
        public string consumoEnergetico { get; set; }
        public ItemTypeDTO itemType { get; set; }
        public RoomDTO room { get; set; }
        public ThingDTO thing { get; set; }

        public ItemDTO()
        {

        }

        public ItemDTO(int ID, string Seriale, string ConsumoEnergetico, ItemTypeDTO ItemTypeDTO, RoomDTO RoomDTO, ThingDTO ThingDTO)
        {
            this.id = ID;
            this.seriale = Seriale;
            this.consumoEnergetico = ConsumoEnergetico;
            this.itemType = ItemTypeDTO;
            this.room = RoomDTO;
            this.thing = ThingDTO;
        }
    }


}