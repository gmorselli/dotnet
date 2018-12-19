using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ListinoDTO
    {
        public int ID { get; set; }
        public string Anno { get; set; }
        public string Nome { get; set; }
        public CustomerDTO InstallerDTO { get; set; }
        public CustomerDTO ManufacturerDTO { get; set; }

        public ListinoDTO()
        {

        }

        public ListinoDTO(int id, string anno, string nome, CustomerDTO installerDTO, CustomerDTO manufacturerDTO)
        {
            this.ID = id;
            this.Anno = anno;
            this.Nome = nome;
            this.InstallerDTO = installerDTO;
            this.ManufacturerDTO = manufacturerDTO;
        }

    }
}