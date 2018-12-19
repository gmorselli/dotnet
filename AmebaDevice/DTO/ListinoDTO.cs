using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ListinoDTO
    {
        public int id { get; set; }
        public string anno { get; set; }
        public string nomeListino { get; set; }
        public CustomerDTO installer { get; set; }
        public CustomerDTO idManufacturer { get; set; }

        public ListinoDTO()
        {

        }

        public ListinoDTO(int id, string anno, string nome, CustomerDTO installerDTO, CustomerDTO manufacturerDTO)
        {
            this.id = id;
            this.anno = anno;
            this.nomeListino = nome;
            this.installer = installerDTO;
            this.idManufacturer = manufacturerDTO;
        }

    }
}