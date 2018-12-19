using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class CustomerService
    {
        private ModelloDatiDbContext modelloDatiDbContext;
        private BuildingService buildingService;

        public CustomerService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
            buildingService = new BuildingService();
        }

        public void Inserisci(String nome, String cognome, String username, String password, String user_role, String email)
        {
            modelloDatiDbContext.Customers.Add(new Customer() { Nome = nome, Cognome = cognome, Username = username, Password = password, User_role = user_role, Email = email });
            modelloDatiDbContext.SaveChanges();
        }

        public IEnumerable<CustomerDTO> Get()
        {

            List<CustomerDTO> l=new List<CustomerDTO>();

            foreach(Customer c in modelloDatiDbContext.Customers)
            {
                l.Add(CustomerConverter.convertToDto(c));
                
            }
            
            return l;

        }

        public CustomerDTO Get(int id)
        {
            Customer c = modelloDatiDbContext.Customers.Where(custom => custom.CustomerID == id).FirstOrDefault();
            return CustomerConverter.convertToDto(c);
        }

        public void Delete(int id)
        {
            Customer customer = modelloDatiDbContext.Customers.Find(id);
            modelloDatiDbContext.Customers.Remove(customer);
            modelloDatiDbContext.SaveChanges();
        }

        public CustomerDTO Modifica(int id, String nome, String cognome, String username, String password, String user_role, String email)
        {
            Customer customer = new Customer();
            foreach(Customer c in modelloDatiDbContext.Customers)
            {
                if (c.CustomerID == id)
                {
                    customer=modelloDatiDbContext.Customers.Where(custom => custom.CustomerID == id).FirstOrDefault();
                    customer.Nome = nome;
                    customer.Cognome = cognome;
                    customer.Username = username;
                    customer.Password = password;
                    customer.User_role = user_role;
                    customer.Email = email;
                }
            }
            modelloDatiDbContext.SaveChanges();
            return CustomerConverter.convertToDto(customer);
        }

    }
}