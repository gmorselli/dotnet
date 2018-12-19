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
            room.id=r.RoomId;
            room.descrizione=r.Descrizione;
            room.floor=FloorConverter.convertToDto(r.Floor);
            room.nomeRoom=r.Nome;
            return room;
        }

        public static Room convertToRoom(RoomDTO r)
        {
            Room room = new Room();
            room.RoomId = r.id;
            room.Descrizione = r.descrizione;
            room.Floor = FloorConverter.convertToFloor(r.floor);
            room.Nome = r.nomeRoom;
            return room;
        }
    }
}