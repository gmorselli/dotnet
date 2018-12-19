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
            itemDTO.ID = item.ItemID;
            itemDTO.ConsumoEnergetico = item.ConsumoEnergetico;
            itemDTO.Seriale = item.Seriale;
            if (item.Room != null)
                itemDTO.RoomDTO = RoomConverter.convertToDto(item.Room);
            if (item.ItemType != null)
                itemDTO.ItemTypeDTO = ItemTypeConverter.ConverToDTO(item.ItemType);
            if (item.Thing != null)
                itemDTO.ThingDTO = ThingConverter.convertToDto(item.Thing);
            return itemDTO;
        }

            public static Item convertToItem(ItemDTO itemDTO)
            {
            Item item = new Item();
            item.ItemID = itemDTO.ID;
            item.ConsumoEnergetico = itemDTO.ConsumoEnergetico;
            item.Seriale = itemDTO.Seriale;
            if (itemDTO.RoomDTO != null)
                item.Room = RoomConverter.convertToRoom(itemDTO.RoomDTO);
            if (itemDTO.ItemTypeDTO != null)
                item.ItemType = ItemTypeConverter.ConvertToItemType(itemDTO.ItemTypeDTO);
            if (itemDTO.ThingDTO != null)
                item.Thing = ThingConverter.ConvertToThing(itemDTO.ThingDTO);
            return item;

            }
                    
            


        }
    }
