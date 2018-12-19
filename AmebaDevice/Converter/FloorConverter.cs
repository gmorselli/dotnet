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
            floor.id=f.FloorID;
            floor.descrizione=f.Descrizione;
            floor.nomeFloor=f.Nome;
            floor.building=BuildingConverter.convertToDto(f.Building);
            return floor;
        }

        public static Floor convertToFloor(FloorDTO f)
        {
            Floor floor = new Floor();
            floor.FloorID= f.id;
            floor.Descrizione=f.descrizione;
            floor.Nome=f.nomeFloor;
            floor.Building=BuildingConverter.convertToBuilding(f.building);
            return floor;
        }

    }
}