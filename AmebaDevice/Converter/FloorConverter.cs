using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class FloorConverter
    {

        public static FloorDTO convertToDto(Floor f)
        {
            FloorDTO floor = new FloorDTO();
            floor.ID=f.FloorID;
            floor.Descrizione=f.Descrizione;
            floor.NomeFloor=f.Nome;
            floor.Building=BuildingConverter.convertToDto(f.Building);
            return floor;
        }

        public static Floor convertToFloor(FloorDTO f)
        {
            Floor floor = new Floor();
            floor.FloorID= f.ID;
            floor.Descrizione=f.Descrizione;
            floor.Nome=f.NomeFloor;
            floor.Building=BuildingConverter.convertToBuilding(f.Building);
            return floor;
        }

    }
}