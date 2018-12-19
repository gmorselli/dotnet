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
            ItemType.id = item.ItemTypeID;
            ItemType.categoria = item.Categoria;
            ItemType.marca = item.Marca;
            ItemType.modello = item.Modello;
            ItemType.descrizione = item.Descrizione;
            if (item.Customer != null)
                ItemType.customer = CustomerConverter.convertToDto(item.Customer);
            return ItemType;
        }

        public static ItemType ConvertToItemType(ItemTypeDTO item)
        {
            ItemType ItemType = new ItemType();
            ItemType.ItemTypeID = item.id;
            ItemType.Categoria = item.categoria;
            ItemType.Marca = item.marca;
            ItemType.Modello = item.modello;
            ItemType.Descrizione = item.descrizione;
            if(item.customer!=null)
                ItemType.Customer = CustomerConverter.convertToCustomer(item.customer);
            return ItemType;
        }
    }
}