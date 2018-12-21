using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class ItemTypeService
    {
        private ModelloDatiDbContext ModelloDatiDbContext;
        //private CustomerService Customer;

        public ItemTypeService()
        {
            ModelloDatiDbContext = new ModelloDatiDbContext();
           // Customer = new CustomerService();
        }

        public void Inserisci()
        {
            ModelloDatiDbContext.SaveChanges();
        }

        public IEnumerable<ItemTypeDTO> Get()
        {
            List<ItemTypeDTO> list = new List<ItemTypeDTO>();
            foreach(ItemType i in ModelloDatiDbContext.ItemTypes)
            {
                list.Add(ItemTypeConverter.ConverToDTO(i));

            }
            return list;
        }

        public ItemTypeDTO Get(int id)
        {
            ItemType item = ModelloDatiDbContext.ItemTypes.Find(id);
            return ItemTypeConverter.ConverToDTO(item);
        }

        public void Associa(string categoria, string descrizione, string marca, string modello, int id)
        {
            Customer c = ModelloDatiDbContext.Customers.Find(id);
            ItemType i = new ItemType() { Categoria=categoria, Descrizione=descrizione,Marca=marca,Modello=modello,Customer=c};
            ModelloDatiDbContext.ItemTypes.Add(i);
            Inserisci();
        }

        public ItemTypeDTO Modifica(int id, string categoria, string descrizione, string marca, string modello)
        {
            ItemType item = ModelloDatiDbContext.ItemTypes.Find(id);
            //ItemType item = new ItemType();
            item.Categoria = categoria;
            item.Descrizione = descrizione;
            item.Marca = marca;
            item.Modello = modello;
            ModelloDatiDbContext.SaveChanges();

            return ItemTypeConverter.ConverToDTO(item);
        }

        public void Delete(int id)
        {
            ModelloDatiDbContext.ItemTypes.Remove(ModelloDatiDbContext.ItemTypes.Find(id));
            ModelloDatiDbContext.SaveChanges();
        }

    }
}