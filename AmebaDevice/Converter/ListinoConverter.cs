using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class ListinoConverter
    {

        public static ListinoDTO convertToDTO(Listino l)
        {
            ListinoDTO lDTO = new ListinoDTO();
            lDTO.id = l.ListinoID;
            lDTO.anno = l.Anno;
            lDTO.nomeListino = l.Nome;
            if(l.Installer!=null)
                lDTO.installer = CustomerConverter.convertToDto(l.Installer);
            if (l.Manufacturer != null)
                lDTO.idManufacturer = CustomerConverter.convertToDto(l.Manufacturer);
            return lDTO;
        }

        public static Listino convertToListino(ListinoDTO lDTO)
        {
            Listino l = new Listino();
            l.ListinoID = lDTO.id;
            l.Anno = lDTO.anno;
            l.Nome = lDTO.nomeListino;
            if(lDTO.installer!=null)
                l.Installer = CustomerConverter.convertToCustomer(lDTO.installer);
            if (lDTO.idManufacturer != null)
                l.Manufacturer = CustomerConverter.convertToCustomer(lDTO.idManufacturer);
            return l;
        }



    }
}