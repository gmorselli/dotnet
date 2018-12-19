using AmebaDevice.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.Services
{
    public class PrezzoService
    {

        public ModelloDatiDbContext modelloDatiDbContext;

        public PrezzoService()
        {
            this.modelloDatiDbContext = new ModelloDatiDbContext();
        }

        public void InserisciItemTypeInListino(double prezzo, int idItemType, int idListino)
        {
            ItemType itemType = modelloDatiDbContext.ItemTypes.Find(idItemType);
            Listino listino = modelloDatiDbContext.Listini.Find(idListino);
            Prezzo p = new Prezzo() { Price = prezzo, ItemType=itemType, Listino=listino };
            modelloDatiDbContext.Prezzi.Add(p);
            modelloDatiDbContext.SaveChanges();
        }

    }
}