using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class PrezzoConverter
    {

        public static PrezzoDTO convertToDTO(Prezzo p)
        {
            PrezzoDTO pDTO = new PrezzoDTO();
            pDTO.id = p.PrezzoID;
            pDTO.prezzo = p.Price;
            pDTO.itemType = ItemTypeConverter.ConverToDTO(p.ItemType);
            pDTO.listino = ListinoConverter.convertToDTO(p.Listino);
            return pDTO;
        }

        public static Prezzo convertToPrezzo(PrezzoDTO pDTO)
        {
            Prezzo p = new Prezzo();
            p.PrezzoID = pDTO.id;
            p.Price = pDTO.prezzo;
            p.ItemType = ItemTypeConverter.ConvertToItemType(pDTO.itemType);
            p.Listino = ListinoConverter.convertToListino(pDTO.listino);
            return p;
        }

    }
}