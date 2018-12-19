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
            pDTO.ID = p.PrezzoID;
            pDTO.Prezzo = p.Price;
            pDTO.ItemTypeDTO = ItemTypeConverter.ConverToDTO(p.ItemType);
            pDTO.ListinoDTO = ListinoConverter.convertToDTO(p.Listino);
            return pDTO;
        }

        public static Prezzo convertToPrezzo(PrezzoDTO pDTO)
        {
            Prezzo p = new Prezzo();
            p.PrezzoID = pDTO.ID;
            p.Price = pDTO.Prezzo;
            p.ItemType = ItemTypeConverter.ConvertToItemType(pDTO.ItemTypeDTO);
            p.Listino = ListinoConverter.convertToListino(pDTO.ListinoDTO);
            return p;
        }

    }
}