import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-driver',
  templateUrl: './report-driver.component.html',
  styleUrls: ['./report-driver.component.css']
})
export class ReportDriverComponent implements OnInit {

  public longitude: number;
  public latitude: number;
  selectedFile: File = null;
  constructor(private reportService: ReportService, private router: Router) { }


  ngOnInit() {
  }

  sendReport(f: NgForm): void {
    console.log("reportType:" + f.value.select);
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log("lat al send " +this.latitude);
          console.log("long al send " +this.longitude);

          this.reportService.sendReport(f.value.description, f.value.select, this.latitude, this.longitude, this.selectedFile).subscribe((response) => {
              console.log("RISPOSTA: " + response);
              this.router.navigateByUrl("/homeDriver");
          });
        });
      } else {
        console.log("Geolocation is a bitch");
      }
  
    

  }

  onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];

  }
  
}
