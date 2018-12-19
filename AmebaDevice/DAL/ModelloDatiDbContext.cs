using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity.Validation;

namespace AmebaDevice.DAL
{
    public class ModelloDatiDbContext : DbContext
    {
        
        public ModelloDatiDbContext() : base("ModelContainer")
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Building> Buildings { get; set; }
        public DbSet<Floor> Floors { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Thing> Things { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemType> ItemTypes { get; set; }
        public DbSet<Listino> Listini { get; set; }
        public DbSet<Prezzo> Prezzi { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            System.Diagnostics.Debug.WriteLine("OnModelCreatinggggg...");

            modelBuilder.Entity<Building>()
                .HasOptional<Customer>(c => c.Customer)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Floor>()
               .HasOptional<Building>(b => b.Building)
               .WithMany()
               .WillCascadeOnDelete(true);

        }


        



    }
}