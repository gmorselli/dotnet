using AmebaDevice.Converter;
using AmebaDevice.DAL;
using AmebaDevice.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class ThingService
    {
        private ModelloDatiDbContext modelloDatiDbContext;

        public ThingService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
        }

        public IEnumerable<ThingDTO> Get()
        {
            List<ThingDTO> l = new List<ThingDTO>();

            foreach (Thing t in modelloDatiDbContext.Things)
            {
                l.Add(ThingConverter.convertToDto(t));
            }

            return l;
        }

        public ThingDTO Get(int id)
        {
            Thing t = modelloDatiDbContext.Things.Find(id);
            return ThingConverter.convertToDto(t);
        }


        public void Inserisci()
        {
            modelloDatiDbContext.SaveChanges();
        }

        public void Associa(String num_Uscite, double prezzo, int idCustomer, int idBuilding)
        {
            //Se viene fornito un idCustomer <= 0 il Customer della Thing viene settato a null
            Customer c;
            if (idCustomer <= 0)
            {
                c = null;
            }
            else
            {
                c = modelloDatiDbContext.Customers.Find(idCustomer);
            }
            Building b = modelloDatiDbContext.Buildings.Find(idBuilding);
            Thing t = modelloDatiDbContext.Things.Add(new Thing() { Num_Uscite = num_Uscite, Prezzo = prezzo, Customer = c, Building = b });
            Inserisci();
        }
        

        public void Delete(int id)
        {
            modelloDatiDbContext.Things.Remove(modelloDatiDbContext.Things.Find(id));
            modelloDatiDbContext.SaveChanges();
        }

        public ThingDTO Modifica(int id, String num_Uscite, double prezzo, int customerID, int buildingID)
        {
            Thing thing = new Thing();
            foreach (Thing t in modelloDatiDbContext.Things)
            {
                if (t.ThingID == id)
                {
                    thing = modelloDatiDbContext.Things.Where(tt => tt.ThingID == id).FirstOrDefault();
                    thing.Num_Uscite = num_Uscite;
                    thing.Prezzo = prezzo;
                    thing.Customer = modelloDatiDbContext.Customers.Find(customerID);
                    thing.Building = modelloDatiDbContext.Buildings.Find(buildingID);
                }
            }
            modelloDatiDbContext.SaveChanges();
            return ThingConverter.convertToDto(thing);
        }

    }
}