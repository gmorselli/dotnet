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
            building.id=b.BuildingID;
            building.cap=b.Cap;
            building.city=b.Citta;
            building.address = b.Indirizzo;
            building.interno = b.Interno;
            
            if (b.Customer != null)
                building.customer=CustomerConverter.convertToDto(b.Customer);
            /*
            if (b.getOwner() != null)
                building.setOwner(CustomerConverter.convertToDto(b.getOwner()));
                */
            return building;
        }

        public static Building convertToBuilding(BuildingDTO b)
        {
            Building building = new Building();
            building.BuildingID = b.id;
            building.Cap = b.cap;
            building.Citta = b.city;
            building.Indirizzo = b.address;
            building.Interno = b.interno;

            /*
            if (b.getOwner() != null)
                building.setOwner(CustomerConverter.convertToCustomer(b.getOwner()));
                */
            if (b.customer != null)
                building.Customer=CustomerConverter.convertToCustomer(b.customer);
                
            return building;
        }

    }
}