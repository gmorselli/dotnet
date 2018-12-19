using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class CustomerDTO
    {

        public int id { get; set; }
        public String nome { get; set; }
        public String cognome { get; set; }
        public String username { get; set; }
        public String password { get; set; }
        public String userRole { get; set; }
        public String email { get; set; }

        public CustomerDTO()
        {

        }

        public CustomerDTO(int id, String nome, String cognome, String email, String username,
                String password, String userRole)
        {
            this.id = id;
            this.nome = nome;
            this.cognome = cognome;
            this.email = email;
            this.username = username;
            this.password = password;
            this.userRole = userRole;
        }

        

    }
}