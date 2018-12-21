using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class ItemService
    {

        private ModelloDatiDbContext modelloDatiDbContext;

        public ItemService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
        }

        public ItemDTO Associa(int id, string consumoEnergetico, string seriale, int idItemType, int idRoom, int idThing)
        {
            ItemType i = modelloDatiDbContext.ItemTypes.Find(idItemType);
            Room r = modelloDatiDbContext.Rooms.Find(idRoom);
            Thing t = modelloDatiDbContext.Things.Find(idThing);
            Item item = new Item() { ConsumoEnergetico = consumoEnergetico, Seriale = seriale, ItemType = i, Room = r, Thing = t };
            modelloDatiDbContext.Items.Add(item);
            Inserisci();
            return ItemConverter.convertToDTO(item);

        }

        public void Inserisci()
        {
            modelloDatiDbContext.SaveChanges();
        }

        public IEnumerable<ItemDTO> Get()
        {
            List<ItemDTO> list = new List<ItemDTO>();
            foreach (Item i in modelloDatiDbContext.Items)
            {
                list.Add(ItemConverter.convertToDTO(i));

            }
            return list;
        }

        public ItemDTO Get(int id)
        {
            Item item = modelloDatiDbContext.Items.Find(id);
            return ItemConverter.convertToDTO(item);
        }
        public ItemDTO Modifica(int id, string seriale, string consumoEnergetico, int idItemType, int idRoom, int idThing)
        {
            Item item = modelloDatiDbContext.Items.Find(id);
            //ItemType item = new ItemType();
            item.Seriale = seriale;
            item.ConsumoEnergetico = consumoEnergetico;
            item.ItemType = modelloDatiDbContext.ItemTypes.Find(idItemType);
            item.Room = modelloDatiDbContext.Rooms.Find(idRoom);
            item.Thing = modelloDatiDbContext.Things.Find(idThing);
            modelloDatiDbContext.SaveChanges();

            return ItemConverter.convertToDTO(item);
        }

        public void Delete(int id)
        {
            modelloDatiDbContext.Items.Remove(modelloDatiDbContext.Items.Find(id));
            modelloDatiDbContext.SaveChanges();
        }

        public IEnumerable<ItemDTO> findByRoom(int roomId)
        {
            Room room = new Room();
            room = modelloDatiDbContext.Rooms.Find(roomId);

            //Ottengo tutti gli item della Room
            List<Item> items = new List<Item>();
            items = room.Item.ToList();

            //Conversione
            List<ItemDTO> itemsDTO = new List<ItemDTO>();
            foreach(Item i in items)
            {
                itemsDTO.Add(ItemConverter.convertToDTO(i));
            }

            return itemsDTO;
        }


        public IEnumerable<ItemDTO> findByBuilding(int buildingId)
        {
            Building building = new Building();
            building = modelloDatiDbContext.Buildings.Find(buildingId);

            List<Item> items = new List<Item>();

            //Ottengo gli Item presenti dentro tutte le Room di tutti i Floor del Building
            foreach(Floor floor in building.Floor)
            {
                foreach(Room room in floor.Room)
                {
                    items.AddRange(room.Item);
                }
            }
            
            //Conversione
            List<ItemDTO> itemsDTO = new List<ItemDTO>();
            foreach(Item i in items)
            {
                itemsDTO.Add(ItemConverter.convertToDTO(i));
            }

            return itemsDTO;
        }

    }


}