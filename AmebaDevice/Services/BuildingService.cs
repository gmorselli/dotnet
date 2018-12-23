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
    public class BuildingService
    {

        private ModelloDatiDbContext modelloDatiDbContext;
        private FloorService floorService;

        public BuildingService()
        {
            modelloDatiDbContext = new ModelloDatiDbContext();
            floorService = new FloorService();
        }

        
        public void Inserisci(Building b)
        {
            modelloDatiDbContext.SaveChanges();
        }

        public void Associa(String indirizzo, String citta, String cap, String interno, int id)
        {
            Customer c=modelloDatiDbContext.Customers.Find(id);
            Building b=modelloDatiDbContext.Buildings.Add(new Building() { Indirizzo = indirizzo, Citta = citta, Cap = cap, Interno = interno, Customer = c });
            Inserisci(b);
        }

        public IEnumerable<BuildingDTO> Get()
        {
            List<BuildingDTO> l = new List<BuildingDTO>();

            foreach (Building b in modelloDatiDbContext.Buildings)
            {
                l.Add(BuildingConverter.convertToDto(b));
            }
            

            return l;
        }


        public BuildingDTO Get(int id)
        {
            Building b=modelloDatiDbContext.Buildings.Where(build=>build.BuildingID==id).FirstOrDefault();
            return BuildingConverter.convertToDto(b);
        }

        public void Delete(int id)
        {
            Building building = modelloDatiDbContext.Buildings.Find(id);
            modelloDatiDbContext.Buildings.Remove(building);
            modelloDatiDbContext.SaveChanges();
        }


        public List<BuildingDTO> GetByInstaller(string username)
        {
            //Ottengo il customer con lo username passatomi come parametro
            Customer customer = modelloDatiDbContext.Customers.Where(c => c.Username.Equals(username)).FirstOrDefault();

            //Ottengo la lista di building che hanno come customerID (chiave esterna) l'id del customer trovato in precedenza
            List<Building> buildings = modelloDatiDbContext.Buildings.Where(b => b.Customer.CustomerID == customer.CustomerID).ToList();

            List<BuildingDTO> buildingDTOs = new List<BuildingDTO>();

            foreach(Building b in buildings)
            {
                buildingDTOs.Add(BuildingConverter.convertToDto(b));
            }

            return buildingDTOs;
        }


        public BuildingDTO Modifica(int buildingID, String indirizzo, String cap, String citta, String interno)
        {
            Building building = new Building();
            foreach (Building b in modelloDatiDbContext.Buildings)
            {
                if (b.BuildingID == buildingID)
                {
                    building = modelloDatiDbContext.Buildings.Where(bb => bb.BuildingID == buildingID).FirstOrDefault();
                    building.Indirizzo = indirizzo;
                    building.Cap = cap;
                    building.Citta = citta;
                    building.Interno = interno;
                    //building.Customer = modelloDatiDbContext.Customers.Find(customerID);
                }
            }
            modelloDatiDbContext.SaveChanges();
            return BuildingConverter.convertToDto(building);
        }


        public CustomerDTO AssociaACustomer(int buildingID, string username)
        {
            Building b = modelloDatiDbContext.Buildings.Find(buildingID);
            Customer c = modelloDatiDbContext.Customers.Where(cc => cc.Username == username).FirstOrDefault();

            b.Customer = c;
            modelloDatiDbContext.SaveChanges();
            return CustomerConverter.convertToDto(c);
        }

    }
}