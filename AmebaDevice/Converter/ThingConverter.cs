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
            thingDTO.id = t.ThingID;
            thingDTO.numUscite = t.Num_Uscite;
            thingDTO.prezzo = t.Prezzo;
            if (t.Customer != null)
                thingDTO.customer = CustomerConverter.convertToDto(t.Customer);
            else
                thingDTO.customer = null;
            thingDTO.building = BuildingConverter.convertToDto(t.Building);
            return thingDTO;
        }

        public static Thing convertToThing(ThingDTO tDTO)
        {
            Thing thing = new Thing();
            thing.ThingID = tDTO.id;
            thing.Num_Uscite = tDTO.numUscite;
            thing.Prezzo = tDTO.prezzo;
            if (tDTO.customer!= null)
                thing.Customer = CustomerConverter.convertToCustomer(tDTO.customer);
            else
                thing.Customer = null;
            thing.Building = BuildingConverter.convertToBuilding(tDTO.building);
            return thing;
        }
    }
}