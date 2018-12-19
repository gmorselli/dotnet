using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DAL
{
    public class MyInizializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<ModelloDatiDbContext>
    {

        protected override void Seed(ModelloDatiDbContext context)
        {
            context.Customers.Add(new Customer { Nome = "Marco", Cognome = "Minervino", Username = "username", Password = "password", Email = "Email", User_role = "1" });
            context.SaveChanges();

            context.Buildings.Add(new Building { Indirizzo = "Indirizzo", Cap = "8", Citta = "Paola", Interno = "test" });
            context.SaveChanges();
        }


    }
}