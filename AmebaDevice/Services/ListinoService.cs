using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class ListinoService
    {

        public ModelloDatiDbContext modelloDatiDbContext;

        public ListinoService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
        }

        public List<ListinoDTO> Get()
        {
            List<ListinoDTO> lDTO = new List<ListinoDTO>();
            foreach(Listino l in modelloDatiDbContext.Listini)
            {
                lDTO.Add(ListinoConverter.convertToDTO(l));
            }
            return lDTO;
        }

        public ListinoDTO Get(int id)
        {
            return ListinoConverter.convertToDTO(modelloDatiDbContext.Listini.Find(id));
        }

        public void Inserisci()
        {
            modelloDatiDbContext.SaveChanges();
        }

        public void Associa(string anno, string nome, int idInstaller, int idManufacturer)
        {
            Customer installer = modelloDatiDbContext.Customers.Find(idInstaller);
            Customer manufacturer = modelloDatiDbContext.Customers.Find(idManufacturer);
            Listino l = new Listino() { Anno=anno, Nome=nome, Installer=installer, Manufacturer=manufacturer};
            modelloDatiDbContext.Listini.Add(l);
            Inserisci();
        }

        public void Delete(int id)
        {
            modelloDatiDbContext.Listini.Remove(modelloDatiDbContext.Listini.Find(id));
            modelloDatiDbContext.SaveChanges();
        }

        public ListinoDTO Modifica(int id, string anno, string nome, int idInstaller, int idManufacturer)
        {
            Listino l = modelloDatiDbContext.Listini.Find(id);
            l.ListinoID = id;
            l.Anno = anno;
            l.Nome = nome;
            l.Installer = modelloDatiDbContext.Customers.Find(idInstaller);
            l.Manufacturer = modelloDatiDbContext.Customers.Find(idManufacturer);
            return ListinoConverter.convertToDTO(l);
        }



    }
}