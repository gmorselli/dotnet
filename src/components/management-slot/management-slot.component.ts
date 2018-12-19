import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Slot } from '../../models/Slot';
import { Master } from '../../models/Master';
import { Slave } from '../../models/Slave';
import { SlotService } from '../../services/slot.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-management-slot',
  templateUrl: './management-slot.component.html',
  styleUrls: ['./management-slot.component.css']
})
export class ManagementSlotComponent implements OnInit {

  public slots: Array<Slot>;
  public masters: Array<Master>;
  public slaves: Array<Slave>;

  public selectedSlotID: number;
  public selectedMasterID: string;
  public selectedSlaveID: string;

  public selectedSlot: Slot;
  public selectedMaster: Master;
  public selectedSlave: Slave;

  public exists: boolean = false;

  public dummyCopySlot: Slot; 
  public dummyCopyMaster: Master; 
  public dummyCopySlave: Slave; 


  //0 = slot, 1 = master, 2 = slave
  public typeTable: number = -1;

  constructor(private slotService: SlotService,private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.slotService.getSlots().subscribe((response) => {
      this.slots = response;
    });

  }


  //SELECT METHODS
  selectSlot(slot: Slot): void{
    this.exists = true;

    this.selectedSlot = slot;
    this.dummyCopySlot = Object.assign({}, slot);

    this.typeTable = 0;

    this.selectedMaster = null;
    this.selectedSlave = null;

    this.selectedSlotID = slot.id;

    this.slotService.getMasters(slot.id).subscribe((response) => {
      this.masters = response;
      this.slaves = null;

      this.ref.detectChanges();
    });
  }

  selectMaster(master: Master): void{
    this.exists = true;

    this.selectedMaster = master;
    this.dummyCopyMaster = Object.assign({}, master);

    this.selectedSlave = null;

    this.selectedMasterID = master.id;

    this.slotService.getSlaves(master.id).subscribe((response) => {
      this.slaves = response;

      this.typeTable = 1;
      
      this.ref.detectChanges();
    });
  }

  selectSlave(slave: Slave): void{
    this.exists = true;

    this.selectedSlave = slave;
    this.dummyCopySlave = Object.assign({}, slave);

    this.selectedSlaveID = slave.id;

    this.typeTable = 2;
    this.ref.detectChanges();
  }

  //SHOW FORMS
  newSlot(): void {
    this.dummyCopySlot = Object.assign({}, new Slot(0,0,0,0,0,'',0,0,'') );
    this.exists = false;
    this.selectedSlot = null;
    this.selectedMaster = null;
    this.masters = null;
    this.selectedSlave = null;
    this.slaves = null;

    this.typeTable = 0;
    this.ref.detectChanges();
  }

  newMaster(): void {
    this.dummyCopyMaster = Object.assign({}, new Master('',0) );
    this.exists = false;
    this.selectedMaster = null;
    this.selectedSlave = null;
    this.slaves = null;

    this.typeTable = 1;
    this.ref.detectChanges();
  }

  newSlave(): void {
    this.dummyCopySlave = Object.assign({}, new Slave('',0,'') );
    this.exists = false;
    this.selectedSlave = null;

    this.typeTable = 2;
    this.ref.detectChanges();
  }


  //CALL DB SLOT
  deleteSlot(): void {
    this.slotService.deleteSlot(this.selectedSlotID).subscribe(response => {
      var index = this.slots.findIndex((slot) => { return slot.id == response });
      if (index > -1) {
        this.slots.splice(index, 1);
      }
      console.log("deleted Slot");
      this.selectedSlot = null;
      this.selectedMaster = null;
      this.selectedSlave = null;
      this.masters = null;
      this.slaves = null;

      this.typeTable = -1;
      this.ref.detectChanges();
    });
  }

  updateSlot(f: NgForm): void {

    console.log("address: " + f.value.address);
    
    this.slotService.updateSlot(this.selectedSlotID,f.value.latitude, f.value.longitude, f.value.price, f.value.address,  f.value.type).subscribe(response => {
      var index = this.slots.findIndex((slot) => { return slot.id == response.id });
      if (index > -1) {
        this.slots.splice(index, 1, response);
      }
      console.log("Updated Slot");  
      this.ref.detectChanges();
    });
  }

  addSlot(f: NgForm): void {
    this.slotService.addSlot(f.value.latitude, f.value.longitude, f.value.price, f.value.address, f.value.type).subscribe(response => {
      this.slots.push(response);
      console.log("Added Slot");  

      this.dummyCopySlot = Object.assign({}, new Slot(0,0,0,0,0,'',0,0,'') );
      this.ref.detectChanges();
    });
  }

  //CALL DB MASTER
  deleteMaster(): void {
    this.slotService.deleteMaster(this.selectedMasterID).subscribe(response => {
      var index = this.masters.findIndex((master) => { return master.id == response });
      if (index > -1) {
        this.masters.splice(index, 1);
      }
      console.log("deleted Master");
      this.selectedMaster = null;
      this.selectedSlave = null;
      this.slaves = null;
      this.typeTable = -1;
      this.ref.detectChanges();
    });
  }

  updateMaster(f: NgForm): void {
    this.slotService.updateMaster(f.value.idMaster,this.selectedSlotID).subscribe(response => {
      var index = this.masters.findIndex((master) => { return master.id == response.id });
      if (index > -1) {
        this.masters.splice(index, 1, response);
      }

      console.log("Updated Master");  
      this.ref.detectChanges();
     });
  }

  addMaster(f: NgForm): void {
    this.slotService.addMaster(f.value.idMaster,this.selectedSlotID).subscribe(response => {
      this.masters.push(response);
      console.log("Added Master");  

      this.dummyCopyMaster = Object.assign({}, new Master('',0) );
      this.ref.detectChanges();
    });
  }

  //CALL DB SLAVE
  deleteSlave(): void {
    this.slotService.deleteSlave(this.selectedSlaveID).subscribe(response => {
      var index = this.slaves.findIndex((slave) => { return slave.id == response });
      if (index > -1) {
        this.slaves.splice(index, 1);
      }

      this.selectedSlave = null;
      console.log("deleted Slave");
      this.typeTable = -1;
      this.ref.detectChanges();
    });
  }

  updateSlave(f: NgForm): void {
    //TODO: vedere come gestire lo state? per ora 0.
     this.slotService.updateSlave(f.value.idSlave,0,this.selectedMasterID).subscribe(response => {
      var index = this.slaves.findIndex((slave) => { return slave.id == response.id });
      if (index > -1) {
        this.slaves.splice(index, 1, response);
      }
      console.log("Updated Slave");  
      this.ref.detectChanges(); 
     });
  }

  addSlave(f: NgForm): void {
    //default state is 0, free slave.
    this.slotService.addSlave(f.value.idSlave,0,this.selectedMasterID).subscribe(response => {
      this.slaves.push(response);
      console.log("Added Slave");  

      this.dummyCopySlave = Object.assign({}, new Slave('',0,'') );
      this.ref.detectChanges();
    });
  }

}
