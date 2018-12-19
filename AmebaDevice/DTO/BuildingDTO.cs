using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AmebaDevice.DTO
{
    public class BuildingDTO
    {
        public int id { get; set; }

        public String address { get; set; }

        public String city { get; set; }

        public String cap { get; set; }

        public String interno { get; set; }
        public CustomerDTO customer { get; set; }


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
            this.id = buildingId;
            this.address = indirizzo;
            this.city = citta;
            this.cap = cap;
            this.interno = interno;
        }

       

    }
}
 