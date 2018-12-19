using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class ThingConverter
    {
        public static ThingDTO convertToDto(Thing t)
        {
            ThingDTO thingDTO = new ThingDTO();
            thingDTO.ID = t.ThingID;
            thingDTO.Num_Uscite = t.Num_Uscite;
            thingDTO.Prezzo = t.Prezzo;
            if (t.Customer != null)
                thingDTO.CustomerDTO = CustomerConverter.convertToDto(t.Customer);
            else
                thingDTO.CustomerDTO = null;
            thingDTO.BuildingDTO = BuildingConverter.convertToDto(t.Building);
            return thingDTO;
        }

        public static Thing ConvertToThing(ThingDTO tDTO)
        {
            Thing thing = new Thing();
            thing.ThingID = tDTO.ID;
            thing.Num_Uscite = tDTO.Num_Uscite;
            thing.Prezzo = tDTO.Prezzo;
            if (tDTO.CustomerDTO != null)
                thing.Customer = CustomerConverter.convertToCustomer(tDTO.CustomerDTO);
            else
                thing.Customer = null;
            thing.Building = BuildingConverter.convertToBuilding(tDTO.BuildingDTO);
            return thing;
        }
    }
}