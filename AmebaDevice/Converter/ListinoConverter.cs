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
            lDTO.ID = l.ListinoID;
            lDTO.Anno = l.Anno;
            lDTO.Nome = l.Nome;
            if(l.Installer!=null)
                lDTO.InstallerDTO = CustomerConverter.convertToDto(l.Installer);
            if (l.Manufacturer != null)
                lDTO.ManufacturerDTO = CustomerConverter.convertToDto(l.Manufacturer);
            return lDTO;
        }

        public static Listino convertToListino(ListinoDTO lDTO)
        {
            Listino l = new Listino();
            l.ListinoID = lDTO.ID;
            l.Anno = lDTO.Anno;
            l.Nome = lDTO.Nome;
            if(lDTO.InstallerDTO!=null)
                l.Installer = CustomerConverter.convertToCustomer(lDTO.InstallerDTO);
            if (lDTO.ManufacturerDTO != null)
                l.Manufacturer = CustomerConverter.convertToCustomer(lDTO.ManufacturerDTO);
            return l;
        }



    }
}