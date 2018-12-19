using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class RoomConverter
    {
        public static RoomDTO convertToDto(Room r)
        {
            RoomDTO room = new RoomDTO();
            room.ID=r.RoomId;
            room.Descrizione=r.Descrizione;
            room.Floor=FloorConverter.convertToDto(r.Floor);
            room.NomeRoom=r.Nome;
            return room;
        }

        public static Room convertToRoom(RoomDTO r)
        {
            Room room = new Room();
            room.RoomId = r.ID;
            room.Descrizione = r.Descrizione;
            room.Floor = FloorConverter.convertToFloor(r.Floor);
            room.Nome = r.NomeRoom;
            return room;
        }
    }
}