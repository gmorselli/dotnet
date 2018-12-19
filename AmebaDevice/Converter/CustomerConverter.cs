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
            customerDTO.ID=c.CustomerID;
            customerDTO.Nome=c.Nome;
            customerDTO.Cognome=c.Cognome;
            customerDTO.Email=c.Email;
            customerDTO.Username=c.Username;
            customerDTO.Password=c.Password;
            customerDTO.User_role=c.User_role;
            return customerDTO;
        }

        public static Customer convertToCustomer(CustomerDTO c)
        {
            Customer customer = new Customer();
            customer.CustomerID = c.ID;
            customer.Nome = c.Nome;
            customer.Cognome = c.Cognome;
            customer.Email = c.Email;
            customer.Username = c.Username;
            customer.Password = c.Password;
            customer.User_role = c.User_role;
            return customer;
        }

    }
}