using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class ItemTypeDTO
    {
        public int id { get; set; }
        public string categoria { get; set; }
        public string marca { get; set; }
        public string modello { get; set; }
        public string descrizione { get; set; }
        public CustomerDTO customer { get; set; }

        public ItemTypeDTO()
        {

        }

        public ItemTypeDTO(int ID, string Categoria,string Marca, string Modello, string Descrizione, CustomerDTO CustomerDTO)
        {
            this.id = ID;
            this.categoria = Categoria;
            this.marca = Marca;
            this.modello = Modello;
            this.descrizione = Descrizione;
            this.customer = CustomerDTO;
        }

    }

    

}