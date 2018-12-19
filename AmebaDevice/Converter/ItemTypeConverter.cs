using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class ItemTypeConverter
    {
        public static ItemTypeDTO ConverToDTO (ItemType item)
        {
            ItemTypeDTO ItemType = new ItemTypeDTO();
            ItemType.ID = item.ItemTypeID;
            ItemType.Categoria = item.Categoria;
            ItemType.Marca = item.Marca;
            ItemType.Modello = item.Modello;
            ItemType.Descrizione = item.Descrizione;
            if (item.Customer != null)
                ItemType.CustomerDTO = CustomerConverter.convertToDto(item.Customer);
            return ItemType;
        }

        public static ItemType ConvertToItemType(ItemTypeDTO item)
        {
            ItemType ItemType = new ItemType();
            ItemType.ItemTypeID = item.ID;
            ItemType.Categoria = item.Categoria;
            ItemType.Marca = item.Marca;
            ItemType.Modello = item.Modello;
            ItemType.Descrizione = item.Descrizione;
            if(item.CustomerDTO!=null)
                ItemType.Customer = CustomerConverter.convertToCustomer(item.CustomerDTO);
            return ItemType;
        }
    }
}