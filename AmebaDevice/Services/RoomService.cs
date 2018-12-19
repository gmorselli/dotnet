using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class RoomService
    {
        private ModelloDatiDbContext modelloDatiDbContext;

        public RoomService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
        }


        public IEnumerable<RoomDTO> Get()
        {
            List<RoomDTO> l = new List<RoomDTO>();

            foreach (Room r in modelloDatiDbContext.Rooms)
            {
                l.Add(RoomConverter.convertToDto(r));
            }

            return l;
        }

        public RoomDTO Get(int id)
        {
            Room r = modelloDatiDbContext.Rooms.Find(id);
            return RoomConverter.convertToDto(r);
        }


        public void Inserisci(Room r)
        {
            modelloDatiDbContext.SaveChanges();
        }

        public void Associa(String nome, String descrizione, int idFloor)
        {
            Floor f = modelloDatiDbContext.Floors.Find(idFloor);
            Room r = modelloDatiDbContext.Rooms.Add(new Room() { Nome = nome, Descrizione = descrizione, Floor = f });
            Inserisci(r);
        }

        public IEnumerable<RoomDTO> getAllByFloor(int idFloor)
        {
            List<Room> rooms = modelloDatiDbContext.Rooms.Where(r => r.Floor.FloorID == idFloor).ToList();
            List<RoomDTO> toReturn = new List<RoomDTO>();
            rooms.ForEach(r => toReturn.Add(RoomConverter.convertToDto(r)));
            return toReturn;
        }

        public void Delete(int id)
        {
            modelloDatiDbContext.Rooms.Remove(modelloDatiDbContext.Rooms.Find(id));
            modelloDatiDbContext.SaveChanges();
        }

        public RoomDTO Modifica(int id, String nome, String descrizione, int floorID)
        {
            Room room = new Room();
            foreach (Room r in modelloDatiDbContext.Rooms)
            {
                if (r.RoomId == id)
                {
                    room = modelloDatiDbContext.Rooms.Where(rr => rr.RoomId == id).FirstOrDefault();
                    room.Nome = nome;
                    room.Descrizione = descrizione;
                    room.Floor = modelloDatiDbContext.Floors.Find(floorID);
                }
            }
            modelloDatiDbContext.SaveChanges();
            return RoomConverter.convertToDto(room);
        }

    }
}