using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class BuildingDTO
    {
        public int ID { get; set; }

        public String Address { get; set; }

        public String City { get; set; }

        public String Cap { get; set; }

        public String Interno { get; set; }
        public CustomerDTO CustomerDTO { get; set; }


        /*  ALTERNATIVAMENTE
        private int id;
        private string address;
        private string city;
        private string cap;
        private string interno;

        public int ID {
            get {
                return id;
            }
            set {
                id = value;
            }
        }

        public String Address {
            get {
                return address;
            } set {
                address = value;
            }
        }

        public String City {
            get {
                return city;
            }
            set {
                city = value;
            }
        }

        public String Cap {
            get {
                return cap;
            }
            set {
                cap = value;
            }
        }

        public String Interno
        {
            get
            {
                return interno;
            }
            set
            {
                interno = value;
            }
        }
        */



        public BuildingDTO()
        {
        }

        public BuildingDTO(int buildingId, String indirizzo, String citta, String cap, String interno, CustomerDTO owner, CustomerDTO installer)
        {
            this.ID = buildingId;
            this.Address = indirizzo;
            this.City = citta;
            this.Cap = cap;
            this.Interno = interno;
        }

       

    }
}
 