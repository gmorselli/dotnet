using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class CustomerDTO
    {

        public int ID { get; set; }
        public String Nome { get; set; }
        public String Cognome { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public String User_role { get; set; }
        public String Email { get; set; }

        public CustomerDTO()
        {

        }

        public CustomerDTO(int id, String nome, String cognome, String email, String username,
                String password, String userRole)
        {
            this.ID = id;
            this.Nome = nome;
            this.Cognome = cognome;
            this.Email = email;
            this.Username = username;
            this.Password = password;
            this.User_role = userRole;
        }

        

    }
}