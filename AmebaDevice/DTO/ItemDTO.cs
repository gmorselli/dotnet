using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ItemDTO
    {
        public int ID { get; set; }
        public string Seriale { get; set; }
        public string ConsumoEnergetico { get; set; }
        public ItemTypeDTO ItemTypeDTO { get; set; }
        public RoomDTO RoomDTO { get; set; }
        public ThingDTO ThingDTO { get; set; }

        public ItemDTO()
        {

        }

        public ItemDTO(int ID, string Seriale, string ConsumoEnergetico, ItemTypeDTO ItemTypeDTO, RoomDTO RoomDTO, ThingDTO ThingDTO)
        {
            this.ID = ID;
            this.Seriale = Seriale;
            this.ConsumoEnergetico = ConsumoEnergetico;
            this.ItemTypeDTO = ItemTypeDTO;
            this.RoomDTO = RoomDTO;
            this.ThingDTO = ThingDTO;
        }
    }


}