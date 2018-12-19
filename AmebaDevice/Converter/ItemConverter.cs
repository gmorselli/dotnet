using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class ItemConverter
    {

        public static ItemDTO convertToDTO(Item item)
        {
            ItemDTO itemDTO = new ItemDTO();
            itemDTO.id = item.ItemID;
            itemDTO.consumoEnergetico = item.ConsumoEnergetico;
            itemDTO.seriale = item.Seriale;
            if (item.Room != null)
                itemDTO.room = RoomConverter.convertToDto(item.Room);
            if (item.ItemType != null)
                itemDTO.itemType = ItemTypeConverter.ConverToDTO(item.ItemType);
            if (item.Thing != null)
                itemDTO.thing = ThingConverter.convertToDto(item.Thing);
            return itemDTO;
        }

        public static Item convertToItem(ItemDTO itemDTO)
        {
            Item item = new Item();
            item.ItemID = itemDTO.id;
            item.ConsumoEnergetico = itemDTO.consumoEnergetico;
            item.Seriale = itemDTO.seriale;
            if (itemDTO.room != null)
                item.Room = RoomConverter.convertToRoom(itemDTO.room);
            if (itemDTO.itemType != null)
                item.ItemType = ItemTypeConverter.ConvertToItemType(itemDTO.itemType);
            if (itemDTO.thing != null)
                item.Thing = ThingConverter.convertToThing(itemDTO.thing);
            return item;

        }

    }
}