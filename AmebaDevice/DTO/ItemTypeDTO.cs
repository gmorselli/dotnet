using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ItemTypeDTO
    {
        public int ID { get; set; }
        public string Categoria { get; set; }
        public string Marca { get; set; }
        public string Modello { get; set; }

        public string Descrizione { get; set; }
        public CustomerDTO CustomerDTO { get; set; }

        public ItemTypeDTO()
        {

        }

        public ItemTypeDTO(int ID, string Categoria,string Marca, string Modello, string Descrizione, CustomerDTO CustomerDTO)
        {
            this.ID = ID;
            this.Categoria = Categoria;
            this.Marca = Marca;
            this.Modello = Modello;
            this.Descrizione = Descrizione;
            this.CustomerDTO = CustomerDTO;
        }

    }

    

}