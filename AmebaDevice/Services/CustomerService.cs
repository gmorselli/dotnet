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


        public IEnumerable<CustomerDTO> GetByUserRole(string userRole)
        {

            List<CustomerDTO> l = new List<CustomerDTO>();

            foreach (Customer c in modelloDatiDbContext.Customers)
            {
                if (c.User_role.Equals(userRole))
                {
                    l.Add(CustomerConverter.convertToDto(c));
                }
                    
            }

            return l;

        }

        public CustomerDTO Get(int id)
        {
            Customer c = modelloDatiDbContext.Customers.Where(custom => custom.CustomerID == id).FirstOrDefault();
            return CustomerConverter.convertToDto(c);
        }

        public void Delete(string username)
        {
            Customer customer = modelloDatiDbContext.Customers.Where(c=>c.Username==username).FirstOrDefault();
            modelloDatiDbContext.Customers.Remove(customer);
            modelloDatiDbContext.SaveChanges();
        }

        public CustomerDTO Modifica(string username, string field, string newValue)
        {
            Customer customer = new Customer();
            
            customer = modelloDatiDbContext.Customers.Where(custom => custom.Username == username).FirstOrDefault();
            if (field.Equals("Nome"))
                customer.Nome = newValue;
            else if (field.Equals("Cognome"))
                customer.Cognome = newValue;
            else if (field.Equals("Email"))
                customer.Email = newValue;
            else if (field.Equals("Username"))
                customer.Username = newValue;
            else if (field.Equals("Password"))
                customer.Password = newValue;
                    
            modelloDatiDbContext.SaveChanges();
            return CustomerConverter.convertToDto(customer);
        }

        public CustomerDTO login(string username, string password)
        {
            Customer customer = modelloDatiDbContext.Customers.Where(c => c.Username == username && c.Password == password).FirstOrDefault();
            CustomerDTO customerDTO = new CustomerDTO();
            if (customer != null)
            {
                customerDTO = CustomerConverter.convertToDto(customer);
                return customerDTO;
            }
            else
                return null;
        }

    }
}