using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Converter
{
    public class CustomerConverter
    {

        public static CustomerDTO convertToDto(Customer c)
        {
            CustomerDTO customerDTO = new CustomerDTO();
            customerDTO.id=c.CustomerID;
            customerDTO.nome=c.Nome;
            customerDTO.cognome=c.Cognome;
            customerDTO.email=c.Email;
            customerDTO.username=c.Username;
            customerDTO.password=c.Password;
            customerDTO.userRole=c.User_role;
            return customerDTO;
        }

        public static Customer convertToCustomer(CustomerDTO c)
        {
            Customer customer = new Customer();
            customer.CustomerID = c.id;
            customer.Nome = c.nome;
            customer.Cognome = c.cognome;
            customer.Email = c.email;
            customer.Username = c.username;
            customer.Password = c.password;
            customer.User_role = c.userRole;
            return customer;
        }

    }
}