import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/Building';
import { BuildingService } from '../../services/building.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.css']
})
export class BuildingTableComponent implements OnInit {

  buildings: Building[];
  tableHeader: String[] = ['id', 'indirizzo', 'citta', 'cap', 'interno'];

  constructor(
    private buildingService: BuildingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildingService.getBuildingsByInstaller()
        .subscribe(response => this.buildings = response);
  }
}
