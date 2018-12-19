using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class BuildingConverter
    {

        public static BuildingDTO convertToDto(Building b)
        {
            BuildingDTO building = new BuildingDTO();
            building.ID=b.BuildingID;
            building.Cap=b.Cap;
            building.City=b.Citta;
            building.Address = b.Indirizzo;
            building.Interno = b.Interno;
            
            if (b.Customer != null)
                building.CustomerDTO=CustomerConverter.convertToDto(b.Customer);
            /*
            if (b.getOwner() != null)
                building.setOwner(CustomerConverter.convertToDto(b.getOwner()));
                */
            return building;
        }

        public static Building convertToBuilding(BuildingDTO b)
        {
            Building building = new Building();
            building.BuildingID = b.ID;
            building.Cap = b.Cap;
            building.Citta = b.City;
            building.Indirizzo = b.Address;
            building.Interno = b.Interno;

            /*
            if (b.getOwner() != null)
                building.setOwner(CustomerConverter.convertToCustomer(b.getOwner()));
                */
            if (b.CustomerDTO != null)
                building.Customer=CustomerConverter.convertToCustomer(b.CustomerDTO);
                
            return building;
        }

    }
}