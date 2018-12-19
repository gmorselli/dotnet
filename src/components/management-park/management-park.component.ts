//previene la visualizzazione dell'errore Cannot find namespace "google",
//togliendo questa riga l'errore appare ma in realtà la libreria è vista e funziona correttamente.
/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Marker, InfoWindow } from '@agm/core/services/google-maps-types';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapService } from '../../services/google-map.service';
import { ManagementCarplace } from '../../models/ManagementCarPlace';

declare var google: any;

@Component({
  selector: 'app-management-park',
  templateUrl: './management-park.component.html',
  styleUrls: ['./management-park.component.css']
})
export class ManagementParkComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number;

  public iconBase: string = 'https://maps.google.com/mapfiles/kml/shapes/';

  public icons;

  public markers = [];
  public currentSelectedMarker: Marker;
  public infoWindow: InfoWindow;
  public markerMap = new Map();

  public freeCarPlaces: number = 0;
  public map: google.maps.Map;

  public exceedingInStot: string;

  public currentLatitude: number;
  public currentLongitude: number;

  public isSlotSelected: boolean = false;
  public CurrentManagementCarplace: ManagementCarplace;

  managementCarplacesList: Array<ManagementCarplace>;

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private googleMapsService: GoogleMapService,
    //private carService: CarService,
    //private paymentService: PaymentService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.updateSlots();

    this.zoom = 10;
    this.lat = 41.9;
    this.lng = 12.48;
  }

  updateSlots(): void {
    this.googleMapsService.getUpdatedSlots().subscribe((response) => {
      this.managementCarplacesList = response;
      this.DrawSlots(response);
    });
  }

  mapReady(map): void {
    this.map = map;

    this.infoWindow = new google.maps.InfoWindow();

    this.icons = {
      parking: {
        url: this.iconBase + 'parking_lot_maps.png'
      },
      parkingGreen: {
        icon: '/assets/green.png'
      },
      parkingRed: {
        icon: '/assets/red.png'
      },
      parkingYellow: {
        icon: '/assets/yellow.png'
      },
      start: {
        url: this.iconBase + 'cabs.png',
        scaledSize: new google.maps.Size(25, 25)
      }
    };
  }

  DrawSlots(objDTO): void {
    // rimuovo i markers precedenti
    var self = this;
    self.deleteMarkers();

    var title = [];
    for (var i = 0; i < objDTO.length; i++) {
      var obj = objDTO[i];

      var latLng = new google.maps.LatLng(
        obj.slot.latitude, obj.slot.longitude);
      var freeCarPlaces = obj.slot.number_carplace_free;
      var numberCarPlaces = obj.slot.number_carplace;
      var abusiveNumber = (obj.slot.number_carplace - obj.slot.number_carplace_free) - obj.stop_list.length;
      var hasOneExpired = false;
      for (var j = 0; j < obj.stop_list.length; j++) {
        if (obj.stop_list[j].expired === 1) {
          hasOneExpired = true;
          break;
        }
      }

      var info = "<h3>" + obj.slot.address + "</h3>"
        + "<br> Tariffa oraria: " + obj.slot.price + "\u20AC"
        + "<br> Numero posti: " + numberCarPlaces
        + "<br> Disponibli: " + freeCarPlaces
        + "<br><a id='slotInfo'>Dettagli</a>";

      title[i] = info;

      // make markers
      if (abusiveNumber > 0 || hasOneExpired === true)
        var marker = self.makeMarker(latLng, self.icons["parkingRed"].icon);
      else
        var marker = self.makeMarker(latLng, self.icons["parkingGreen"].icon);

      self.markerMap.set(marker, obj);
      self.AddMarkerEvent(marker, title[i]);
    }

    // se parto da lontano i marker devono essere invisibili se da vicino
    // visibili.
    // self.deleteMarkersZoom();
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers(): void {
    var self = this;
    self.clearMarkers();
    self.markers = [];
    self.markerMap.clear();
  };

  makeMarker(position, icon): any {
    var marker = new google.maps.Marker({
      position: position,
      map: this.map,
      icon: icon
    });
    this.markers.push(marker);
    return marker;
  };

  AddMarkerEvent(marker, content): void {
    var self = this;
    google.maps.event.addListener(marker, 'click',
      (function (marker, content) {

        return function () {
          self.currentSelectedMarker = marker;

          google.maps.event.clearListeners(self.infoWindow, 'domready');
          self.infoWindow.setContent(content);
          self.InitInfoWindowEvents(marker);
          self.infoWindow.open(this.map, marker);
        }
      })(marker, content));
  };


  InitInfoWindowEvents(marker): void {
    var self = this;
    google.maps.event.addListener(self.infoWindow, 'domready', function () {

      document.getElementById("slotInfo").addEventListener("click", function () {

        self.isSlotSelected = true;
        var obj = self.markerMap.get(self.currentSelectedMarker);
        self.CurrentManagementCarplace = obj;

        var exceedingNumber = (obj.slot.number_carplace - obj.slot.number_carplace_free) - obj.stop_list.length;
        if (exceedingNumber > 0) {
          self.exceedingInStot = "Ci sono " + exceedingNumber + " parcheggi non registrati in questa area parcheggi";         
        }
        //a quanto pare siamo fuori da ngZone e quindi dobbiamo dirgli manualmente di leggere i cambiamenti
        self.ref.detectChanges();
      });
    });
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers(): void {
    this.setMapOnAll(null);
  };

  // Sets the map on all markers in the array.
  setMapOnAll(map): void {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  };


  // Shows any markers currently in the array.
  showMarkers(): void {
    this.setMapOnAll(this.map);
  };


  // Hidden markers when zooming to far.
  deleteMarkersZoom(): void {
    if (this.map.getZoom() < 15) {
      console.log("zoom: " + this.map.getZoom());
      this.clearMarkers();
    } else {
      this.showMarkers();
    }
  };

}
