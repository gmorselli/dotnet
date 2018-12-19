import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/Report';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-report-near',
  templateUrl: './report-near.component.html',
  styleUrls: ['./report-near.component.css']
})
export class ReportNearComponent implements OnInit {

  map: Map<string, string> = new Map<string, string>();
  latitude: number;
  longitude: number;
  reports: Array<Report>;

  constructor(private reportService: ReportService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.map.set('0', "Avviso del gestore");
    this.map.set('1', "Abuso spazio dedicato a persone con disabilità");
    this.map.set('2', "Disservizio stradale");
    this.map.set('3', "Problema riscontrato nell'usufruire del servizio");

    this.onOpenReportNear();
  }

  onOpenReportNear(): void{

    console.log("QUI");
    //use localization to get position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("lat al onOpenNear " +this.latitude);
        console.log("long al onOpenNear " +this.longitude);
        this.reportService.onOpenNear(this.latitude,this.longitude).subscribe((response) => {
          console.log(response);
          this.reports = response;

          this.reports.forEach(report => {
            report.media = <string>this.sanitizer.bypassSecurityTrustUrl(report.media);
          });

        });
      });
    } else {
      console.log("Geolocation is a bitch");
    }


    

    }

  back(): void
  {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    if(user.type == 0) this.router.navigateByUrl("/homeOwner");
    if(user.type == 1) this.router.navigateByUrl("/homeDriver");
  }
}
